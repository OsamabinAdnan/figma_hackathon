import React from 'react'
import { Button } from './ui/button'
import { Heart } from 'lucide-react'
import Image from 'next/image'

export default function RecommendedCarsHome() {
  return (
    <div className='w-full bg-SecondaryBgGray'>
    <div className='max-w-[1440px] mx-auto pb-8 '>
        {/* Heading and Button */}
        <div className='flex justify-between items-center pb-4'>
            <h1 className='text-[#90A3BF] text-[16px] font-semibold p-2'>Recomendation Car</h1>
            
        </div>

        {/* Recommandation Cars */}
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 place-items-center'>
            
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
                        <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
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
                        <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
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
                        <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]'>Rent Now</Button>
                    </div>
                </div>
                <span className='CarShadow'></span>
            </div>

             {/* 4th Car Card */}
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
                            <Image src='/crvblack.png'width={250} height={100} alt='car'/>
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

             {/* 5th Car Card */}
             <div className='bg-white w-[304px] h-[388px] p-2 rounded-[10px] flex justify-center items-center relative'>
                <div className='space-y-6'>
                    {/* Text and heart */}
                    <div className='flex justify-between items-start'>
                        <div>
                            <h1 className='text-[20px] font-bold'>MG ZX Exclusice</h1>
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

             {/* 6th Car Card */}
             <div className='bg-white w-[304px] h-[388px] p-2 rounded-[10px] flex justify-center items-center relative'>
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

            {/* 7th Car Card */}
            <div className='bg-white w-[304px] h-[388px] p-2 rounded-[10px] flex justify-center items-center relative'>
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

            {/* 8th Car Card */}
            <div className='bg-white w-[304px] h-[388px] p-2 rounded-[10px] flex justify-center items-center relative'>
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
        </div>
        {/* Button and small text */}
        <div className='flex justify-center items-center py-16 relative'>
            <Button className='text-[16px] font-semibold text-white bg-PrimaryBlue px-4 py-1 rounded h-[44px] hover:bg-[#54A6FF]'>
                Show more car
            </Button>
            <div className=' right-5 absolute'>
                <span className='text-[14px] text-ThirdColor font-medium text-right'>120 Car</span>
            </div>
            
            
        </div>
    </div>
</div>
  )
}
