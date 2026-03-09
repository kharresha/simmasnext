'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import Navbar from '@/components/admin/Navbar';
import { api } from '@/lib/api';
import { AdminStats, RecentMagang, RecentLogbook, ActiveDudi } from '@/types/admin';

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [recent, setRecent] = useState<RecentMagang[]>([]);
  const [recentLogbooks, setRecentLogbooks] = useState<RecentLogbook[]>([]);
  const [activeDudis, setActiveDudis] = useState<ActiveDudi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await api.admin.getDashboard();
        setStats(data.stats);
        setRecent(data.recent);
        setRecentLogbooks(data.recentLogbooks);
        setActiveDudis(data.activeDudis);
      } catch (error) {
        console.error("Gagal memuat data dashboard:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
       <div className="text-center space-y-4">
         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto"></div>
         <p className="text-slate-500 font-medium">Memuat data dashboard...</p>
       </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans text-slate-700">
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 md:ml-[260px] min-h-screen">
        
        {/* NAVBAR */}
        <Navbar />

        {/* CONTENT CONTAINER */}
        <div className="p-4 md:p-10 max-w-[1400px] mx-auto space-y-10">
          
          {/* Welcome Text */}
          <div className="space-y-2">
            <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">Dashboard</h3>
            <p className="text-slate-500 font-medium">Selamat datang di sistem pelaporan magang siswa SMK Negeri 1 Surabaya</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Total Siswa" value={stats?.totalSiswa || 0} sub="Seluruh siswa terdaftar" icon="users" color="text-blue-500" />
            <StatCard title="DUDI Partner" value={stats?.totalDudi || 0} sub="Perusahaan mitra" icon="building" color="text-cyan-500" />
            <StatCard title="Siswa Magang" value={stats?.siswaMagang || 0} sub="Sedang aktif magang" icon="cap" color="text-teal-500" />
            <StatCard title="Logbook Hari Ini" value={stats?.logbookHariIni || 0} sub="Laporan masuk hari ini" icon="book" color="text-blue-600" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Magang Terbaru */}
            <div className="lg:col-span-2 bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
              <div className="p-8 border-b border-slate-50 flex items-center gap-3">
                <div className="text-cyan-500"><Icon type="cap" /></div>
                <h5 className="font-bold text-lg text-slate-800">Magang Terbaru</h5>
              </div>
              <div className="p-8 space-y-4">
                {recent.length > 0 ? recent.map((item) => (
                  <MagangItem key={item.id} item={item} />
                )) : (
                  <p className="text-sm text-slate-400 italic py-4">Belum ada data magang terbaru.</p>
                )}
              </div>
            </div>

            {/* DUDI Aktif */}
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-50 flex items-center gap-3">
                <div className="text-orange-500"><Icon type="building" /></div>
                <h5 className="font-bold text-lg text-slate-800">DUDI Aktif</h5>
              </div>
              <div className="p-8 space-y-6">
                {activeDudis.length > 0 ? activeDudis.map((dudi) => (
                  <DUDIItem key={dudi.id} name={dudi.namaPerusahaan} address={dudi.alamat} phone={dudi.noTelp} count={dudi.jumlahSiswa} />
                )) : (
                  <p className="text-sm text-slate-400 italic py-4">Belum ada DUDI aktif.</p>
                )}
              </div>
            </div>
          </div>

          {/* Logbook Terbaru Feed */}
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-50 flex items-center gap-3">
              <div className="text-green-500"><Icon type="book" /></div>
              <h5 className="font-bold text-lg text-slate-800">Logbook Terbaru</h5>
            </div>
            <div className="p-8 space-y-4">
              {recentLogbooks.length > 0 ? recentLogbooks.map((log) => (
                <LogbookCard key={log.id} log={log} />
              )) : (
                <p className="text-sm text-slate-400 italic py-4 text-center">Belum ada laporan logbook terbaru.</p>
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

// Sub-components
function StatCard({ title, value, sub, icon, color }: any) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="flex justify-between items-start relative z-10">
        <div className="space-y-4">
          <p className="text-sm font-bold text-slate-500 tracking-wide">{title}</p>
          <h4 className="text-4xl font-black text-slate-800">{value}</h4>
          <p className="text-[12px] text-slate-400 font-medium">{sub}</p>
        </div>
        <div className={`p-2 rounded-2xl bg-slate-50 ${color} group-hover:scale-110 transition-transform`}>
          <Icon type={icon} />
        </div>
      </div>
    </div>
  );
}

function MagangItem({ item }: any) {
  return (
    <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50/50 border border-slate-100/50 hover:bg-slate-50 transition-colors">
      <div className="flex items-center gap-5">
        <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center text-white shadow-lg shadow-cyan-100">
          <Icon type="cap" />
        </div>
        <div className="space-y-1">
          <p className="font-bold text-slate-800">{item.namaSiswa}</p>
          <p className="text-sm text-slate-500 font-medium">{item.dudi}</p>
          <p className="text-[11px] text-slate-400 font-bold flex items-center gap-1">
            <span className="w-3.5 h-3.5">📅</span> {item.startDate} - {item.endDate}
          </p>
        </div>
      </div>
      <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-black uppercase tracking-wider">
        {item.status}
      </span>
    </div>
  );
}

function LogbookCard({ log }: any) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-all group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-5">
          <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-100">
            <Icon type="book" />
          </div>
          <div className="space-y-1">
            <p className="font-bold text-slate-800 group-hover:text-cyan-500 transition-colors uppercase tracking-tight">{log.kegiatan}</p>
            <p className="text-sm text-slate-400 font-bold flex items-center gap-1">
               🕒 {log.tanggal}
            </p>
          </div>
        </div>
        <span className={`px-4 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider ${
          log.status === 'Disetujui' ? 'bg-green-100 text-green-600' :
          log.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
          'bg-red-100 text-red-600'
        }`}>
          {log.status}
        </span>
      </div>
      {log.kendala && (
        <div className="pl-[68px]">
          <p className="text-sm italic text-orange-400 font-medium">Kendala: {log.kendala}</p>
        </div>
      )}
    </div>
  );
}

function DUDIItem({ name, address, phone, count }: any) {
  return (
    <div className="space-y-2 group">
      <div className="flex items-start justify-between">
        <p className="font-bold text-slate-800 text-[15px] group-hover:text-cyan-500 transition-colors uppercase tracking-tight">{name}</p>
        <span className="bg-yellow-400 text-yellow-900 text-[10px] font-black px-2 py-1 rounded-md">{count} siswa</span>
      </div>
      <div className="space-y-1 text-xs text-slate-400 font-medium">
        <p className="flex items-center gap-2">📍 {address}</p>
        <p className="flex items-center gap-2">📞 {phone}</p>
      </div>
    </div>
  );
}

function Icon({ type }: { type: string }) {
  if (type === 'users') return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  );
  if (type === 'building') return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
  );
  if (type === 'cap') return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.174L10.778 6.028a2.25 2.25 0 012.444 0l6.517 4.146a2.25 2.25 0 011.029 1.918v5.173a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-5.173a2.25 2.25 0 011.03-1.918z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25v-3" />
    </svg>
  );
  if (type === 'book') return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c1.052 0 2.062.18 3 .512v-14.25A8.987 8.987 0 0112 3.75c1.052 0 2.062.18 3 .512v14.25a8.987 8.987 0 003-.512 8.967 8.967 0 016 2.25V4.262a8.967 8.967 0 00-3-.512 8.967 8.967 0 00-6 2.25z" />
    </svg>
  );
  return null;
}
