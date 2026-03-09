'use client';

import React from 'react';

export function StatIcon({ type, className = "w-6 h-6" }: { type: string; className?: string }) {
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
  if (type === 'grid') return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25a2.25 2.25 0 01-2.25 2.25h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
    </svg>
  );
  if (type === 'user-group') return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
  if (type === 'map') return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.446l6-2.7a2.25 2.25 0 001.096-1.966V4.41a2.25 2.25 0 00-2.817-2.173l-4.247 1.118a2.25 2.25 0 01-1.07 0l-4.412-1.161a2.25 2.25 0 00-1.397 0L2.17 3.38A2.25 2.25 0 001 5.43v10.518a2.25 2.25 0 001.185 1.985l4.8 2.4a2.25 2.25 0 001.74 0l.504-.252z" />
    </svg>
  );
  if (type === 'users-cog') return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
  if (type === 'history') return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
  if (type === 'settings') return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.59c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.004.827c.422.348.53.954.26 1.43l-1.297 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.127c-.332.183-.582.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.59c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
  return null;
}

function NavItem({ icon, label, sub, active = false }: any) {
  return (
    <a href="#" className={`group flex items-center gap-4 p-3.5 rounded-2xl transition-all duration-300 ${active ? 'bg-gradient-to-r from-[#009bba] to-[#00c5df] text-white shadow-lg shadow-cyan-100' : 'text-slate-500 hover:bg-slate-50'}`}>
      <div className={`p-2 rounded-xl ${active ? 'bg-white/20' : 'bg-slate-50 group-hover:bg-white transition-colors'}`}>
        <StatIcon type={icon} className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <p className="font-bold text-[14px] leading-none">{label}</p>
        <p className={`text-[10px] mt-1 font-medium ${active ? 'text-white/70' : 'text-slate-400'}`}>{sub}</p>
      </div>
    </a>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-[260px] bg-white border-r border-slate-100 flex flex-col fixed h-full z-20">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#009bba] rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.174L10.778 6.028a2.25 2.25 0 012.444 0l6.517 4.146a2.25 2.25 0 011.029 1.918v5.173a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-5.173a2.25 2.25 0 011.03-1.918z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25v-3" />
          </svg>
        </div>
        <div>
          <h1 className="font-bold text-lg leading-tight tracking-tight">SIMMAS</h1>
          <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Panel Admin</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4">
        <NavItem icon="grid" label="Dashboard" sub="Ringkasan sistem" active />
        <NavItem icon="users" label="Siswa" sub="Manajemen siswa" />
        <NavItem icon="user-group" label="Guru" sub="Manajemen guru" />
        <NavItem icon="building" label="DUDI" sub="Manajemen DUDI" />
        <NavItem icon="map" label="Magang" sub="Penempatan magang" />
        <NavItem icon="users-cog" label="Pengguna" sub="Manajemen user" />
        <NavItem icon="history" label="Activity Logs" sub="Riwayat aktivitas" />
        <NavItem icon="settings" label="Pengaturan" sub="Konfigurasi sistem" />
      </nav>
    </aside>
  );
}
