'use client'
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className='container mx-auto max-w-[1440px]'>
        {/* Toggle Button */}
        <div className='flex justify-center items-start '>
            <Button className="p-2 bg-PrimaryBlue text-white rounded lg:hidden text-center" onClick={toggleMenu}> {isOpen ? <ImCross className='text-black' /> : <GiHamburgerMenu className='text-black'/>}
            </Button>
        </div>
        <div className='max-w-full w-screen mx-auto py-8 flex'>

            {/* Left side of the section */}
            <div className={`bg-white px-5 w-[330px] max-h-full h-max shadow-sm lg:flex flex-col ${isOpen ? "block" : "hidden"} ${isOpen ? "absolute":"relative"}`}>
                <div className='w-'>
                        {/* Type */}
                        <div className='mx-0 mt-8 space-y-5 flex justify-start flex-col items-start'>
                        <h1 className='text-[12px] text-black/50 font-semibold'>MAIN MENU</h1>
                        {/* dashboard */}
                        <div className='flex justify-center items-center gap-3 bg-PrimaryBlue rounded px-2 py-1'>
                            <Image src='/home.png' width={24} height={24} alt='icon' color='black'/>
                            <Link href='/' className='text-white text-[16px] font-medium'>Dashboard</Link>
                        </div>
                        {/* car rent */}
                        <div className='flex justify-center items-center gap-3 hover:bg-PrimaryBlue group rounded px-2 py-1'>
                            <Image src='/car1.png' width={24} height={24} alt='icon' color='white'  className='group-hover:text-white'/>
                            <Link href='/' className='text-[#90A3BF] group-hover:text-white text-[16px] font-medium'>Car Rent</Link>
                        </div>
                        {/* insight */}
                        <div className='flex justify-center items-center gap-3 hover:bg-PrimaryBlue group   rounded px-2 py-1'>
                            <Image src='/chart.png' width={24} height={24} alt='icon' color='white'  className='group-hover:text-white'/>
                            <Link href='/' className='text-[#90A3BF] group-hover:text-white text-[16px] font-medium'>Insight</Link>
                        </div>
                            {/* Reimburse */}
                            <div className='flex justify-center items-center gap-3 hover:bg-PrimaryBlue group  rounded px-2 py-1'>
                            <Image src='/empty-wallet-change.png' width={24} height={24} alt='icon' color='white'  className='group-hover:text-white'/>
                            <Link href='/' className='text-[#90A3BF] group-hover:text-white text-[16px] font-medium'>Reimburse</Link>
                        </div>
                        {/* Inbox */}
                        <div className='flex justify-center items-center gap-3 hover:bg-PrimaryBlue group  rounded px-2 py-1'>
                            <Image src='/message.png' width={24} height={24} alt='icon' color='white'  className='group-hover:text-white'/>
                            <Link href='/' className='text-[#90A3BF] group-hover:text-white text-[16px] font-medium'>Inbox</Link>
                        </div>
                        {/* Calender */}
                        <div className='flex justify-center items-center gap-3 hover:bg-PrimaryBlue group  rounded px-2 py-1'>
                            <Image src='/calendar.png' width={24} height={24} alt='icon' color='white'  className='group-hover:text-white'/>
                            <Link href='/' className='text-[#90A3BF] group-hover:text-white text-[16px] font-medium'>Calender</Link>
                        </div>
                    </div>
                    {/* Preferences */}
                    <div className='mx-0 mt-8 space-y-5 flex justify-start flex-col items-start'>
                        <h1 className='text-[12px] text-black/50 font-semibold'>PREFERENCES</h1>
                        {/* setting */}
                        <div className='flex justify-center items-center gap-3 hover:bg-PrimaryBlue group  rounded px-2 py-1'>
                            <Image src='/setting.png' width={24} height={24} alt='icon' color='white'  className='group-hover:text-white'/>
                            <Link href='/' className='text-[#90A3BF] group-hover:text-white text-[16px] font-medium'>Setting</Link>
                        </div>
                        {/* help */}
                        <div className='flex justify-center items-center gap-3 hover:bg-PrimaryBlue group  rounded px-2 py-1'>
                            <Image src='/info-circle.png' width={24} height={24} alt='icon' color='white'  className='group-hover:text-white'/>
                            <Link href='/' className='text-[#90A3BF] group-hover:text-white text-[16px] font-medium'>Help & Center</Link>
                        </div>

                        {/* dark mode */}
                        <div className='flex justify-center items-center gap-3'>
                            <div className='flex justify-center items-center gap-3 hover:bg-PrimaryBlue group  rounded px-2 py-1'>
                                <Image src='/briefcase.png' width={24} height={24} alt='icon' color='white'  className='group-hover:text-white'/>
                                <Link href='/' className='text-[#90A3BF] group-hover:text-white text-[16px] font-medium'>Dark Mode</Link>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <div className='flex w-[28px] h-[28px] bg-PrimaryBlue rounded-full justify-center items-center'>
                                    <Image src='/sun.png' width={24} height={24} alt='icon' color='white'  className='group-hover:text-white'/>
                                </div>
                                <Image src='/moon.png' width={24} height={24} alt='icon' color='white'  className='group-hover:text-white'/>
                            </div>    
                        </div>
                    </div>
                    <div className='mx-0 mt-16 space-y-5 flex justify-start flex-col items-start'>
                        <div className='flex justify-center items-center gap-3 hover:bg-PrimaryBlue group  rounded px-2 py-1'>
                            <Image src='/logout.png' width={24} height={24} alt='icon' color='white'  className='group-hover:text-white'/>
                            <Link href='/' className='text-[#90A3BF] group-hover:text-white text-[16px] font-medium'>Log Out</Link>
                        </div>
                    </div>
                </div>
               
            </div>


            {/* Right side */}
            <div className={`w-[1440px] flex justify-center lg:items-start items-center gap-10 py-8  bg-SecondaryBgGray lg:flex-row flex-col    ${isOpen ? "hidden" : "block"}`}>
                {/* Right middle section */}
                <div className='w-[534px] max-h-full h-max bg-white p-4 space-y-6 rounded '>
                    {/* heading and map */}
                    <h1 className='text-left mb-2 text-[20px] font-bold'>Details Rental</h1>
                    <div className='gap-2 flex-col flex justify-center items-start'>
                        <Image src='/maps.png' alt='map' width={486} height={272} className='relative'/>
                    </div>
                    {/* Car picture and detail */}
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center gap-4'>
                            <div className=' bg-PrimaryBlue rounded w-[150px] relative h-10 flex justify-center items-center'>
                                <Image src='/gtr-dashboard.png' width={116} height={36} alt='car'/>
                            </div>
                            <div>
                                <h1 className='text-8 font-bold'>NissanGT-R </h1>
                                <p className='text-[14px] font-medium text-textGray'>SportCar</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-[14px] font-medium text-textGray'>#9761</p>
                        </div>
                    </div>

                    {/* pick up */}

                    <div className='flex justify-start items-center gap-2'>
                        <Image src='/icon-mark-pick-drop.png' alt='icon' width={16} height={16}/>
                        <p className='text-[16px] font-semibold'>Pick-Up</p>
                    </div>
                    {/* Bottom Section */}
                    {/* 1st part Bottom section */}
                    <div className='flex justify-evenly items-center gap-4'>
                        <div className=' border-r-2 ' >
                            <div className=' flex flex-col p-2 '>
                                <h1 className='text-[16px] font-bold'>Location</h1>
                                <div className='flex flex-row justify-start items-center gap-2'>
                                    <p className='text-[12px] font-medium text-black/50'>Kota Semarang</p>
                                    <span> <ChevronDown  width={12} height={12}/> </span>
                                </div>
                            </div>
                        </div>
                        {/* 2nd part Bottom section */}
                        <div className=' border-r-2' >
                            <div className=' flex flex-col p-2'>
                                <h1 className='text-[16px] font-bold'>Date</h1>
                                <div className='flex flex-row justify-start items-center gap-2'>
                                    <p className='text-[12px] font-medium text-black/50'>20 July 2022</p>
                                    <span> <ChevronDown  width={12} height={12}/> </span>
                                </div>
                            </div>
                        </div>
                        {/* 3rd part Bottom section */}
                        <div className=' ' >
                            <div className=' flex flex-col p-2'>
                                <h1 className='text-[16px] font-bold'>Time</h1>
                                <div className='flex flex-row justify-start items-center gap-2'>
                                    <p className='text-[12px] font-medium text-black/50'>07.00</p>
                                    <span> <ChevronDown  width={12} height={12}/> </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Drop off */}

                    <div className='flex justify-start items-center gap-2'>
                        <Image src='/icon-mark-pick-drop.png' alt='icon' width={16} height={16}/>
                        <p className='text-[16px] font-semibold'>Drop-Off</p>
                    </div>
                    {/* Bottom Section */}
                    {/* 1st part Bottom section */}
                    <div className='flex justify-evenly items-center gap-4'>
                        <div className=' border-r-2 ' >
                            <div className=' flex flex-col p-2 '>
                                <h1 className='text-[16px] font-bold'>Location</h1>
                                <div className='flex flex-row justify-start items-center gap-2'>
                                    <p className='text-[12px] font-medium text-black/50'>Kota Semarang</p>
                                    <span> <ChevronDown  width={12} height={12}/> </span>
                                </div>
                            </div>
                        </div>
                        {/* 2nd part Bottom section */}
                        <div className=' border-r-2' >
                            <div className=' flex flex-col p-2'>
                                <h1 className='text-[16px] font-bold'>Date</h1>
                                <div className='flex flex-row justify-start items-center gap-2'>
                                    <p className='text-[12px] font-medium text-black/50'>21 July 2022</p>
                                    <span> <ChevronDown  width={12} height={12}/> </span>
                                </div>
                            </div>
                        </div>
                        {/* 3rd part Bottom section */}
                        <div className=' ' >
                            <div className=' flex flex-col p-2'>
                                <h1 className='text-[16px] font-bold'>Time</h1>
                                <div className='flex flex-row justify-start items-center gap-2'>
                                    <p className='text-[12px] font-medium text-black/50'>01.00</p>
                                    <span> <ChevronDown  width={12} height={12}/> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className='flex justify-between items-end'>
                            <div>
                                <h1 className='text-[20px] font-bold'>Total Rental Price</h1>
                                <p className='text-[14px] font-medium text-textGray'>Overall price and includes rental discount</p>
                            </div>
                            <div className='text-[32px] font-bold'>
                                $80.00
                            </div>
                        </div>
                </div>
                {/* Right most Sections */}
                <div className='space-y-5'>
                    {/* Total 5 car rental */}
                    <div className='max-w-[524px] max-h-[324px] bg-white p-4 rounded '>
                        <div className='flex justify-between items-center mb-5'>
                            <h1 className='text-[20px] font-bold'>Top 5 Car Rental</h1>
                            <Image src='/more.png' alt='img' width={24} height={24}/>
                        </div>
                        <div className='flex justify-between items-center gap-5'>
                            <div className='relative'>
                                <Image src='/Chart2.png' alt='img' width={220} height={220}/>
                                <h1 className='absolute top-12 left-11 right-0 text-[24px] font-bold'>72,030</h1>
                                <span className='absolute top-20 left-12 right-0 text-[14px] text-textGray font-medium'>Rental Car</span>
                            </div>
                            <div className='flex flex-col gap-3 justify-evenly items-start w-[232px]'>
                        
                                    <div className='flex justify-between items-center gap-8 w-[200px]'>
                                        <div className='flex justify-center items-center gap-2'>
                                            <div className='h-[12px] w-[12px] rounded bg-[#0D3559]'></div>
                                            <p className='text-[14px] font-semibold text-textGray'>Sport Car</p>
                                        </div>
                                        <div className='text-[14px] font-semibold'>17439</div>
                                    </div>
                                    <div className='flex justify-between items-center gap-8 w-[200px]'>
                                        <div className='flex justify-center items-center gap-2'>
                                            <div className='h-[12px] w-[12px] rounded bg-[#175D9C]'></div>
                                            <p className='text-[14px] font-semibold text-textGray'>SUV</p>
                                        </div>
                                        <div className='text-[14px] font-semibold'>9478</div>
                                    </div>
                                    <div className='flex justify-between items-center gap-8 w-[200px]'>
                                        <div className='flex justify-center items-center gap-2'>
                                            <div className='h-[12px] w-[12px] rounded bg-[#2185DE]'></div>
                                            <p className='text-[14px] font-semibold text-textGray'>Coupe</p>
                                        </div>
                                        <div className='text-[14px] font-semibold'>18197</div>
                                    </div>
                                    <div className='flex justify-between items-center gap-8 w-[200px]'>
                                        <div className='flex justify-center items-center gap-2'>
                                            <div className='h-[12px] w-[12px] rounded bg-[#63A9E8]'></div>
                                            <p className='text-[14px] font-semibold text-textGray'>Hatchback</p>
                                        </div>
                                        <div className='text-[14px] font-semibold'>12510</div>
                                    </div>
                                    <div className='flex justify-between items-center gap-8 w-[200px]'>
                                        <div className='flex justify-center items-center gap-2'>
                                            <div className='h-[12px] w-[12px] rounded bg-[#63A9E8]'></div>
                                            <p className='text-[14px] font-semibold text-textGray'>MPV</p>
                                        </div>
                                        <div className='text-[14px] font-semibold'>14406</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/* Recent Transaction */}
                    <div className='max-w-[524px] max-h-auto bg-white p-4 rounded' >
                        <div className='flex justify-between items-center mb-5'>
                            <h1 className='text-[20px] font-bold'>Recent Transactions</h1>
                            <Link href='/' className='text-[12px] font-medium text-PrimaryBlue'>View All</Link>
                        </div>
                        <div className='flex justify-between items-center border-b-2 border-black/20 py-3'>
                            <div>
                                <Image src='/hero-car-2.png' alt='img' width={132} height={70}/>
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <h1 className='text-[16px] font-bold'>Nissan GT-R</h1>
                                <p className='text-[12px] font-medium text-[#90A3BF]'>Sport Car</p>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <p className='text-[12px] font-medium text-[#90A3BF]'>20 July</p>
                                <p className='text-[16px] font-bold'>$80.00</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center border-b-2 border-black/20 py-6'>
                            <div>
                                <Image src='/hero-car-1.png' alt='img' width={132} height={70}/>
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <h1 className='text-[16px] font-bold'>Koegnigsegg</h1>
                                <p className='text-[12px] font-medium text-[#90A3BF]'>Sport Car</p>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <p className='text-[12px] font-medium text-[#90A3BF]'>19 July</p>
                                <p className='text-[16px] font-bold'>$99.00</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center border-b-2 border-black/20 py-6'>
                            <div>
                                <Image src='/rolls-royce.png' alt='img' width={132} height={70}/>
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <h1 className='text-[16px] font-bold'>Rolls - Royce</h1>
                                <p className='text-[12px] font-medium text-[#90A3BF]'>Sport Car</p>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <p className='text-[12px] font-medium text-[#90A3BF]'>18 July</p>
                                <p className='text-[16px] font-bold'>$96.00</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center border-b-2 border-black/20 py-6'>
                            <div>
                                <Image src='/crv.png' alt='img' width={132} height={70}/>
                            </div>
                            <div className='flex flex-col items-start justify-center'>
                                <h1 className='text-[16px] font-bold'>CRV</h1>
                                <p className='text-[12px] font-medium text-[#90A3BF]'>SUV</p>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <p className='text-[12px] font-medium text-[#90A3BF]'>17 July</p>
                                <p className='text-[16px] font-bold'>$80.00</p>
                            </div>
                        </div>

                    </div>
                    
                </div>
               



            </div>


        </div>
    </div>
  )
}
