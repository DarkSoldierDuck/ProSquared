import type { BudgetItem } from '../../types'

/**
 * Budget dashboard aggregations — pure functions over the trip's existing
 * budget items (the Costs module's own data; no new tables, no new endpoints).
 *
 * Terminology (deliberate, mirrors how CostsPanel treats rows):
 *  - "budget"   = every budget item's total_price summed (the planned total)
 *  - "actual"   = items that already happened: dated (expense_date) or linked
 *                 to a booking (reservation_id). Undated, unlinked rows stay
 *                 reserved/plan-only and are excluded from every actual figure.
 */

/** An expense counts as "actual" once it is dated or tied to a reservation. */
export function isActualExpense(item: Pick<BudgetItem, 'expense_date' | 'reservation_id'>): boolean {
  return item.expense_date != null || item.reservation_id != null
}

export interface BudgetVsActual {
  /** Planned total — every item's total_price summed. */
  budgetTotal: number
  /** Sum of actual (dated or reservation-linked) items. */
  actualTotal: number
  /** budgetTotal - actualTotal; negative when over budget. */
  remaining: number
  /** actual / budget * 100, 0 when there is no budget. */
  percent: number
  /** Number of items feeding the actual figure. */
  actualCount: number
}

export function budgetVsActual(items: BudgetItem[]): BudgetVsActual {
  const budgetTotal = items.reduce((s, it) => s + (it.total_price || 0), 0)
  const actual = items.filter(isActualExpense)
  const actualTotal = actual.reduce((s, it) => s + (it.total_price || 0), 0)
  return {
    budgetTotal,
    actualTotal,
    remaining: budgetTotal - actualTotal,
    percent: budgetTotal > 0 ? (actualTotal / budgetTotal) * 100 : 0,
    actualCount: actual.length,
  }
}

export interface CategorySlice {
  name: string
  value: number
}

/** Spending by budget category, descending; only priced rows. */
export function categoryBreakdown(items: BudgetItem[]): CategorySlice[] {
  const byCat = new Map<string, number>()
  for (const it of items) {
    const price = it.total_price || 0
    if (price <= 0) continue
    const cat = it.category || 'Other'
    byCat.set(cat, (byCat.get(cat) || 0) + price)
  }
  return [...byCat.entries()]
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
}

export interface DailyPoint {
  /** yyyy-mm-dd as stored on the item. */
  date: string
  value: number
}

/**
 * Daily spending trend over dated expenses, ascending by date. Only rows with
 * an expense_date can anchor a day, so undated rows are skipped here (they are
 * already covered by the budget-vs-actual and category cards).
 */
export function dailyTrend(items: BudgetItem[]): DailyPoint[] {
  const byDay = new Map<string, number>()
  for (const it of items) {
    if (!it.expense_date) continue
    const day = it.expense_date.slice(0, 10)
    byDay.set(day, (byDay.get(day) || 0) + (it.total_price || 0))
  }
  return [...byDay.entries()]
    .map(([date, value]) => ({ date, value }))
    .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0))
}