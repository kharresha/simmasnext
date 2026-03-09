import { AdminStats, RecentMagang, RecentLogbook, ActiveDudi } from '@/types/admin'

const fetcher = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })

  if (!res.ok) {
    throw new Error(`API Error: ${res.statusText}`)
  }

  return res.json()
}

export type DashboardDataResponse = {
  stats: AdminStats
  recent: RecentMagang[]
  recentLogbooks: RecentLogbook[]
  activeDudis: ActiveDudi[]
}

export const api = {
  admin: {
    getDashboard: () => fetcher<DashboardDataResponse>('/api/admin/dashboard'),
  },
}
