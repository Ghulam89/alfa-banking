import Image from 'next/image';
import facebook from '../assets/images/icon/facebook.png';
import twitter from '../assets/images/icon/twitter.png';
import youtube from '../assets/images/icon/youtube.png';
import linkedin from '../assets/images/icon/linkedin.png';
import instagram from '../assets/images/icon/instagram.png';
export default function TransferFooter() {
  
  return (
    <footer className=" bg-white pt-6 sm:px-6 px-4">
      <div className="flex sm:flex-row flex-col gap-4 justify-between items-center text-xs text-gray-600">
       <div className=" flex  gap-3 items-center">
         <p className=' text-[#242E2C]'>Copyright © 2025 Alfa Banking</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-teal-900 text-[#BCBEBD]">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-teal-900 text-[#BCBEBD]">
            Terms and Conditions
          </a>
          <a href="#" className="hover:text-teal-900 text-[#BCBEBD]">
            Contact
          </a>
        </div>
       </div>
       <div>
        <ul className=" flex items-center gap-2.5">
          <li>
            <a href="#" className="hover:text-teal-900">
            <Image src={facebook} width={24} height={24} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-900">
              <Image src={twitter} width={24} height={24} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-900">
              <Image src={youtube} width={24} height={24} alt="youtube"/>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-900">
              <Image src={linkedin} width={24} height={24} alt="linkedin"/>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-900">
              <Image src={instagram} width={24} height={24} alt="instagram"/>
            </a>
          </li>
        </ul>
       </div>
      </div>
    </footer>
  );
}
