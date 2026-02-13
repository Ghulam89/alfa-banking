'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check, ArrowLeft, ArrowRight, Lock, X } from 'lucide-react';
import Button from '@/components/ui/button';
import transfer from '../assets/images/transfer.png';
import profile from '../assets/images/recipients.png';
import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import TransferFooter from './footer';
import check from '../assets/images/icon/check.png';
import alfa from '../assets/images/icon/Alfa.png';
function FromToCard() {
  return (
    <div className="space-y-4 bg-[#E9F2EC] rounded-[16px] p-6 mb-6 border border-[#D9D9D9]">
      <div className="bg-[#00413D] rounded-lg p-6 text-white mb-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Image src={transfer} width={40} height={40} alt="amount" />
          <span className="text-4xl font-bold">£250.00</span>
        </div>
        <p className="text-center text-teal-100 text-sm">Transfer Amount</p>
      </div>
      <div className="flex">
        <div className="w-5 flex flex-col items-center">
          <span className="w-2 h-2 bg-lime-300 rounded-full" />
          <div className="flex-1 border-l-2 border-dashed border-teal-900/50 my-1" />
          <span className="w-2 h-2 bg-teal-900 rounded-full" />
        </div>
        <div className="flex-1">
          <div>
            <div className="flex justify-between items-start">
              <div className="flex gap-3 items-center">
                <div>
                  <p className="text-sm text-[#6B7271]">From</p>
                  <Image src={alfa} alt="" width={30} height={30} />
                </div>
                <div>
                  <p className="text-sm font-bold">Alfa Bank</p>
                  <p className="text-xs text-gray-600">****3498</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-teal-900">£8,234.56</p>
                <p className="text-xs text-gray-600">Available</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-[#6B7271]">To</p>
              <div className="flex items-center gap-3 justify-between">
                <Image src={profile} width={40} height={40} alt="recipient" className="rounded-full" />
                <div className="flex-1 min-w-0 px-1">
                  <p className="text-sm font-bold">John Smith</p>
                  <p className="text-xs text-gray-600">@John Smith</p>
                </div>
                <span className="inline-block px-2 py-0.5 bg-secondary text-lime-700 text-xs rounded-sm font-semibold whitespace-nowrap">
                  Alfa User
                </span>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="pl-5">
        <p className="text-sm font-semibold text-gray-800 mb-1">Note</p>
        <p className="text-sm text-gray-700">Dinner Split from last weekend</p>
      </div>
    </div>
  );
}

function FeeBreakdownCard() {
  return (
    <div className="bg-white rounded-[16px] p-6 border border-[#E5E6E6]">
      <p className="text-teal-900 font-bold mb-3">Fee Breakdown</p>
      <div className="border-t border-[#E5E6E6] mb-4" />
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-700">Transfer Amount</span>
          <span className="font-semibold text-teal-900">£250.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Transfer Fee</span>
          <span className="font-semibold text-teal-900">Free</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Exchange Fee</span>
          <span className="font-semibold text-teal-900">£0.00</span>
        </div>
        <div className="border-t border-dashed border-[#E5E6E6]" />
        <div className="pt-1 flex justify-between items-center">
          <span className="font-semibold text-gray-900">Total Amount</span>
          <span className="font-bold text-teal-900 bg-[#E3F0E6] rounded-md px-3 py-1">
            £250.00
          </span>
        </div>
      </div>
    </div>
  );
}

function TransferInformationCard() {
  return (
    <div className="bg-white rounded-[16px] p-6 border border-[#E5E6E6]">
      <p className="text-teal-900 font-bold mb-3">Transfer Information</p>
      <div className="border-t border-[#E5E6E6] mb-4" />
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-700">Transfer Type</span>
          <span className="font-semibold text-teal-900">Instant Transfer</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Estimated Arrival</span>
          <span className="font-semibold text-teal-900">Instant</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Reference Number</span>
          <span className="font-semibold text-teal-900">TRF-2024-00123</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Date & Time</span>
          <span className="font-semibold text-teal-900">Today, 3:45 PM</span>
        </div>
      </div>
    </div>
  );
}

function SecurityVerificationCard({ onConfirm }) {
  return (
    <div className="bg-[#E9F2EC] rounded-[16px]  mb-8 p-6 border border-[#D9D9D9]">
      <div className="flex items-center gap-3 mb-2">
        <ArrowLeft size={18} className="text-teal-900" />
        <h2 className="text-2xl font-bold text-teal-900">Security Verification</h2>
      </div>
      <p className="text-sm text-gray-600 mb-5">
        To confirm this transfer, please verify your identity
      </p>

      <label className="text-sm font-semibold text-gray-700 mb-2 block">
        SMS/TPIN Verification
      </label>
      <div className="flex items-center rounded-[12px] border-2 border-teal-900 bg-white px-4 py-3">
        <Lock size={18} className="text-teal-900 mr-3" />
        <input
          type="text"
          placeholder="SMS/TPIN Verification"
          className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-600"
        />
        <ArrowRight size={20} className="text-teal-900 ml-3" />
      </div>

      <div className="border-t border-dashed border-teal-900/40 my-5" />

      <div className="flex sm:flex-row flex-col gap-4">
        <Button variant="ghost" size="lg" className="flex-1 rounded-lg border border-[#E5E6E6] bg-white text-teal-900 gap-2">
          <X size={18} />
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          variant="primary"
          size="lg"
          className="flex-1 gap-2 rounded-lg"
        >
          <Image src={check} alt='' />
          Confirm Transfer
        </Button>
      </div>
    </div>
  );
}

function RecipientDetailsCard() {
  return (
    <div className="bg-white rounded-[16px] p-4 border border-[#D9D9D9]">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-teal-900">Recipient Details</h2>
      </div>
      <div className="space-y-4 bg-lightGreen p-4 rounded-[16px]">
        <div className="flex items-center gap-3 pb-4 border-b">
          <Image src={profile} width={40} height={40} alt="recipient" className="rounded-full" />
          <div>
            <p className="font-bold text-teal-900">John Smith</p>
            <p className="text-xs text-gray-600">@John Smith</p>
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-600 font-semibold">Email</p>
          <p className="text-sm text-teal-900 font-semibold">john.smith@alfamail.com</p>
        </div>
        <div>
          <p className="text-xs text-gray-600 font-semibold">Phone</p>
          <p className="text-sm text-teal-900 font-semibold">+1 (555) 123-4567</p>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div>
            <p className="text-xs text-gray-600 font-semibold">Member since</p>
            <p className="text-sm font-bold text-teal-900">Jan 2023</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 font-semibold">Total transfers</p>
            <p className="text-sm font-bold text-teal-900">24 transfers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviousTransfersCard() {
  return (
    <div className="bg-white rounded-[16px] p-4 border border-[#D9D9D9]">
      <h2 className="text-lg font-bold text-gray-900 mb-3">Previous Transfers To John</h2>
      <div className="space-y-3">
        {[
          { amount: '£150.00', date: 'Dec 18, 2024', status: 'Successful' },
          { amount: '£75.50', date: 'Nov 22, 2024', status: 'Successful' },
          { amount: '£200.00', date: 'Oct 10, 2024', status: 'Successful' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="rounded-[12px] border border-[#E5E6E6] bg-[#FBFBFC] px-4 py-3 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold text-teal-900">{item.amount}</p>
              <p className="text-xs text-gray-600">{item.date}</p>
            </div>
            <span className="text-sm font-semibold text-green-700">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NeedHelpCard() {
  return (
    <div
      className="rounded-[16px]  relative overflow-hidden border"
      style={{
        borderColor: '#D9D9D9',
        background:
          'linear-gradient(117.08deg, rgba(0, 65, 61, 0.1) 1.74%, rgba(0, 65, 61, 0) 70.73%)',
      }}
    >
      <div className=' px-4 pt-4'>
        <p className="font-bold text-lg mb-2 text-teal-900">Need Help?</p>
        <p className="text-sm text-gray-600 mb-4">
          Our support team is available 24/7 to assist you with your transfer.
        </p>
        <Button variant="success" size="md" className="mb-4 rounded-lg">
          Contact Support
        </Button>
      </div>
      <div className="relative">
        <div className="flex items-end justify-between">
          <Image src={card2} alt="card2" />
          <Image src={card1} alt="card1" />
        </div>
      </div>
    </div>
  );
}

export default function TransferScreen() {
  const [verified, setVerified] = useState(false);
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl  border border-[#D9D9D9] shadow-sm">
            <div className='p-2'>
              <FromToCard />
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 mb-6">
                <FeeBreakdownCard />
                <TransferInformationCard />
              </div>
              <SecurityVerificationCard onConfirm={() => setVerified(true)} />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <RecipientDetailsCard />
          <PreviousTransfersCard />
          <NeedHelpCard />
        </div>
      </div>
      <TransferFooter />
    </div>
  );
}
