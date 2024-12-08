import { Input } from '@/components/ui/input'
import { ChevronDown, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from '@/components/ui/button'

export default function Payment() {
  return (
    <div className='bg-SecondaryBgGray max-w-[1440px] mx-auto'>

            
            <div className='py-10 px-5 flex justify-center lg:items-start items-center gap-8 lg:flex-row flex-col-reverse'>
                {/* Left */}
                <div className='max-w-[852px] h-auto sm:ml-0 ml-5'>
                    {/* Billing Info */}
                    <div className='bg-white p-4 rounded'>
                        <h1 className='text-[20px] font-bold'>Billing Info</h1>
                        <div className='flex justify-between items-center'>
                            <p className='text-[14px] font-medium text-textGray'>Please enter your billing info</p>
                            <p className='text-[14px] font-medium text-textGray'>Step 1 of 4</p>
                        </div>
                        <div className='mt-4 flex justify-between items-center md:flex-row flex-col'>
                            <label className='text-[16px] font-semibold '>Name
                                <Input type='text' placeholder='Your Name' className='border-none pl-2 bg-[#f6f7f9] text-textGray text-[14px] font-medium rounded w-[350px] h-[56px]'/>
                            </label >
                            <label className='text-[16px] font-semibold'>Phone Number
                                <Input type='tel' placeholder='Phone Number' className='border-none pl-2 bg-[#f6f7f9] text-textGray text-[10px] font-medium rounded w-[350px] h-[56px]'/>
                            </label>
                        </div>
                        <div className='mt-4 flex justify-between items-center md:flex-row flex-col'>
                            <label className='text-[16px] font-semibold '>Address
                                <Input type='text' placeholder='Address' className='border-none pl-2 bg-[#f6f7f9] text-textGray text-[14px] font-medium rounded w-[350px] h-[56px]'/>
                            </label >
                            <label className='text-[16px] font-semibold'>Town/ City
                                <Input type='text' placeholder='Town or City' className='border-none pl-2 bg-[#f6f7f9] text-textGray text-[10px] font-medium rounded w-[350px] h-[56px]'/>
                            </label>
                        </div>
                    </div>
                    {/* Rental Info */}
                    {/* Pick up */}
                    <div className='bg-white p-4 mt-10 rounded '>
                        <h1 className='text-[20px] font-bold'>Rental Info</h1>
                        <div className='flex justify-between items-center'>
                            <p className='text-[14px] font-medium text-textGray'>Please select your rental date</p>
                            <p className='text-[14px] font-medium text-textGray'>Step 2 of 4</p>
                        </div>
                        
                        <div className='flex justify-start items-center gap-2 py-5'>
                            <Image src='/icon-mark-pick-drop.png' width={16} height={16} alt='icon'/>
                            <p className='text-[16px] font-semibold'>Pick - Up</p>
                        </div>
                        <div className='mt-4 flex justify-between items-center md:flex-row flex-col'>
                            <label className='text-[16px] font-semibold relative'>Location
                                <Input type='text' placeholder='Select your city' className='border-none pl-2 bg-[#f6f7f9] text-textGray text-[14px] font-medium rounded w-[350px] h-[56px]'/><ChevronDown className='absolute top-7 right-5 w-3 text-textGray'/> 
                            </label >
                            <label className='text-[16px] font-semibold relative '>Date
                                <Input type='text' placeholder='Select your date' className='border-none pl-2 bg-[#f6f7f9] text-textGray text-[10px] font-medium rounded w-[350px] h-[56px]'/><ChevronDown className='absolute top-7 right-5 w-3 text-textGray'/> 
                            </label>
                        </div>
                        <div className='mt-4 flex justify-between items-center md:flex-row flex-col'>
                            <label className='text-[16px] font-semibold relative'>Time
                                <Input type='text' placeholder='Select your time' className='border-none pl-2 bg-[#f6f7f9] text-textGray text-[14px] font-medium rounded w-[350px] h-[56px]'/><ChevronDown className='absolute top-7 right-5 w-3 text-textGray'/> 
                            </label >
                            
                        </div>
                        {/* Drop off */}
                        <div className='bg-white  mt-5 rounded '>
                        
                            <div className='flex justify-start items-center gap-2 py-5'>
                                <Image src='/icon-mark-pick-drop.png' width={16} height={16} alt='icon'/>
                                <p className='text-[16px] font-semibold'>Drop - Off</p>
                            </div>
                            <div className='mt-4 flex justify-between items-center md:flex-row flex-col'>
                                <label className='text-[16px] font-semibold relative'>Location
                                    <Input type='text' placeholder='Select your city' className='border-none pl-2 bg-[#f6f7f9] text-textGray text-[14px] font-medium rounded w-[350px] h-[56px]'/><ChevronDown className='absolute top-7 right-5 w-3 text-textGray'/> 
                                </label >
                                <label className='text-[16px] font-semibold relative '>Date
                                    <Input type='text' placeholder='Select your date' className='border-none pl-2 bg-[#f6f7f9] text-textGray text-[10px] font-medium rounded w-[350px] h-[56px]'/><ChevronDown className='absolute top-7 right-5 w-3 text-textGray'/> 
                                </label>
                            </div>
                            <div className='mt-4 flex justify-between items-center md:flex-row flex-col'>
                                <label className='text-[16px] font-semibold relative'>Time
                                    <Input type='text' placeholder='Select your time' className='border-none pl-2 bg-[#f6f7f9] text-textGray text-[14px] font-medium rounded w-[350px] h-[56px]'/><ChevronDown className='absolute top-7 right-5 w-3 text-textGray'/> 
                                </label >
                                
                            </div>
                        </div>

                    </div>
                     {/* Payment Method */}
                    <div className='bg-white p-4 rounded mt-10'>
                        <h1 className='text-[20px] font-bold'>Payment Method</h1>
                        <div className='flex justify-between items-center'>
                            <p className='text-[14px] font-medium text-textGray'>Please enter your payment method</p>
                            <p className='text-[14px] font-medium text-textGray'>Step 3 of 4</p>
                        </div>
                        <div className='bg-SecondaryBgGray rounded py-2'>
                            <div className='flex justify-between items-center gap-2 mx-4'>
                                <div className='flex justify-center items-center gap-2 py-5'>
                                    <Image src='/icon-mark-pick-drop.png' width={16} height={16} alt='icon'/>
                                    <p className='text-[16px] font-semibold'>Credit Card</p>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <Image src='/visa.png' alt='img' width={48} height={16}/>
                                    <Image src='/mc.png' alt='img' width={32} height={20}/>
                                </div>
                                
                            </div>

                            <div className='mt-4 flex justify-between items-center md:flex-row flex-col mx-4'>
                                <label className='text-[16px] font-semibold '>Card Number
                                <Input type='text' placeholder='Card Number' className='border-none pl-2 bg-white text-textGray text-[14px] font-medium rounded w-[350px] h-[56px]'/>
                                </label >
                                <label className='text-[16px] font-semibold'>Expiration Date
                                <Input type='tel' placeholder='DD/MM/YY' className='border-none pl-2 bg-white text-textGray text-[10px] font-medium rounded w-[350px] h-[56px]'/>
                                </label>
                            </div>

                            <div className='mt-4 flex justify-between items-center md:flex-row flex-col mx-4'>
                                <label className='text-[16px] font-semibold '>Card Holder
                                <Input type='text' placeholder='Card Holder' className='border-none pl-2 bg-white text-textGray text-[14px] font-medium rounded w-[350px] h-[56px]'/>
                                </label >
                                <label className='text-[16px] font-semibold'>CVC
                                <Input type='tel' placeholder='CVC' className='border-none pl-2 bg-white text-textGray text-[10px] font-medium rounded w-[350px] h-[56px]'/>
                                </label>
                            </div>
                            

                        </div>
                        {/* Paypal */}
                        <div className='mt-4 flex justify-between items-center flex-row  rounded bg-SecondaryBgGray p-4 '>
                            <div className='flex justify-center items-center gap-2'>
                                    <Checkbox className='rounded w-[20px] h-[20px]' />
                                    <span className='text-[16px] font-semibold '>PayPal</span>
                            </div>
                            <div>
                                    <Image src='/PayPal.png' width={100} height={24} alt='img'/>
                            </div>

                        </div>
                        {/* Bitcoin */}
                        <div className='mt-4 flex justify-between items-center flex-row rounded bg-SecondaryBgGray p-4 '>
                            <div className='flex justify-center items-center gap-2'>
                                    <Checkbox className='rounded w-[20px] h-[20px]' />
                                    <span className='text-[16px] font-semibold '>Bitcoin</span>
                            </div>
                            <div>
                                    <Image src='/Bitcoin.png' width={100} height={24} alt='img'/>
                            </div>

                        </div>
                        
                    </div>

                    {/* Confirmation */}
                    <div className='bg-white p-4 mt-10 rounded '>
                        <h1 className='text-[20px] font-bold'>Conformation</h1>
                        <div className='flex justify-between items-center'>
                            <p className='text-[14px] font-medium text-textGray'>We are getting to the end. Just few clicks and your rental is ready!</p>
                            <p className='text-[14px] font-medium text-textGray'>Step 4 of 4</p>
                        </div>
                        
                         {/* agree 1 */}
                        <div className='mt-4 flex justify-between items-center md:flex-row flex-col rounded bg-SecondaryBgGray p-4 '>
                            <div className='flex justify-center items-center gap-2'>
                                    <Checkbox className='rounded w-[20px] h-[20px]' />
                                    <span className='text-[16px] font-semibold text-[#1F2544]'>I agree with sending an Marketing and newsletter emails. No spam, promissed!</span>
                            </div>
                        </div>

                        {/* agree 2 */}
                        <div className='mt-4 flex justify-between items-center md:flex-row flex-col rounded bg-SecondaryBgGray p-4 '>
                            <div className='flex justify-center items-center gap-2'>
                                    <Checkbox className='rounded w-[20px] h-[20px]' />
                                    <span className='text-[16px] font-semibold text-[#1F2544]'>I agree with our terms and conditions and privacy policy.</span>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <Button className='bg-PrimaryBlue text-white text-[16px] font-bold rounded px-4'>Sent Now</Button>
                        </div>
                        {/* Icons and last statement */}
                        <div className='my-4 '>
                            <Image src='/safety.png' alt='img' width={32} height={32} className='mb-2'/>
                            <h1 className='text-[16px] font-semibold text-[#1F2544] mb-2'>All your data are safe</h1>
                            <p className='text-[14px] font-medium text-[#90A3BF]'>We are using the most advanced security to provide you the best experience ever.</p>
                        </div>
                        
                    </div>
                    
                </div>

                {/* Right */}
                <div className='max-w-[492px] h-auto bg-white rounded p-4'>
                    <div>
                        <h1 className='text-[20px] font-bold'>Rental Summary</h1>
                        <p className='text-[14px] font-medium text-[#90A3BF]'>Prices may change depending on the length of the rental and the price of your rental car.</p>
                    </div>
                    <div className='flex justify-center items-center gap-2 my-4'>
                        <div>
                            <Image src='/View 1.png'alt='img' width={132} height={108}/>
                        </div>
                        <div>
                            <h1 className='text-[32px] font-bold'>NissanGT-R</h1>
                            
                            <div className='flex justify-start items-center gap-1 lg:flex-row flex-col'>
                                <span className='flex justify-center items-center'>
                                <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                <Star className='text-[#FBAD39]' fill='#FBAD39'  />
                                <Star className='text-[#596780]'   />
                                </span>
                                <span className='text-[14px] font-medium text-textGray'>440+ Reviews</span>    
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className=' border-t-2 border-black/10 '>
                            <div className='flex justify-between mt-4 items-center'>
                                <p className='text-[12px] font-semibold text-textGray'>Subtotal</p>
                                <p className='text-[16px] font-semibold'>$80.00</p>
                            </div>
                            <div className='flex justify-between  items-center'>
                                <p className='text-[12px] font-semibold text-textGray'>Tax</p>
                                <p className='text-[16px] font-semibold'>$0</p>
                            </div>
                    </div>
                    <div className='flex'>
                        <Input type='text' className='border-none bg-[#F6F7F9] pl-2 rounded text-[#90A3BF] text-[14px] font-medium' placeholder='Apply Promo Code'/>
                        <Button className='bg-[#F6F7F9] rounded px-4 py-2 text-[12px] font-semibold'>Apply now</Button>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-[20px] font-bold'>Total Rental Price</h1>
                            <p className='text-[#90A3BF] text-[14px] font-medium'>Overall price and includes rental discount</p>
                        </div>
                        <h1 className='text-[32px] font-bold'>$80.00</h1>
                    </div>

                </div>
            </div>
    </div>
  )
}
