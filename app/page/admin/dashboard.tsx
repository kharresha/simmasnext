'use client';

import React from 'react';
import Sidebar from '@/components/admin/Sidebar';
import Navbar from '@/components/admin/Navbar';

// --- Dummy Data ---
const stats = [
  { title: 'Total Siswa', value: '150', sub: 'Seluruh siswa terdaftar', icon: 'users', color: 'text-blue-500' },
  { title: 'DUDI Partner', value: '45', sub: 'Perusahaan mitra', icon: 'building', color: 'text-cyan-500' },
  { title: 'Siswa Magang', value: '120', sub: 'Sedang aktif magang', icon: 'cap', color: 'text-teal-500' },
  { title: 'Logbook Hari Ini', value: '85', sub: 'Laporan masuk hari ini', icon: 'book', color: 'text-blue-600' },
];

const terbaru = [
  { name: 'Ahmad Rizki', company: 'PT. Teknologi Nusantara', date: '15/1/2024 - 15/4/2024', status: 'Aktif' },
  { name: 'Siti Nurhaliza', company: 'CV. Digital Kreativa', date: '20/1/2024 - 20/4/2024', status: 'Aktif' },
];

const logbook = [
  { task: 'Mempelajari sistem database dan melakukan backup data harian', date: '21/7/2024', status: 'Disetujui', note: 'Tidak ada kendala berarti', statusColor: 'bg-green-100 text-green-600' },
  { task: 'Membuat design mockup untuk website perusahaan', date: '21/7/2024', status: 'pending', note: 'Software design masih belum familiar', statusColor: 'bg-yellow-100 text-yellow-700' },
  { task: 'Mengikuti training keamanan sistem informasi', date: '20/7/2024', status: 'Ditolak', note: 'Materi cukup kompleks untuk dipahami', statusColor: 'bg-red-100 text-red-600' },
];

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans text-slate-700">
      
      {/* --- SIDEBAR --- */}
      <Sidebar />

      {/* --- MAIN PAGE --- */}
      <main className="flex-1 ml-[260px]">
        
        {/* --- NAVBAR --- */}
        <Navbar />

        {/* --- CONTENT --- */}
        <div className="p-10 max-w-[1400px] mx-auto space-y-10">
          
          {/* Welcome Text */}
          <div className="space-y-2">
            <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">Dashboard</h3>
            <p className="text-slate-500 font-medium">Selamat datang di sistem pelaporan magang siswa SMK Negeri 1 Surabaya</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="flex justify-between items-start relative z-10">
                  <div className="space-y-4">
                    <p className="text-sm font-bold text-slate-500 tracking-wide">{stat.title}</p>
                    <h4 className="text-4xl font-black text-slate-800">{stat.value}</h4>
                    <p className="text-[12px] text-slate-400 font-medium">{stat.sub}</p>
                  </div>
                  <div className={`p-2 rounded-2xl bg-slate-50 ${stat.color} group-hover:scale-110 transition-transform`}>
                    <StatIcon type={stat.icon} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Magang Terbaru */}
            <div className="lg:col-span-2 bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
              <div className="p-8 border-b border-slate-50 flex items-center gap-3">
                <div className="text-cyan-500"><StatIcon type="cap" /></div>
                <h5 className="font-bold text-lg text-slate-800">Magang Terbaru</h5>
              </div>
              <div className="p-8 space-y-4">
                {terbaru.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-slate-50/50 border border-slate-100/50 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center text-white shadow-lg shadow-cyan-100">
                        <StatIcon type="cap" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold text-slate-800">{item.name}</p>
                        <p className="text-sm text-slate-500 font-medium">{item.company}</p>
                        <p className="text-[11px] text-slate-400 font-bold flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                          </svg>
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-black uppercase tracking-wider">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* DUDI Aktif */}
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-50 flex items-center gap-3">
                <div className="text-orange-500"><StatIcon type="building" /></div>
                <h5 className="font-bold text-lg text-slate-800">DUDI Aktif</h5>
              </div>
              <div className="p-8 space-y-6">
                <DUDIItem name="PT. Teknologi Nusantara" address="Jl. HR Muhammad No. 123, Surabaya" phone="031-5551234" count="8" />
                <DUDIItem name="CV. Digital Kreativa" address="Jl. Pemuda No. 45, Surabaya" phone="031-5557890" count="5" />
                <DUDIItem name="PT. Inovasi Mandiri" address="Jl. Diponegoro No. 78, Surabaya" phone="031-5553456" count="12" />
              </div>
            </div>
          </div>

          {/* Logbook Terbaru */}
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-50 flex items-center gap-3">
              <div className="text-green-500"><StatIcon type="book" /></div>
              <h5 className="font-bold text-lg text-slate-800">Logbook Terbaru</h5>
            </div>
            <div className="p-8 space-y-4">
              {logbook.map((log, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-100">
                        <StatIcon type="book" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold text-slate-800 group-hover:text-[#009bba] transition-colors">{log.task}</p>
                        <p className="text-sm text-slate-400 font-bold flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {log.date}
                        </p>
                      </div>
                    </div>
                    <span className={`px-4 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider ${log.statusColor}`}>
                      {log.status}
                    </span>
                  </div>
                  <div className="pl-[68px]">
                    <p className="text-sm italic text-orange-400 font-medium">Kendala: {log.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

// --- Helper Components ---

function StatIcon({ type, className = "w-6 h-6" }: any) {
  if (type === 'users') return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  );
  if (type === 'building') return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
  );
  if (type === 'cap') return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.174L10.778 6.028a2.25 2.25 0 012.444 0l6.517 4.146a2.25 2.25 0 011.029 1.918v5.173a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-5.173a2.25 2.25 0 011.03-1.918z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25v-3" />
    </svg>
  );
  if (type === 'book') return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c1.052 0 2.062.18 3 .512v-14.25A8.987 8.987 0 0112 3.75c1.052 0 2.062.18 3 .512v14.25a8.987 8.987 0 003-.512 8.967 8.967 0 016 2.25V4.262a8.967 8.967 0 00-3-.512 8.967 8.967 0 00-6 2.25z" />
    </svg>
  );
  return null;
}

function DUDIItem({ name, address, phone, count }: any) {
  return (
    <div className="space-y-2 group">
      <div className="flex items-start justify-between">
        <p className="font-bold text-slate-800 text-[15px] group-hover:text-cyan-500 transition-colors uppercase tracking-tight">{name}</p>
        <span className="bg-yellow-400 text-yellow-900 text-[10px] font-black px-2 py-1 rounded-md">{count} siswa</span>
      </div>
      <div className="space-y-1">
        <p className="text-xs text-slate-400 font-medium flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          {address}
        </p>
        <p className="text-xs text-slate-400 font-medium flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          {phone}
        </p>
      </div>
    </div>
  );
}
