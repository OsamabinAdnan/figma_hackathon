'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GiHamburgerMenu } from 'react-icons/gi'; 
import { ImCross } from 'react-icons/im';
import { Slider } from '@/components/ui/slider';
import Image from 'next/image';
import { ChevronDown, Heart, Star } from 'lucide-react';
import Link from 'next/link';

export default function Detail() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className='w-full'>
        {/* Toggle Button */}
            <div className='flex justify-center items-start'>
                <Button className="p-2 bg-PrimaryBlue text-white rounded lg:hidden text-center" onClick={toggleMenu}> {isOpen ? <ImCross className='text-black' /> : <GiHamburgerMenu className='text-black'/>}
                </Button>
            </div>
        <div className='flex'>
            {/* Left side of the top detail section */}
            <div className={`bg-white px-8 w-[320px] max-h-full h-max shadow-sm lg:flex flex-col ${isOpen ? "block" : "hidden"} ${isOpen ? "absolute":"relative"}`}>
                {/* Type */}
                <div className='mx-0 mt-8'>
                    <h1 className='text-[12px] text-black/50 font-semibold'>TYPE</h1>
                    <div className='flex justify-start items-center gap-2'>
                        <label htmlFor="" >
                            <Input type='checkbox' width={24} height={24} color="#3563E9" checked readOnly className='w-4 rounded'/>
                        </label>
                        <p className='text-[20px] text-black/70 font-semibold'>Sport <span className='text-black/50'> (10)</span></p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <label htmlFor="">
                            <Input type='checkbox' width={48} height={48} color="#3563E9" checked readOnly className='w-4 rounded-[10px]'/>
                        </label>
                        <p className='text-[20px] text-black/70 font-semibold'>SUV <span className='text-black/50'> (12)</span></p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <label htmlFor="">
                            <Input type='checkbox' width={48} height={48} color="#3563E9" className='w-4 rounded-[10px]'/>
                        </label>
                        <p className='text-[20px] text-black/70 font-semibold'>MPV <span className='text-black/50'> (16)</span></p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <label htmlFor="">
                            <Input type='checkbox' width={48} height={48} color="#3563E9" className='w-4 rounded-[10px]'/>
                        </label>
                        <p className='text-[20px] text-black/70 font-semibold'>Sedan <span className='text-black/50'> (20)</span></p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <label htmlFor="">
                            <Input type='checkbox' width={48} height={48} color="#3563E9" className='w-4 rounded-[10px]'/>
                        </label>
                        <p className='text-[20px] text-black/70 font-semibold'>Coupe <span className='text-black/50'> (14)</span></p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <label htmlFor="">
                            <Input type='checkbox' width={48} height={48} color="#3563E9" className='w-4 rounded-[10px]'/>
                        </label>
                        <p className='text-[20px] text-black/70 font-semibold'>Hatchback <span className='text-black/50'> (14)</span></p>
                    </div>
                </div>
                {/* Capacity */}
                <div className='mx-0 mt-8'>
                    <h1 className='text-[12px] text-black/50 font-semibold'>CAPACITY</h1>
                    <div className='flex justify-start items-center gap-2'>
                        <label htmlFor="" >
                            <Input type='checkbox' width={24} height={24} color="#3563E9" checked readOnly className='w-4 rounded'/>
                        </label>
                        <p className='text-[20px] text-black/70 font-semibold'>2 Person <span className='text-black/50'> (10)</span></p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <label htmlFor="">
                            <Input type='checkbox' width={48} height={48} color="#3563E9"  className='w-4 rounded-[10px]'/>
                        </label>
                        <p className='text-[20px] text-black/70 font-semibold'>4 Person <span className='text-black/50'> (14)</span></p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <label htmlFor="">
                            <Input type='checkbox' width={48} height={48} color="#3563E9" className='w-4 rounded-[10px]'/>
                        </label>
                        <p className='text-[20px] text-black/70 font-semibold'>6 Person <span className='text-black/50'> (12)</span></p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <label htmlFor="">
                            <Input type='checkbox' width={48} height={48} color="#3563E9" checked readOnly className='w-4 rounded-[10px]'/>
                        </label>
                        <p className='text-[20px] text-black/70 font-semibold'>8 or More <span className='text-black/50'> (16)</span></p>
                    </div>
                </div>
                {/* Price */}
                <div className='mx-0 mt-8'>
                    <h1 className='text-[12px] text-black/50 font-semibold mb-5'>PRICE</h1>
                    <div className='flex  justify-center items-center mb-5 '>
                        <Slider color='red' className='text-PrimaryBlue  rounded max-w-full w-[250px]'/>
                    </div>
                    <p className='text-[20px] text-black/70 font-semibold'>Max. $100.00</p>

                    
                </div>
            </div>

            {/* Right side  of the detail section*/}
            <div className={`max-w-[1280px] w-full  mx-auto py-8 px-0 bg-SecondaryBgGray max-h-full h-max relative   ${isOpen ? "hidden" : "block"}`}>  
                <div className='flex justify-center items-center lg:flex-row flex-col bg-white rounded gap-10 m-5'>
                    {/* Right side Top-left section Car Picture */}
                    <div className='sm:max-w-[492px] max-w-[320px]  max-h-[508px]'>
                        
                        <div className='space-y-5'>
                            {/* top section left part big picture */}
                            <div className='relative lg:w-[492px] md:w-[475px] max-h-[360px] bg-PrimaryBlue p-4 rounded  space-y-6'>
                                <div className=' flex flex-col max-w-[372px] gap-2'>
                                    <h1 className='text-white text-[32px] font-semibold'>Sports car with the best design and acceleration</h1>
                                    <p className='text-white text-[16px] max-w-[284px] font-medium'>Safety and comfort while driving a 
                                    futuristic and elegant sports car</p>
                                </div>
                                <div className='flex items-center justify-center '>
                                    <Image src='/hero-car-2.png' alt='car' width={365} height={116}/>
                                </div>
                            </div>
                            {/* top section left part small pictures */}
                            <div className='flex justify-between items-center lg:max-w-[492px]'>
                                <div className='border-2  rounded w-[152px] h-[124px] group hover:border-PrimaryBlue'>
                                    <Image src='/View 1.png' alt='view' width={148} height={125} className='rounded group-hover:scale-90 duration-500 transition-all'/>
                                </div>
                                <div className='border-2  rounded w-[152px] h-[124px] group hover:border-PrimaryBlue'>
                                    <Image src='/View 2.png' alt='view' width={148} height={125} className='rounded group-hover:scale-90 duration-500 transition-all'/>
                                </div>
                                <div className='border-2  rounded w-[152px] h-[124px] group hover:border-PrimaryBlue'>
                                    <Image src='/View 3.png' alt='view' width={148} height={125} className='rounded group-hover:scale-90 duration-500 transition-all'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right side Top-right section Car Text */}
                    <div className='sm:max-w-[492px] max-w-[320px] max-h-full   space-y-8 p-2 '>
                        {/* Text stars and heart */}
                        <div className='flex justify-between items-start'>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[32px] font-bold'>Nissan GT-R</h1>
                                <div className='flex items-center justify-start gap-2'>
                                    <div className='flex gap-1'>
                                        <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                        <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                        <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                        <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                        <Star className='text-[#596780]'   />
                                    </div>
                                    <p className='text-[14px] font-medium text-black/50'>440+ Reviews</p>
                                </div>
                            </div>
                            <div>
                                <Heart className='text-red-500' fill='red'/>
                            </div>
                        </div>
                        {/* Paragraph */}
                        <div>
                            <p className='text-[20px] font-normal text-[#596780]'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
                        </div>
                        {/* Features */}
                        <div className='flex sm:justify-between items-center sm:flex-row flex-col justify-center'>
                            <div className='space-y-2'>
                                <div className='flex justify-between items-center gap-4'>
                                    <p className='text-[20px] font-normal text-textGray'>Type Car</p>
                                    <p className='text-[20px] font-semibold text-textGray'>Sport</p>
                                </div>
                                <div className='flex justify-between items-center gap-4'>
                                    <p className='text-[20px] font-normal text-textGray'>Streeing</p>
                                    <p className='text-[20px] font-semibold text-textGray'>Manual</p>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <div className='flex justify-between items-center gap-4'>
                                    <p className='text-[20px] font-normal text-textGray'>Capacity</p>
                                    <p className='text-[20px] font-semibold text-textGray'>2 Person</p>
                                </div>
                                <div className='flex justify-between items-center gap-4'>
                                    <p className='text-[20px] font-normal text-textGray'>Gasonline</p>
                                    <p className='text-[20px] font-semibold text-textGray'>70L</p>
                                </div>
                            </div>
                        </div>
                        {/* Price and Button */}
                        <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-[28px] font-bold'>$80.00/ <span className='text-[16px] text-textGray'>day</span></p>
                            <p className='text-[16px] text-textGray font-bold line-through'>$100.00</p>
                        </div>
                        <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue px-5 py-1 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
                    </div>
                    </div>
                </div>
                {/* Review */}
                <div className='bg-white m-5 rounded lg:p-4 p-2 space-y-2'>
                    {/* Review Text */}
                    <div className='flex gap-3 items-center mb-6'>
                        <h2 className='text-[20px] font-semibold'>Reviews</h2>
                        <div className='w-[44px] h-[28px] bg-PrimaryBlue flex justify-center items-center rounded'>
                        <span className=' text-white text-[14px] font-bold'>13</span>
                        </div>                        
                    </div>
                    {/*1st Reviewer photo text, rating etc. */}
                    <div className='flex justify-between items-center '>
                        <div className='flex gap-3'>
                            <div>
                                <Image src='/Profill.png' alt='img' width={56} height={56}/>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[20px] font-bold'>Alex Stanton</h1>
                                <p className='text-[14px] font-medium text-textGray'>CEO at Bukalapak</p>
                            </div>
                        </div>
                        {/* Date and Star */}
                        <div className='flex flex-col gap-2'>
                            <div>
                                <h1 className='text-[14px] font-medium text-textGray text-right'>21 July 2022</h1>
                            </div>
                            <div className='flex gap-1'>
                                <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                <Star className='text-[#596780]'   />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center ml-12'>
                        <p className='text-[14px] font-normal text-textGray '>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                    </div>

                    {/*2nd Reviewer photo text, rating etc. */}
                    <div className='flex justify-between items-center mt-8'>
                        <div className='flex gap-3'>
                            <div>
                                <Image src='/Profill2.png' alt='img' width={56} height={56}/>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[20px] font-bold'>Skylar Dias</h1>
                                <p className='text-[14px] font-medium text-textGray'>CEO at Amazon</p>
                            </div>
                        </div>
                        {/* Date and Star */}
                        <div className='flex flex-col gap-2'>
                            <div>
                                <h1 className='text-[14px] font-medium text-textGray text-right'>20 July 2022</h1>
                            </div>
                            <div className='flex gap-1'>
                                <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                <Star className='text-[#596780]'   />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center ml-12'>
                        <p className='text-[14px] font-normal text-textGray '>We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                    </div>
                    <div className='mt-8 flex justify-center items-center'>
                        <Button className='text-[16px] font-semibold text-[#90A3BF]'>Show All <span><ChevronDown width={16} hanging={16}/></span></Button>
                    </div>

                </div>
                  {/* Recent Cars */}
                  <div className='flex  justify-between items-center m-5'>
                    <h1 className='text-[#90A3BF] text-[16px] font-semibold'>Recent Car</h1>
                    <Link href='/' className='text-[16px] font-semibold text-PrimaryBlue'>View All</Link>
                </div>

                {/* Car List */}
                <div className='flex justify-between items-center overflow-hidden gap-8 mx-5'>
                
                    {/* 1st Car Card */}
                    <div className='bg-white w-[304px] h-[388px] p-4 rounded-[10px] flex justify-center items-center relative'>
                        <div className='space-y-8 '>
                            {/* Text and heart */}
                            <div className='flex justify-between items-start'>
                                <div>
                                    <h1 className='text-[20px] font-bold'>Koenigsegg</h1>
                                    <p className='text-[14px] font-bold text-ThirdColor'>Sport</p>
                                </div>
                                <div>
                                    <Heart className='text-transparent' fill='red'/>
                                </div>
                            </div>
                            {/* Car */}
                            <div className='flex justify-center items-center '>
                                <div>
                                    <Image src='/hero-car-1.png'width={304} height={68} alt='car'/>
                                </div>
                            </div>
                            {/* Icons */}
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/gas-station.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>90L</p>
                                </div>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/Car.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>Manual</p>
                                </div>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/profile-2user.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>2 People</p>
                                </div>
                            </div>
                            {/* Price and Button */}
                            <div className='flex justify-between items-center'>
                                <p className='text-[20px] font-bold'>$99.00/ <span className='text-[14px] text-ThirdColor'>day</span></p>
                                <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue md:px-4 px-2 py-1 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
                            </div>
                        </div>
                        <span className='CarShadow'></span>
                    </div>

                    {/* 2nd Car Card */}
                    <div className='bg-white w-[304px] h-[388px] p-4 rounded-[10px] flex justify-center items-center relative'>
                        <div className='space-y-8'>
                            {/* Text and heart */}
                            <div className='flex justify-between items-start'>
                                <div>
                                    <h1 className='text-[20px] font-bold'>Nissan GT - R</h1>
                                    <p className='text-[14px] font-bold text-ThirdColor'>Sport</p>
                                </div>
                                <div>
                                    <Heart className='text-ThirdColor' />
                                </div>
                            </div>
                            {/* Car */}
                            <div className='flex justify-center items-center '>
                                <div>
                                    <Image src='/Nissangtr.png'width={304} height={68} alt='car'/>
                                </div>
                            </div>
                            {/* Icons */}
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/gas-station.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>80L</p>
                                </div>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/Car.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>Manual</p>
                                </div>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/profile-2user.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>2 People</p>
                                </div>
                            </div>
                            {/* Price and Button */}
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className='text-[20px] font-bold'>$80.00/ <span className='text-[14px] text-ThirdColor'>day</span></p>
                                    <p className='text-[14px] text-ThirdColor font-bold line-through'>$100.00</p>
                                </div>
                                <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue md:px-4 px-2 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
                            </div>
                        </div>
                        <span className='CarShadow'></span>
                    </div>

                    {/* 3rd Car Card */}
                    <div className='bg-white w-[304px] h-[388px] p-4 rounded-[10px] flex justify-center items-center relative'>
                        <div className='space-y-8'>
                            {/* Text and heart */}
                            <div className='flex justify-between items-start'>
                                <div>
                                    <h1 className='text-[20px] font-bold'>Rolls - Royce</h1>
                                    <p className='text-[14px] font-bold text-ThirdColor'>Sport</p>
                                </div>
                                <div>
                                    <Heart className='text-ThirdColor' />
                                </div>
                            </div>
                            {/* Car Image*/}
                            <div className='flex justify-center items-center '>
                                <div>
                                    <Image src='/rolls-royce.png'width={304} height={68} alt='car'/>
                                </div>
                            </div>
                            {/* Icons */}
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/gas-station.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>70L</p>
                                </div>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/Car.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>Manual</p>
                                </div>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/profile-2user.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>4 People</p>
                                </div>
                            </div>
                            {/* Price and Button */}
                            <div className='flex justify-between items-center'>
                                <p className='text-[20px] font-bold'>$96.00/ <span className='text-[14px] text-ThirdColor'>day</span></p>
                                <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue md:px-4 px-2 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
                            </div>
                        </div>
                        <span className='CarShadow'></span>
                    </div>

                </div>
                 {/* Recommended Cars List */}
                 <div className='flex  justify-between items-center m-5'>
                    <h1 className='text-[#90A3BF] text-[16px] font-semibold'>Recommendation Car</h1>
                    <Link href='/' className='text-[16px] font-semibold text-PrimaryBlue'>View All</Link>
                </div>

                {/* Car List */}
                <div className='flex justify-between items-center overflow-hidden gap-8 mx-5'>
                
                      {/* 1st Car Card */}
                    <div className='bg-white w-[310px] h-[388px] p-2  rounded-[10px] flex justify-center items-center relative'>
                        <div className='space-y-6 '>
                            {/* Text and heart */}
                            <div className='flex justify-between items-start'>
                                <div>
                                    <h1 className='text-[20px] font-bold'>All New Rush</h1>
                                    <p className='text-[14px] font-bold text-ThirdColor'>SUV</p>
                                </div>
                                <div>
                                    <Heart className='text-ThirdColor' />
                                </div>
                            </div>
                            {/* Car Image*/}
                            <div className='flex justify-center items-center '>
                                <div>
                                    <Image src='/allnewrush.png'width={250} height={100} alt='car'/>
                                </div>
                            </div>
                            {/* Icons */}
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/gas-station.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>70L</p>
                                </div>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/Car.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>Manual</p>
                                </div>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/profile-2user.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>6 People</p>
                                </div>
                            </div>
                            {/* Price and Button */}
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className='text-[20px] font-bold'>$72.00/ <span className='text-[14px] text-ThirdColor'>day</span></p>
                                    <p className='text-[14px] text-ThirdColor font-bold line-through'>$80.00</p>
                                </div>
                                <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue md:px-4 px-2 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
                            </div>
                        </div>
                        <span className='CarShadow'></span>
                    </div>

                    {/* 2nd Car Card */}
                    <div className='bg-white w-[304px] h-[388px] p-2 rounded-[10px] flex justify-center items-center relative'>
                        <div className='space-y-6'>
                            {/* Text and heart */}
                            <div className='flex justify-between items-start'>
                                <div>
                                    <h1 className='text-[20px] font-bold'>CR-V</h1>
                                    <p className='text-[14px] font-bold text-ThirdColor'>SUV</p>
                                </div>
                                <div>
                                    <Heart className='text-transparent' fill='red' />
                                </div>
                            </div>
                            {/* Car Image */}
                            <div className='flex justify-center items-center '>
                                <div>
                                    <Image src='/crv.png'width={250} height={100} alt='car'/>
                                </div>
                            </div>
                            {/* Icons */}
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/gas-station.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>80L</p>
                                </div>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/Car.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>Manual</p>
                                </div>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/profile-2user.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>6 People</p>
                                </div>
                            </div>
                            {/* Price and Button */}
                            <div className='flex justify-between items-center'>
                                <p className='text-[20px] font-bold'>$80.00/ <span className='text-[14px] text-ThirdColor'>day</span></p>
                                <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue md:px-4 px-2 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
                            </div>
                        </div>
                        <span className='CarShadow'></span>
                    </div>

                    {/* 3rd Car Card */}
                    <div className='bg-white w-[304px] h-[388px] p-2 rounded-[10px] flex justify-center items-center relative'>
                        <div className='space-y-6'>
                            {/* Text and heart */}
                            <div className='flex justify-between items-start'>
                                <div>
                                    <h1 className='text-[20px] font-bold'>All New Terios</h1>
                                    <p className='text-[14px] font-bold text-ThirdColor'>SUV</p>
                                </div>
                                <div>
                                    <Heart className='text-ThirdColor' />
                                </div>
                            </div>
                            {/* Car Image*/}
                            <div className='flex justify-center items-center '>
                                <div>
                                    <Image src='/allnewterios.png'width={250} height={100} alt='car'/>
                                </div>
                            </div>
                            {/* Icons */}
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/gas-station.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>90L</p>
                                </div>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/Car.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>Manual</p>
                                </div>
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src='/profile-2user.png' alt='icon' width={24} height={24}/>
                                    <p className='text-[14px] font-medium text-ThirdColor'>6 People</p>
                                </div>
                            </div>
                            {/* Price and Button */}
                            <div className='flex justify-between items-center'>
                                <p className='text-[20px] font-bold'>$74.00/ <span className='text-[14px] text-ThirdColor'>day</span></p>
                                <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue md:px-4 px-2 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
                            </div>
                        </div>
                        <span className='CarShadow'></span>
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}
