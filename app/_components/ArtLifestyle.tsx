import { ChevronsRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ArtLifestyle = () => {
    const blogPosts = [
        {
            id: 1,
            title: "FASHION MODEL SHOOT",
            date: "July 22, 2015",
            excerpt: "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam...",
            image: "https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/photography_2-700x529.jpg",
            linkText: "READ MORE"
        },
        {
            id: 2,
            title: "GOLDEN SNOW LAND",
            date: "July 22, 2015",
            excerpt: "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam...",
            image: "https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/snow-winter-fallen-trees-700x529.jpg",
            linkText: "READ MORE"
        },
        {
            id: 3,
            title: "FAMILY COMES FIRST",
            date: "July 22, 2015",
            excerpt: "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam...",
            image: "https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/02-700x529.jpg",
            linkText: "READ MORE"
        },
        {
            id: 4,
            title: "TRAVEL THE WORLD",
            date: "July 22, 2015",
            excerpt: "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam...",
            image: "https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/landscape-nature-water-rocks-700x529.jpg",
            linkText: "READ MORE"
        },
        {
            id: 5,
            title: "CITY CENTER BRIDGE",
            date: "July 22, 2015",
            excerpt: "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam...",
            image: "https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/15794918936_855690cb09_b1-700x529.jpg",
            linkText: "READ MORE"
        },
        {
            id: 6,
            title: "BIG CITY LIGHT",
            date: "July 22, 2015",
            excerpt: "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam...",
            image: "https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/DeathtoStock_NYC11-Custom1-700x529.jpg",
            linkText: "READ MORE"
        }
    ];

    return (
        <div className='w-full '>
            <div className="w-full space-y-4">
                <div className="flex justify-center items-center  gap-5">
                    <div className="w-full border h-0 border-border "></div>
                    <p className=' text-[12px]'>Art/Lifestyle</p>
                    <div className="w-full border h-0 border-border"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {blogPosts.map((blog) => (
                        <div key={blog.id} className='space-y-3'>
                            <img src={blog.image} alt='d' />
                            <div className="flex justify-center items-center">
                                <div className=" w-fit  ">
                                    <h2>{blog.title}</h2>
                                    <div className="flex justify-center items-center w-full gap-4">
                                        <div className="w-full border h-0 border-[#B38D51] "></div>
                                        <p className=' text-[12px] whitespace-nowrap text-[#B38D51]'>July 22,2015</p>
                                        <div className="w-full border h-0 border-[#B38D51]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className='text-[13px]'>{blog.excerpt}</p>
                                <Link href='/' className='text-[12px] text-[#B38D51]' >Read More</Link>
                            </div>

                        </div>
                    ))}


                </div>
                <div className="flex justify-end items-center">
                    <Link href='/' className='flex items-center text-[12px] font-medium'>
                     Older posts <ChevronsRight size={15}/></Link>
                     
                </div>
            </div>
        </div>
    )
}

export default ArtLifestyle