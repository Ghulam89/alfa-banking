'use client';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { useState } from 'react';

export default function DashboardLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <Sidebar className={`fixed left-0 top-0 h-screen z-30 transform transition-transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`} />
      <div className="md:ml-[224px] ml-0 bg-primary">
        <div
          className={`${mobileOpen ? 'fixed inset-0 bg-black/30 z-20 md:hidden' : 'hidden'} `}
          onClick={() => setMobileOpen(false)}
        />
        <div className="bg-white h-screen rounded-bl-3xl rounded-tl-3xl shadow-sm overflow-hidden flex">
          <div className="flex-1 flex rounded-tl-xl flex-col overflow-hidden">
            <Navbar onToggleSidebar={() => setMobileOpen((v) => !v)} />
            <main className="flex-1 p-4 overflow-y-auto">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
