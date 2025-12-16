import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Facebook, Instagram, Option, OptionIcon, Search, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaPinterest } from 'react-icons/fa'

const AboutMe = () => {
    const logos = [
        <Facebook size={18} />,
        , <Instagram size={18} />
        , <FaPinterest size={18} />
        , <Twitter size={18} />
    ]
    const categories = [
        { id: 1, name: "Art", slug: "art" },
        { id: 2, name: "Food", slug: "food" },
        { id: 3, name: "Lifestyle", slug: "lifestyle" },
        { id: 4, name: "Movie", slug: "movie" },
        { id: 5, name: "Music", slug: "music" },
        { id: 6, name: "Top", slug: "top" },
        { id: 7, name: "Travel", slug: "travel" }
    ];

    return (
        <div className='px-2 space-y-8'>
            <div className="p-4 border space-y-4">
                <h2 className='text-center'>About me</h2>
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
            <div className="">
                <img src='https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/themes/letsblog/images/banner300x250.png' />
            </div>
            <div className="p-6 border space-y-4">
                <h2 className='text-center text-[12px] '>CATEGORIES</h2>
                {categories.map((category)=>(
                    <div key={category.id} className=" mb-2 space-y-2">
                        <Link href='' className='text-sm'>{category.name}</Link>
                        <Separator />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default AboutMe