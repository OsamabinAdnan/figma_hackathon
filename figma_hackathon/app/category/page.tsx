'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Image from 'next/image';
import { ChevronDown, Heart } from 'lucide-react';


export default function Category() {
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
                {/* Left side of the top category section */}
                <div className={`bg-white px-8 w-[360px] max-h-full h-max shadow-sm lg:flex flex-col ${isOpen ? "block" : "hidden"} ${isOpen ? "absolute":"relative"}`}>
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

                {/* Right side of the category section */}
                <div className={`max-w-[1280px] w-full  mx-auto py-8 px-4 bg-SecondaryBgGray max-h-full h-max relative   ${isOpen ? "hidden" : "block"}`}>
                    {/* Pick up and Drop Off */}
                    <div className='flex justify-between items-center lg:flex-row flex-col'>
                        {/* Above Section */}
                        <div className='p-4 bg-white max-w-[582px] space-y-2 shadow-md rounded'>
                        
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

                    {/* Cars Section */}
                    {/* 1st row */}
                    <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 place-items-center'>
                        {/* 1st Car Card */}
                        <div className='bg-white w-[304px] h-[388px] p-4 rounded-[10px] flex justify-center items-center relative shadow-lg'>
                            <div className='space-y-8'>
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
                                    <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
                                </div>
                            </div>
                            <span className='CarShadow'></span>
                        </div>

                        {/* 2nd Car Card */}
                        <div className='bg-white w-[304px] h-[388px] p-4 rounded-[10px] flex justify-center items-center relative shadow-lg'>
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
                                    <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
                                </div>
                            </div>
                            <span className='CarShadow'></span>
                        </div>

                        {/* 3rd Car Card */}
                        <div className='bg-white w-[304px] h-[388px] p-4 rounded-[10px] flex justify-center items-center relative shadow-lg'>
                            <div className='space-y-8'>
                                {/* Text and heart */}
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <h1 className='text-[20px] font-bold'>Rolls - Royce</h1>
                                        <p className='text-[14px] font-bold text-ThirdColor'>Sedan</p>
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
                                    <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
                                </div>
                            </div>
                            <span className='CarShadow'></span>
                        </div>
                    </div>
                    {/* Cars Section */}
                    {/* 2nd row */}
                    <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 place-items-center'>
                        {/* 1st Car Card */}
                        <div className='bg-white w-[310px] h-[388px] p-2  rounded-[10px] flex justify-center items-center relative shadow-lg'>
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
                                    <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
                                </div>
                            </div>
                            <span className='CarShadow'></span>
                        </div>

                        {/* 2nd Car Card */}
                        <div className='bg-white w-[304px] h-[388px] p-2 rounded-[10px] flex justify-center items-center relative shadow-lg'>
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
                                    <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
                                </div>
                            </div>
                            <span className='CarShadow'></span>
                        </div>

                        {/* 3rd Car Card */}
                        <div className='bg-white w-[304px] h-[388px] p-2 rounded-[10px] flex justify-center items-center relative shadow-lg'>
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
                                    <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
                                </div>
                            </div>
                            <span className='CarShadow'></span>
                        </div>
                    </div>

                    {/* Cars Section */}
                    {/* 3rd row */}
                    <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 place-items-center'>
                        {/* 1st Car Card */}
                        <div className='bg-white w-[304px] h-[388px] p-2 rounded-[10px] flex justify-center items-center relative shadow-lg'>
                            <div className='space-y-6'>
                                {/* Text and heart */}
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <h1 className='text-[20px] font-bold'>MG ZX Exclusice</h1>
                                        <p className='text-[14px] font-bold text-ThirdColor'>Hatchback</p>
                                    </div>
                                    <div>
                                        <Heart className='text-ThirdColor'  />
                                    </div>
                                </div>
                                {/* Car */}
                                <div className='flex justify-center items-center '>
                                    <div>
                                        <Image src='/mgzx-excite.png'width={260} height={100} alt='car'/>
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
                                    <div>
                                        <p className='text-[20px] font-bold'>$76.00/ <span className='text-[14px] text-ThirdColor'>day</span></p>
                                        <p className='text-[14px] text-ThirdColor font-bold line-through'>$80.00</p>
                                    </div>
                                    <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
                                </div>
                            </div>
                            <span className='CarShadow'></span>
                        </div>

                        {/* 2nd Car Card */}
                        <div className='bg-white w-[304px] h-[388px] p-2 rounded-[10px] flex justify-center items-center relative shadow-lg'>
                            <div className='space-y-6'>
                                {/* Text and heart */}
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <h1 className='text-[20px] font-bold'>New MG ZS</h1>
                                        <p className='text-[14px] font-bold text-ThirdColor'>SUV</p>
                                    </div>
                                    <div>
                                        <Heart className='text-ThirdColor'  />
                                    </div>
                                </div>
                                {/* Car */}
                                <div className='flex justify-center items-center '>
                                    <div>
                                        <Image src='/newmg-zs.png'width={260} height={100} alt='car'/>
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
                                    <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
                                </div>
                            </div>
                            <span className='CarShadow'></span>
                        </div>

                        {/* 3rd Car Card */}
                        <div className='bg-white w-[304px] h-[388px] p-2 rounded-[10px] flex justify-center items-center relative shadow-lg'>
                            <div className='space-y-6'>
                                {/* Text and heart */}
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <h1 className='text-[20px] font-bold'>MG ZX Excite</h1>
                                        <p className='text-[14px] font-bold text-ThirdColor'>Hatchback</p>
                                    </div>
                                    <div>
                                        <Heart className='text-transparent' fill='red' />
                                    </div>
                                </div>
                                {/* Car */}
                                <div className='flex justify-center items-center '>
                                    <div>
                                        <Image src='/mgzx-excite.png'width={260} height={100} alt='car'/>
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
                                        <p className='text-[14px] font-medium text-ThirdColor'>4 People</p>
                                    </div>
                                </div>
                                {/* Price and Button */}
                                <div className='flex justify-between items-center'>
                                    <p className='text-[20px] font-bold'>$74.00/ <span className='text-[14px] text-ThirdColor'>day</span></p>
                                    <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
                                </div>
                            </div>
                            <span className='CarShadow'></span>
                        </div>

                    </div>

                    {/* Button and small text */}
                    <div className='flex justify-center items-center my-10  relative'>
                        <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]'>
                            Show more car
                        </Button>
                        <div className=' right-5 absolute'>
                            <span className='text-[14px] text-ThirdColor font-medium text-right'>120 Car</span>
                        </div>
                        
                        
                    </div>

                </div>
            </div>
            
        </div>
     )
}
