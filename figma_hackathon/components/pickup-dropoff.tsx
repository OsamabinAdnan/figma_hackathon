import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function PickDrop() {
  return (
    <div className='w-full bg-SecondaryBgGray'>
        <div className='max-w-[1440px] mx-auto py-8'>
            <div className='flex justify-between items-center lg:flex-row flex-col'>

                <div className='p-4 bg-white max-w-[582px] space-y-2 shadow-md rounded'>
                    {/* Above Section */}
                    {/* 1st part above section */}
                    <div className='flex justify-start items-center gap-2'>
                        <Image src='/icon-mark-pick-drop.png' alt='icon' width={16} height={16}/>
                        <p className='text-[16px] font-semibold'>Pick-Up</p>
                    </div>
                    {/* Bottom Section */}
                    {/* 1st part Bottom section */}
                    <div className='flex justify-between items-center gap-4'>
                        <div className=' border-r-2 ' >
                            <div className=' flex flex-col p-2 '>
                                <h1 className='text-[16px] font-bold'>Location</h1>
                                <div className='flex flex-row justify-start items-center gap-2'>
                                    <p className='text-[12px] font-medium text-black/50'>Select your city</p>
                                    <span> <ChevronDown  width={12} height={12}/> </span>
                                </div>
                            </div>
                        </div>
                        {/* 2nd part Bottom section */}
                        <div className=' border-r-2' >
                            <div className=' flex flex-col p-2'>
                                <h1 className='text-[16px] font-bold'>Date</h1>
                                <div className='flex flex-row justify-start items-center gap-2'>
                                    <p className='text-[12px] font-medium text-black/50'>Select your date</p>
                                    <span> <ChevronDown  width={12} height={12}/> </span>
                                </div>
                            </div>
                        </div>
                        {/* 3rd part Bottom section */}
                        <div className=' ' >
                            <div className=' flex flex-col p-2'>
                                <h1 className='text-[16px] font-bold'>Time</h1>
                                <div className='flex flex-row justify-start items-center gap-2'>
                                    <p className='text-[12px] font-medium text-black/50'>Select your time</p>
                                    <span> <ChevronDown  width={12} height={12}/> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                </div>

                {/* Center Part */}
                <div className='w-[60px] h-[60px] bg-PrimaryBlue rounded flex justify-center items-center'>
                    <Image src='/icon-swap.png' alt='icon' width={24} height={24}/>
                    <div ></div>
                </div>

                 {/* Last Part */}

                <div className='p-4 bg-white max-w-[582px] space-y-2 shadow-md rounded'>
                    {/* Above Section */}
                    {/* 1st part above section */}
                    <div className='flex justify-start items-center gap-2'>
                        <Image src='/icon-mark-pick-drop.png' alt='icon' width={16} height={16}/>
                        <p className='text-[16px] font-semibold'>Drop-Off</p>
                    </div>
                    {/* Bottom Section */}
                    {/* 1st part Bottom section */}
                    <div className='flex justify-between items-center gap-4'>
                        <div className=' border-r-2 ' >
                            <div className=' flex flex-col p-2 '>
                                <h1 className='text-[16px] font-bold'>Location</h1>
                                <div className='flex flex-row justify-start items-center gap-2'>
                                    <p className='text-[12px] font-medium text-black/50'>Select your city</p>
                                    <span> <ChevronDown  width={12} height={12}/> </span>
                                </div>
                            </div>
                        </div>
                        {/* 2nd part Bottom section */}
                        <div className=' border-r-2' >
                            <div className=' flex flex-col p-2'>
                                <h1 className='text-[16px] font-bold'>Date</h1>
                                <div className='flex flex-row justify-start items-center gap-2'>
                                    <p className='text-[12px] font-medium text-black/50'>Select your date</p>
                                    <span> <ChevronDown  width={12} height={12}/> </span>
                                </div>
                            </div>
                        </div>
                        {/* 3rd part Bottom section */}
                        <div className=' ' >
                            <div className=' flex flex-col p-2'>
                                <h1 className='text-[16px] font-bold'>Time</h1>
                                <div className='flex flex-row justify-start items-center gap-2'>
                                    <p className='text-[12px] font-medium text-black/50'>Select your time</p>
                                    <span> <ChevronDown  width={12} height={12}/> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>



            </div>

        </div>
    </div>
  )
}
