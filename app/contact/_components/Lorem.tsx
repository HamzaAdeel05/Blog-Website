import { Textarea } from '@/components/ui/textarea'
import { Facebook, Instagram, Option, OptionIcon, Search, Twitter } from 'lucide-react'

import React from 'react'
import { FaPinterest } from 'react-icons/fa'

const Lorem = () => {
    const logos = [
        <Facebook size={18} />,
        , <Instagram size={18} />
        , <FaPinterest size={18} />
        , <Twitter size={18} />
    ]
    return (
        <div>
            <div className="md:grid grid-cols-4 gap-8 px-5">
                <div className="col-span-3 space-y-4 py-5">
                    <h3 className='text-sm'>Lorem ipsum dosectetur adipisicing elit, sed do
                        .Lorem ipsum dolor sit amet, consectetur Nulla
                        fringilla purus at leo dignissim congue. Mauris elementum accumsan
                        leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu
                        nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit
                        amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur
                        adipisicing elit at leo dignissim congue. Mauris elementum accumsan
                        leo vel tempor.
                        Aliquam et elit eu nunc rhoncus viverra quis at felis et netus et
                        malesuada fames ac turpis egestas. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</h3>
                    <div className="space-y-2">
                        <h2 className='text-[12px] font-semibold'>NAME *</h2>
                        <input className='border w-full' />
                    </div>
                    <div className="space-y-2">
                        <h2 className='text-[12px] font-semibold'>EMAIL *</h2>
                        <input className='border w-full' />
                    </div>
                    <div className="space-y-2">
                        <h2 className='text-[12px] font-semibold'>MESSAGE *</h2>
                        <Textarea />
                    </div>
                    <button className='text-[12px] bg-gray-500 text-white py-1 px-3 font-medium'>SUBMIT FORM</button>
                </div>
                <div className="space-y-8 mb-8">
                    <div className="p-4 border space-y-4">
                        <h2 className='text-center font-medium'>About me</h2>
                        <img src='https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/photography_2.jpg' />
                        <p className='text-sm text-gray-700'>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>
                        <div className="flex justify-center ">
                            <img className='w-40' src='https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/signature.png' />
                        </div>
                    </div>
                    <div className="bg-neutral-800 text-white px-6 py-8 flex justify-center items-center flex-col gap-3">
                        <h2 className='text-sm font-medium'>SUBSCRIBE TO MY NEWSLETTER</h2>
                        <input className='bg-white py-1 placeholder:text-center w-full placeholder:text-gray-400 placeholder:text-sm' placeholder='Enter your Email' />
                        <button className='bg-gray-400 w-full font-medium text-sm py-1'>Subscribe</button>
                    </div>
                    <div className="border flex flex-col justify-center items-center p-8 gap-3">
                        <h2 className='text-[12px] font-medium'>FOLLOW ME ON</h2>
                        <div className="flex justify-center items-center gap-2 ">

                            {logos.map((logo, index) => (
                                <div key={index} className="">
                                    {logo}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Lorem