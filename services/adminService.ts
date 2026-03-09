import { supabase } from '@/lib/supabase'
import { AdminStats, RecentMagang, RecentLogbook, ActiveDudi } from '@/types/admin'

export const adminService = {
  getDashboardStats: async (): Promise<AdminStats> => {
    const { count: totalSiswa } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true })
      .eq('role', 'SISWA')
      
    const { count: totalDudi } = await supabase
      .from('dudi')
      .select('*', { count: 'exact', head: true })
      
    const { count: siswaMagang } = await supabase
      .from('magang')
      .select('*', { count: 'exact', head: true })
      .in('status', ['aktif', 'berjalan', 'menunggu'])
      
    const today = new Date().toISOString().split('T')[0]
    const { count: logbookHariIni } = await supabase
      .from('logbooks')
      .select('*', { count: 'exact', head: true })
      .eq('tanggal', today)

    return {
      totalSiswa: totalSiswa || 0,
      totalDudi: totalDudi || 0,
      siswaMagang: siswaMagang || 0,
      logbookHariIni: logbookHariIni || 0,
    }
  },

  getRecentMagang: async (): Promise<RecentMagang[]> => {
    const { data, error } = await supabase
      .from('magang')
      .select(`
        id, 
        tgl_mulai, 
        tgl_selesai, 
        status,
        profiles(full_name),
        dudi(nama_perusahaan)
      `)
      .order('created_at', { ascending: false })
      .limit(5)

    if (error || !data) return []

    return data.map((item: any) => ({
      id: item.id,
      namaSiswa: Array.isArray(item.profiles) ? item.profiles[0]?.full_name : item.profiles?.full_name || 'Tidak diketahui',
      dudi: Array.isArray(item.dudi) ? item.dudi[0]?.nama_perusahaan : item.dudi?.nama_perusahaan || 'Tidak diketahui',
      startDate: item.tgl_mulai,
      endDate: item.tgl_selesai,
      status: item.status === 'aktif' ? 'Aktif' : 'Menunggu',
    }))
  },

  getRecentLogbooks: async (): Promise<RecentLogbook[]> => {
    const { data, error } = await supabase
      .from('logbooks')
      .select('id, kegiatan, tanggal, kendala, status')
      .order('created_at', { ascending: false })
      .limit(3)
      
    if (error || !data) return []
    
    return data.map((item: any) => ({
      id: item.id,
      kegiatan: item.kegiatan,
      tanggal: item.tanggal,
      kendala: item.kendala,
      status: item.status === 'pending' ? 'pending' : item.status === 'Disetujui' ? 'Disetujui' : item.status === 'approved' ? 'Disetujui' : 'Ditolak',
    }))
  },

  getActiveDudi: async (): Promise<ActiveDudi[]> => {
    const { data, error } = await supabase
      .from('dudi')
      .select(`
        id, 
        nama_perusahaan, 
        alamat, 
        no_telp,
        magang(count)
      `)
      .eq('is_active', true)
      .limit(4)
      
    if (error || !data) return []
    
    return data.map((item: any) => ({
      id: item.id,
      namaPerusahaan: item.nama_perusahaan,
      alamat: item.alamat,
      noTelp: item.no_telp || '-',
      jumlahSiswa: item.magang[0]?.count || 0
    }))
  }
}
