import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, CalendarRange, LayoutDashboard, PieChart as PieChartIcon, Scale, TrendingUp } from 'lucide-react'
import { useTripStore } from '../../store/tripStore'
import { useTranslation } from '../../i18n'
import { budgetApi } from '../../api/client'
import PieChart from './BudgetPanelPieChart'
import { widgetTheme, fmtNum } from './BudgetPanel.helpers'
import { PIE_COLORS } from './BudgetPanel.constants'
import { budgetVsActual, categoryBreakdown, dailyTrend } from './BudgetDashboard.helpers'
import type { BudgetItem } from '../../types'
import EmptyState from '../shared/EmptyState'

interface BudgetDashboardProps {
  tripId: number
}

interface SettlementBalance {
  user_id: number
  username: string
  avatar_url: string | null
  balance: number
}

interface SettlementFlow {
  from: { user_id: number; username: string }
  to: { user_id: number; username: string }
  amount: number
}

interface SettlementData {
  balances: SettlementBalance[]
  flows: SettlementFlow[]
}

function useIsDark(): boolean {
  const [dark, setDark] = useState<boolean>(() => typeof document !== 'undefined' && document.documentElement.classList.contains('dark'))
  useEffect(() => {
    if (typeof document === 'undefined') return
    const mo = new MutationObserver(() => setDark(document.documentElement.classList.contains('dark')))
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => mo.disconnect()
  }, [])
  return dark
}

function Card({ theme, icon, title, children }: { theme: ReturnType<typeof widgetTheme>; icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <section style={{
      background: theme.bg,
      border: `1px solid ${theme.border}`,
      borderRadius: 16,
      boxShadow: theme.shadow,
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minHeight: 240,
    }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{
          width: 34, height: 34, borderRadius: 10, flexShrink: 0,
          background: theme.iconBg, border: `1px solid ${theme.iconBorder}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: theme.iconColor,
        }}>{icon}</span>
        <h3 style={{ margin: 0, fontSize: 'calc(14px * var(--fs-scale-body, 1))', fontWeight: 600, color: theme.text }}>{title}</h3>
      </header>
      {children}
    </section>
  )
}

export default function BudgetDashboard({ tripId }: BudgetDashboardProps) {
  const { trip, budgetItems, loadBudgetItems } = useTripStore()
  const { t, locale } = useTranslation()
  const isDark = useIsDark()
  const theme = useMemo(() => widgetTheme(isDark), [isDark])
  const currency = (trip?.currency || 'EUR').toUpperCase()
  const [settlement, setSettlement] = useState<SettlementData | null>(null)

  useEffect(() => { loadBudgetItems(tripId) }, [tripId, loadBudgetItems])
  useEffect(() => {
    let alive = true
    budgetApi.settlement(tripId).then((data: SettlementData) => { if (alive) setSettlement(data) }).catch(() => {})
    return () => { alive = false }
  }, [tripId, budgetItems])

  const vs = useMemo(() => budgetVsActual(budgetItems), [budgetItems])
  const cats = useMemo(() => categoryBreakdown(budgetItems), [budgetItems])
  const daily = useMemo(() => dailyTrend(budgetItems), [budgetItems])

  const pieSegments = useMemo(() => cats.map((c, i) => ({
    label: c.name,
    value: c.value,
    color: PIE_COLORS[i % PIE_COLORS.length],
  })), [cats])

  const maxDaily = daily.length ? Math.max(...daily.map(d => d.value)) : 0
  const items: BudgetItem[] = budgetItems

  const money = (v: number) => fmtNum(v, locale, currency)

  if (!items.length) {
    return (
      <div style={{ padding: '48px 20px', display: 'flex', justifyContent: 'center' }}>
        <EmptyState scene="costs" title={t('budgetBoard.empty')} />
      </div>
    )
  }

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: 16,
    padding: '20px',
    maxWidth: 1280,
    margin: '0 auto',
  }

  return (
    <div style={{ height: '100%', overflowY: 'auto', overscrollBehavior: 'contain' }}>
      <div style={gridStyle}>

        <Card theme={theme} icon={<Scale size={17} />} title={t('budgetBoard.vsActual')}>
          <div style={{ fontSize: 'calc(26px * var(--fs-scale-title, 1))', fontWeight: 700, color: theme.text }}>
            {money(vs.actualTotal)}
          </div>
          <div style={{ fontSize: 'calc(12px * var(--fs-scale-caption, 1))', color: theme.sub }}>
            {t('budgetBoard.ofBudget', { total: money(vs.budgetTotal) })}
          </div>
          <div style={{
            height: 10, borderRadius: 999, background: theme.track,
            border: `1px solid ${theme.border}`, overflow: 'hidden',
          }}>
            <div style={{
              width: `${Math.min(100, Math.max(0, vs.percent))}%`,
              height: '100%',
              background: vs.percent > 100
                ? 'linear-gradient(90deg, #f59e0b, #ef4444)'
                : 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              borderRadius: 999,
              transition: 'width .4s ease',
            }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'calc(12px * var(--fs-scale-caption, 1))' }}>
            <span style={{ color: theme.sub }}>{t('budgetBoard.utilization')} <b style={{ color: vs.percent > 100 ? '#ef4444' : theme.text }}>{Math.round(vs.percent)}%</b></span>
            <span style={{ color: vs.remaining < 0 ? '#ef4444' : '#10b981', fontWeight: 600 }}>
              {vs.remaining < 0 ? t('budgetBoard.overBudget') : t('budgetBoard.remaining')} {money(Math.abs(vs.remaining))}
            </span>
          </div>
        </Card>

        <Card theme={theme} icon={<PieChartIcon size={17} />} title={t('budgetBoard.categoryShare')}>
          {cats.length ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', justifyContent: 'center' }}>
              <PieChart segments={pieSegments} size={170} totalLabel={t('budgetBoard.categoriesCount', { count: cats.length })} />
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 6, flex: 1, minWidth: 150 }}>
                {cats.map((c, i) => (
                  <li key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'calc(12px * var(--fs-scale-caption, 1))' }}>
                    <span style={{ width: 10, height: 10, borderRadius: 3, background: PIE_COLORS[i % PIE_COLORS.length], flexShrink: 0 }} />
                    <span style={{ color: theme.text, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.name}</span>
                    <span style={{ color: theme.sub }}>{money(c.value)}</span>
                    <span style={{ color: theme.faint, width: 44, textAlign: 'right' }}>{Math.round((c.value / (vs.budgetTotal || 1)) * 100)}%</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.faint, flex: 1 }}>{t('budgetBoard.noPriced')}</div>
          )}
        </Card>

        <Card theme={theme} icon={<TrendingUp size={17} />} title={t('budgetBoard.dailyTrend')}>
          {daily.length ? (
            <>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 120 }}>
                {daily.map(d => (
                  <div key={d.date} title={`${d.date}: ${money(d.value)}`} style={{
                    flex: 1, minWidth: 14, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100',
                  }}>
                    <div style={{
                      height: `${maxDaily > 0 ? Math.max(4, (d.value / maxDaily) * 100) : 0}%`,
                      background: 'linear-gradient(180deg, #8b5cf6, #6366f1)',
                      borderRadius: '6px 6px 2px 2px',
                      transition: 'height .4s ease',
                    }} />
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'calc(11px * var(--fs-scale-caption, 1))', color: theme.faint }}>
                <span>{daily[0]?.date.slice(5)}</span>
                {daily.length > 2 && <span>{t('budgetBoard.peak')} {money(maxDaily)}</span>}
                <span>{daily[daily.length - 1]?.date.slice(5)}</span>
              </div>
              <div style={{ fontSize: 'calc(12px * var(--fs-scale-caption, 1))', color: theme.sub }}>
                <CalendarRange size={12} style={{ verticalAlign: -2, marginRight: 4 }} />
                {t('budgetBoard.daysCount', { count: daily.length })} · {t('budgetBoard.itemsCount', { count: vs.actualCount })}
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.faint, flex: 1 }}>{t('budgetBoard.noDaily')}</div>
          )}
        </Card>

        <Card theme={theme} icon={<ArrowRight size={17} />} title={t('budgetBoard.memberSplit')}>
          {settlement ? (
            <>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {settlement.balances.map(b => (
                  <li key={b.user_id} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'calc(12px * var(--fs-scale-caption, 1))' }}>
                    <span style={{
                      width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                      background: theme.iconBg, border: `1px solid ${theme.iconBorder}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: theme.iconColor, fontSize: 11, fontWeight: 600,
                    }}>{(b.username || '?').slice(0, 1).toUpperCase()}</span>
                    <span style={{ color: theme.text, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{b.username}</span>
                    <span style={{ fontWeight: 600, color: b.balance > 0 ? '#10b981' : b.balance < 0 ? '#ef4444' : theme.faint }}>
                      {b.balance > 0 ? '+' : ''}{money(b.balance)}
                    </span>
                  </li>
                ))}
              </ul>
              <div style={{ borderTop: `1px solid ${theme.divider}`, paddingTop: 10 }}>
                <div style={{ fontSize: 'calc(12px * var(--fs-scale-caption, 1))', color: theme.sub, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <LayoutDashboard size={13} /> {t('budgetBoard.suggestedTransfers')}
                </div>
                {settlement.flows.length ? (
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {settlement.flows.map((f, i) => (
                      <li key={i} style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        fontSize: 'calc(12px * var(--fs-scale-caption, 1))',
                        background: theme.flowBg, border: `1px solid ${theme.flowBorder}`,
                        borderRadius: 10, padding: '6px 10px',
                      }}>
                        <span style={{ color: theme.text, flex: 1 }}>{f.from.username}</span>
                        <ArrowRight size={13} color={theme.faint} />
                        <span style={{ color: theme.text, flex: 1, textAlign: 'right' }}>{f.to.username}</span>
                        <span style={{ fontWeight: 600, color: theme.text, minWidth: 80, textAlign: 'right' }}>{money(f.amount)}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div style={{ fontSize: 'calc(12px * var(--fs-scale-caption, 1))', color: '#10b981', fontWeight: 600 }}>✓ {t('budgetBoard.allSettled')}</div>
                )}
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.faint, flex: 1 }}>{t('budgetBoard.settlementUnavailable')}</div>
          )}
        </Card>

      </div>
    </div>
  )
}