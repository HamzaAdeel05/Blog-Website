import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const recent = [
        "BEAUTY OF NATURE", "FASHION MODEL SHOOT", "GOLDEN SNOW LAND"
    ]
    const popular = [
        "TOP 10 INGREDIENTS", "FAMILY COMES FIRST", "GOLDEN SNOW LAND"
    ]
    const link = [
        "Home" , "Lifestyle" , "About" , "Contact me"
    ]
    return (
        <div className='w-full bg-neutral-800'>
            <div className="max-w-320 mx-auto">
                <div className=" lg:flex p-10 gap-10 ">
                    <div className="md:grid grid-cols-2  w-full">

                        <div className="w-30">
                            <img src='https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/themes/letsblog/images/logo@2x_white.png' />
                        </div>
                        <div className="bg-neutral-800 text-white px-6 py-8 flex justify-center items-center flex-col gap-3">
                            <h2 className='text-sm font-medium'>SUBSCRIBE TO MY NEWSLETTER</h2>
                            <input className='bg-white py-1 placeholder:text-center w-full placeholder:text-gray-400 placeholder:text-sm' placeholder='Enter your Email' />
                            <button className='bg-gray-400 w-full font-medium text-sm py-1'>Subscribe</button>
                        </div>
                    </div>
                    <div className="md:grid grid-cols-2 w-full">
                        <div className="text-[12px] space-y-3">
                            <h2 className='text-gray-400'>RECENT POSTS</h2>
                            {recent.map((item, index) => (
                                <div key={index} className="space-y-1">
                                    <h2 className='font-medium text-white'>{item}</h2>
                                    <p className='text-gray-500'>July 22 , 2015</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-[12px] space-y-3">
                            <h2 className='text-gray-400'>POPULAR POSTS</h2>
                            {popular.map((item, index) => (
                                <div key={index} className="space-y-1">
                                    <h2 className='font-medium text-white'>{item}</h2>
                                    <p className='text-gray-500'>July 22 , 2015</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Separator className='bg-gray-500' />
                <div className="flex px-10 py-5 text-[11px] md:flex-row flex-col-reverse md:justify-between">
                    <h3 className='text-gray-400'>© Copyright LetsBlog Theme Demo - Theme by ThemeGoods</h3>
                    <div className="text-white space-x-3 ">
                    {link.map((link,index)=>(
                        <Link key={index} href='' >{link}</Link>
                    ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer