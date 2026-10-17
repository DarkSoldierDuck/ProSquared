import { describe, it, expect } from 'vitest'
import type { BudgetItem } from '../../types'
import { isActualExpense, budgetVsActual, categoryBreakdown, dailyTrend } from './BudgetDashboard.helpers'

function item(partial: Partial<BudgetItem>): BudgetItem {
  return {
    id: 1,
    trip_id: 1,
    category: 'Other',
    name: 'x',
    total_price: 0,
    ...partial,
  } as BudgetItem
}

describe('isActualExpense', () => {
  it('is true for dated items', () => {
    expect(isActualExpense(item({ expense_date: '2026-10-17' }))).toBe(true)
  })

  it('is true for reservation-linked items without a date', () => {
    expect(isActualExpense(item({ reservation_id: 5 }))).toBe(true)
  })

  it('is false for undated, unlinked (plan-only) items', () => {
    expect(isActualExpense(item({ expense_date: null, reservation_id: null }))).toBe(false)
    expect(isActualExpense(item({}))).toBe(false)
  })
})

describe('budgetVsActual', () => {
  it('sums every row into the budget, only actual rows into actual', () => {
    const r = budgetVsActual([
      item({ id: 1, total_price: 100, expense_date: '2026-10-01' }),
      item({ id: 2, total_price: 50, reservation_id: 3 }),
      item({ id: 3, total_price: 250 }),
    ])
    expect(r.budgetTotal).toBe(400)
    expect(r.actualTotal).toBe(150)
    expect(r.remaining).toBe(250)
    expect(r.percent).toBe(37.5)
    expect(r.actualCount).toBe(2)
  })

  it('reaches exactly 100% when every planned item has happened', () => {
    const r = budgetVsActual([
      item({ id: 1, total_price: 80, expense_date: '2026-10-01' }),
      item({ id: 2, total_price: 40, expense_date: '2026-10-02' }),
    ])
    expect(r.remaining).toBe(0)
    expect(r.percent).toBe(100)
  })

  it('handles an empty list and a zero budget without dividing by zero', () => {
    expect(budgetVsActual([])).toEqual({ budgetTotal: 0, actualTotal: 0, remaining: 0, percent: 0, actualCount: 0 })
    expect(budgetVsActual([item({ total_price: 0, expense_date: '2026-10-01' })]).percent).toBe(0)
  })

  it('treats a missing total_price as 0, never NaN', () => {
    const r = budgetVsActual([item({ total_price: undefined as unknown as number })])
    expect(r.budgetTotal).toBe(0)
  })
})

describe('categoryBreakdown', () => {
  it('aggregates by category, descending, skipping zero-priced rows', () => {
    const r = categoryBreakdown([
      item({ category: 'fuel', total_price: 30 }),
      item({ category: 'fuel', total_price: 10 }),
      item({ category: 'lodging', total_price: 200 }),
      item({ category: 'food', total_price: 0 }),
    ])
    expect(r).toEqual([
      { name: 'lodging', value: 200 },
      { name: 'fuel', value: 40 },
    ])
  })

  it('falls back to Other for a missing category', () => {
    expect(categoryBreakdown([item({ category: '', total_price: 5 })])).toEqual([{ name: 'Other', value: 5 }])
  })
})

describe('dailyTrend', () => {
  it('aggregates dated expenses per day and sorts ascending', () => {
    const r = dailyTrend([
      item({ total_price: 12, expense_date: '2026-10-03' }),
      item({ total_price: 8, expense_date: '2026-10-01' }),
      item({ total_price: 5, expense_date: '2026-10-03T14:00:00.000Z' }),
      item({ total_price: 99 }),
    ])
    expect(r).toEqual([
      { date: '2026-10-01', value: 8 },
      { date: '2026-10-03', value: 17 },
    ])
  })

  it('is empty when nothing is dated', () => {
    expect(dailyTrend([item({ total_price: 50 })])).toEqual([])
  })
})