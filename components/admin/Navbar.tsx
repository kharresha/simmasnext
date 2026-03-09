'use client';

import React from 'react';

export default function Navbar() {
  return (
    <header className="h-[80px] bg-white border-b border-slate-100 px-8 flex items-center justify-between sticky top-0 z-10">
      <div>
        <h2 className="font-bold text-xl text-slate-800">SMK Negeri 1 Surabaya</h2>
        <p className="text-sm text-slate-400 font-medium">Sistem Manajemen Magang Siswa</p>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="text-slate-400 hover:text-slate-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7c0-2.015-1.635-3.65-3.65-3.65m0 0a3.65 3.65 0 00-3.65 3.65v.7c0 2.522-1.025 4.814-2.684 6.463A19.52 19.52 0 003 18.25m11.857-1.168a19.531 19.531 0 01-11.857 1.168m11.857-1.168A19.528 19.528 0 0015 12V6.75A3.75 3.75 0 107.5 6.75v5.25c0 .332.091.643.25.917m7.5 0a4.858 4.858 0 01-2.25 1.168" />
          </svg>
        </button>
        <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
          <div className="text-right">
            <p className="text-sm font-bold text-slate-800 leading-none">Admin Sistem</p>
            <p className="text-[11px] text-slate-400 font-bold uppercase mt-1">Admin</p>
          </div>
          <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
