import { ArrowLeft, Menu } from 'lucide-react';
import profile from '../assets/images/profile.png';
import chatIcon from '../assets/images/icon/chat.png';
import bellIcon from '../assets/images/icon/bell.png';
import logo from '../assets/images/logo.png';
import Image from 'next/image';
export default function Navbar({
  title = 'Review Transfer',
  subtitle = 'Please review the details before confirming your transfer',
  userName = 'Andrew Forbist',
  showBack = true,
  onToggleSidebar = () => {},
}) {
  return (
    <header className="h-20 bg-white  flex items-center justify-between sm:px-10 px-6">
      <div className="flex items-center gap-3">
        {showBack ? (
          <button className="relative w-10 h-10 rounded-xl bg-lightGreen flex items-center justify-center">
            <ArrowLeft size={18} className="text-teal-900" />
          </button>
        ) : null}

        <div  className=' hidden md:block'>
          <h1 className="sm:text-[22px]  text-[18px] font-semibold text-teal-900">{title}</h1>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
        <div className=' block md:hidden'>
          <Image  src={logo} alt='' />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="relative w-10 h-10 rounded-full bg-lightGreen flex items-center justify-center md:hidden"
          onClick={onToggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <Menu size={18} className="text-teal-900" />
        </button>
        <div className="relative w-[38px] h-[38px] rounded-full bg-lightGreen flex items-center justify-center">
          <Image src={chatIcon} width={18} height={18} alt="chat" />
        </div>
        <div className="relative w-[38px] h-[38px] rounded-full bg-lightGreen flex items-center justify-center">
          <Image src={bellIcon} width={18} height={18} alt="bell" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
        </div>
        <div className="flex items-center gap-2.5">
          <p className="font-semibold text-primary hidden sm:block">{userName}</p>
          <Image src={profile} width={38} height={38} alt="Profile avatar" className="rounded-full" />
        </div>
      </div>
    </header>
  );
}
