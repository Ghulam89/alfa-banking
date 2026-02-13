'use client';

import {
  ArrowLeftRight,
  Calendar,
  ChevronDown,
  Clock,
  CreditCard,
  FileText,
  HelpCircle,
  History,
  LayoutDashboard,
  LockKeyhole,
  PieChart,
  Send,
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import alfa from '../assets/images/alfa.png';
import LockOpen from '../assets/images/LockOpen.png';
import logo from '../assets/images/logo.png';
const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
  {
    icon: Send,
    label: 'Transfer',
    href: '#',
    submenu: [
      { label: 'Add Money', href: '#' },
      { label: 'Send', href: '/send' },
      { label: 'Receive', href: '#' },
    ],
  },
  { icon: ArrowLeftRight, label: 'Transfers', href: '/' },
  { icon: History, label: 'History', href: '#' },
  { icon: FileText, label: 'Invoices', href: '#' },
  { icon: PieChart, label: 'Saving Plans', href: '#' },
  { icon: Clock, label: 'Schedulers', href: '#' },
  { icon: Calendar, label: 'Calendar', href: '#' },
  { icon: Send, label: 'Withdrawals', href: '#' },
  { icon: HelpCircle, label: 'Help & Support', href: '#' },
  { icon: CreditCard, label: 'Deposits', href: '#' },
];

export default function Sidebar({ className = '' }) {
  const pathname = usePathname();
  const [expandedMenu, setExpandedMenu] = useState(() =>
    ['/send'].includes(pathname) ? 'Transfer' : null
  );

  return (
    <aside className={`w-56 bg-primary text-white flex flex-col overflow-hidden ${className}`}>
      <div className="px-5 pt-6 pb-4">
        <Image src={logo} alt='' />
      </div>

      <nav className="flex-1 px-3 pb-4 overflow-y-auto scrollbar-hidden">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isExpanded = expandedMenu === item.label;
          const isActive = item.submenu
            ? item.submenu.some((sub) => sub.href === pathname)
            : item.href === pathname;
          const itemClassName = `w-full flex items-center gap-3 px-4 py-2.5 rounded-full text-sm transition ${
            isActive ? 'bg-secondary text-teal-900 font-semibold' : 'text-white/90 hover:bg-teal-800/60'
          }`;

          return (
            <div key={item.label}>
              {item.submenu ? (
                <button
                  onClick={() =>
                    item.submenu
                      ? setExpandedMenu(isExpanded ? null : item.label)
                      : null
                  }
                  className={itemClassName}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                  <ChevronDown
                    size={16}
                    className={`ml-auto opacity-80 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              ) : (
                <Link href={item.href} className={itemClassName}>
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              )}

              {item.submenu && isExpanded && (
                <div className="relative ml-7 mt-2 space-y-2 pb-2">
                  <div className="absolute left-0 top-1 bottom-2 w-px bg-white/20" />
                  {item.submenu.map((sub) => {
                    const isSubActive = sub.href === pathname;
                    return (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`block w-full text-left pl-3 pr-2 py-1.5 text-xs rounded transition ${
                          isSubActive
                            ? 'text-white font-semibold'
                            : 'text-white/80 hover:text-white'
                        }`}
                      >
                        {sub.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="px-3 pb-4">
        <div
          className="relative rounded-2xl h-[212px] p-4 bg-[#A0C8C8] overflow-hidden"  
        >
          <div className="w-[32px] h-[32px] bg-[#ECF4E9] rounded-xl flex items-center justify-center mb-3">
            <Image src={LockOpen} alt='' />

          </div>
          <div className=' absolute top-0 right-0'>
            
          <Image src={alfa} alt="transfer" className="" />
          </div>
          <div className=' absolute  bottom-3 px-4 right-0'>
            <p className="text-[11px] text-teal-900/80 leading-snug mb-4">
            Gain full access to your finances with detailed analytics and graphs.
          </p>
          <button className="w-full  bg-secondary text-teal-900 py-3 rounded-lg font-semibold text-xs hover:bg-lime-200 transition">
            Get Pro
          </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
