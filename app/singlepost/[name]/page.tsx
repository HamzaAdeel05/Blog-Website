import React from 'react'
import Link from 'next/link';
import { Share, Tags } from 'lucide-react';
import ArtFood from './_components/ArtFood';
import YouMight from './_components/YouMight';
import Comment from './_components/Comment';
import AboutMe from './_components/AboutMe';

type ParamsType = {
    params: {
        name: string;
    }
}
type TypePosts = {
    id: number,
    name: string,
    slug: string
}

const Home = async ({ params }: ParamsType) => {
    const { name } = await params;
    const Posts: TypePosts[] = [
        {
            id: 1,
            name: "TOP 10 INGREDIENTS",
            slug: "single",
        },
        {
            id: 2,
            name: "GOLDEN SNOW LAND",
            slug: "land"
        },
        {
            id: 3,
            name: "HUGE WATERFALL",
            slug: "waterfall"
        },
        {
            id: 4,
            name: "PLAYING SKATEBOARD",
            slug: "skateboard"
        },
    ]
    const buttons = [
        {
            id: 1,
            name: "Cooking",
            slug: "cooking"
        },
        {
            id: 2,
            name: "Food",
            slug: "food"
        },
        {
            id: 3,
            name: "Lifestyle",
            slug: "lifestyle"
        },
    ]
    const pageData = Posts.find(
        (post) => post.slug === name
    );

    if (!pageData) {
        return <h1>Page not found!</h1>;
    }
    return (
        <div className=''>
            <div>
                <div className='flex justify-center py-5 h-150'>
                    <img className='w-full h-full' src='https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/1.jpg' />
                </div>
                <div className='p-5 max-w-320 mx-auto'>
                    <div className="md:grid grid-cols-3 gap-8  ">
                        <div className="flex flex-col justify-center items-center col-span-2  space-y-6">
                            <div className="text-center">
                                <h3 className=' text-2xl text-gray-800'>{pageData.name}</h3>
                                <div className="items-center gap-4 grid grid-cols-3">
                                    <div className="border h-0 border-[#B38D51] "></div>
                                    <p className='text-[12px] text-[#B38D51]'>July 22,2015</p>
                                    <div className="border h-0 border-[#B38D51]"></div>
                                </div>
                            </div>
                            <div className="text-sm text-gray-900">
                                <h2>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor
                                    Aliquam et elit eu nunc rhoncus viverra quis at felis et netus et malesuada fames ac turpis egestas. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</h2>
                            </div>
                            <div className="">
                                <img className='w-full' src='https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/33dca3b1ecb01a7d-2012_WeAre-TheRhoads_oct_KinfolkVol5_10_o-960x640.jpg' />
                                <h2 className='text-[10px] text-center mt-2 text-gray-500'>Traveling around the world</h2>
                            </div>
                            <div className="space-y-4">
                                <p className='text-[13px]'>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue. Mauris elementum accumsan leo vel tempor</p>
                                <h2 className='text-gray-400 text-lg'>Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.</h2>
                                <h3 className='text-[13px]'>Aliquam et elit eu nunc rhoncus viverra quis at felis et netus et malesuada fames ac turpis egestas. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</h3>
                            </div>
                            <div className="flex justify-between items-center w-full py-5">
                                <div className="flex gap-2">
                                    <Tags size={15} />
                                    {buttons.map((b) => (
                                        <Link className='bg-gray-100 px-3 py-1 text-[10px]' key={b.id} href={`/categories/${b.slug}`} >{b.name}</Link>
                                    ))}
                                </div>
                                <div className="">
                                    <button className='flex gap-2 bg-gray-100 px-3 py-1 cursor-pointer items-center text-[10px]'><Share size={15} />Share</button>
                                </div>
                            </div>
                            <ArtFood />
                            <YouMight />
                            <Comment />
                        </div>
                        <div className="">
                            <AboutMe />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home