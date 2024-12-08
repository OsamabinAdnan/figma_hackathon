import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full'>
        <div className='max-w-[1440px] mx-auto'>
            {/* Above Section */}

            <div className='flex justify-between lg:flex-row flex-col px-2 xl:px-1  md:gap-12 gap-8 items-start pt-[80px] pb-9 border-b-[1px] border-black/50  '>
                {/* Left Part */}
                <div className='flex flex-col w-[292px] gap-4'>
                    <h1 className='text-[32px] font-bold text-PrimaryBlue'>MORENT</h1>
                    <p className='text-[16px] font-medium text-black/60 leading-4'>Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                {/* Right Part */}
                <div className='grid md:grid-cols-3 grid-cols-2  gap-12'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-[20px] font-semibold'>About</h1>
                        <div className='flex flex-col gap-6'>
                            <p className='text-[16px] font-medium text-black/60 cursor-pointer'>How it works</p>
                            <p className='text-[16px] font-medium text-black/60 cursor-pointer'>Featured</p>
                            <p className='text-[16px] font-medium text-black/60 cursor-pointer'>Partnership</p>
                            <p className='text-[16px] font-medium text-black/60 cursor-pointer'>Business Relation</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-[20px] font-semibold'>Community</h1>
                        <div className='flex flex-col gap-6'>
                            <p className='text-[16px] font-medium text-black/60 cursor-pointer' >Events</p>
                            <p className='text-[16px] font-medium text-black/60 cursor-pointer' >Blog</p>
                            <p className='text-[16px] font-medium text-black/60 cursor-pointer' >Podcast</p>
                            <p className='text-[16px] font-medium text-black/60 cursor-pointer' >Invite a friend</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-[20px] font-semibold'>Social</h1>
                        <div className='flex flex-col gap-6'>
                            <p className='text-[16px] font-medium text-black/60 cursor-pointer'>Discord</p>
                            <p className='text-[16px] font-medium text-black/60 cursor-pointer'>Instagram</p>
                            <p className='text-[16px] font-medium text-black/60 cursor-pointer' >Twitter</p>
                            <p className='text-[16px] font-medium text-black/60 cursor-pointer'>Facebook</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Below Section */}
            <div className='flex justify-between md:items-center items-start pt-6 pb-[60px] md:flex-row flex-col-reverse lg:gap-2 gap-8 px-2 xl:px-0'>
                <p className='text-[16px] font-semibold'>&#169;2022 MORENT. All rights reserved</p>
                <div className='flex justify-between items-center gap-[60px]'>
                    <p className='text-[16px] font-semibold cursor-pointer'>Privacy Policy</p>
                    <p className='text-[16px] font-semibold cursor-pointer'>Terms & Condition</p>
                </div>
            </div>
        </div>
        
    </footer>
  )
}
