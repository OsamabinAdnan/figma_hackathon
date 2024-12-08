import React from 'react'
import { Input } from './ui/input'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <>
       <header className='w-full border-b-2  p-4 space-y-8 bg-white'>
            <div className='max-w-[1440px] mx-auto flex items-center justify-between'>
                {/* Left Side */}
                <div className='flex justify-center items-center gap-16 md:flex-row flex-col '>
                    {/* Logo */}
                    <div className=''>
                        <h1 className='text-[32px] font-bold text-PrimaryBlue'><Link href={'/'}>MORENT</Link></h1>   
                    </div>

                    {/* Search bar */}
                    {/* Will remain from md and above */}
                    <div className='border-[1px] rounded-full hidden lg:flex justify-between  items-center px-4'>
                        <span className='flex justify-center items-center md:w-[492px] gap-5'>
                            <Image src='/icon-search.png' alt='icon' width={24} height={24}/>
                            <Input type='text' placeholder='Search something here' className='border-none text-[14px] text-textGray font-regular'/>
                        </span>
                        <span>
                            <Image src='/icon-filter.png' alt='icon'width={24} height={24}/>
                        </span>
                    </div>
                </div>
                {/* Right Side */}
                <div className='flex justify-between items-center gap-5'>
                    <div className='w-[44px] h-[44px] rounded-full border-[1px] border-[#C3D4E9] hidden md:flex justify-center items-center'>
                        <Link href={'/category'}> <Image src='/icon-gray-heart.png' alt='icon' width={24} height={24}/></Link>
                    </div>
                    <div className='w-[44px] h-[44px] rounded-full border-[1px] border-[#C3D4E9] hidden md:flex justify-center items-center relative'>
                    <Link href={'/payment'}><Image src='/icon-gray-notification.png' alt='icon' width={24} height={24}/></Link>
                        <span className='absolute h-[11px] w-[11px] bg-[#FF4423] rounded-full right-0 top-0'></span>
                    </div>
                    <div className='w-[44px] h-[44px] rounded-full border-[1px] border-[#C3D4E9] hidden md:flex justify-center items-center'>
                    <Link href={'/detail'}><Image src='/icon-gray-setting.png' alt='icon' width={24} height={24}/></Link>
                    </div>
                    <div className='w-[44px] h-[44px] rounded-full border-[1px] border-[#C3D4E9] flex justify-center  items-center'>
                    <Link href={'/dashboard'}> <Image src='/Image-user-header.png' alt='icon' width={44} height={44}/></Link>
                    </div>   
                </div>
            </div>
            {/* Search bar Div appear below md */}
            <div className=' lg:hidden flex justify-between  items-center gap-10 max-w-[1440px] mx-auto '>
                <div className=' flex justify-center items-center gap-2 border-[1px] px-4 rounded-[20px] w-3/4'>
                    <Image src='/icon-search.png' alt='icon' width={24} height={24}/>
                    <Input type='text' placeholder='Search something here' className='border-none text-[14px] text-textGray font-regular'/>
                </div>
                <div className='border-[1px] px-4 rounded h-[44px] max-h-full w-[74px]   flex justify-center items-center'>
                    <Image src='/icon-filter.png' alt='icon'width={24} height={24} className=''/>
                </div>
                   
            </div>


        </header>
    </>
  )
}


