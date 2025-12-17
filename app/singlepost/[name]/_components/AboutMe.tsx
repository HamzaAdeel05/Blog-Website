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
    const tags = [
        "BRIDGE",
        "CITY",
        "COOKING",
        "FAMILY",
        "FOOD",
        "LIFESTYLE",
        "MODEL",
        "NATURE",
        "PHOTOGRAPHY",
        "PORTRAIT",
        "SPORT",
        "TRAVEL"
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
            <div className="border py-6 px-3 space-y-3">
                <h2 className='text-sm font-medium text-center '> TAGS</h2>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] px-2 py-1 border bg-gray-100 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default AboutMe