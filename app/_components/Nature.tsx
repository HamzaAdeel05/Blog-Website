import Link from 'next/link'
import React from 'react'
import ArtLifestyle from './ArtLifestyle'
import AboutMe from './AboutMe'

const Nature = () => {
    return (
        <div className='p-5 '>
            <div className="md:grid grid-cols-3 gap-8  ">

                <div className="flex flex-col justify-center items-center col-span-2  space-y-6">
                    <div className="text-center">
                        <h3 className=' text-2xl text-gray-800'>Beauty of Nature</h3>
                        <div className="items-center gap-4 grid grid-cols-3">
                            <div className="border h-0 border-[#B38D51] "></div>
                            <p className='text-[12px] text-[#B38D51]'>July 22,2015</p>
                            <div className="border h-0 border-[#B38D51]"></div>
                        </div>
                    </div>
                    <div className="">
                        <img className='w-full' src='https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/07/33dca3b1ecb01a7d-2012_WeAre-TheRhoads_oct_KinfolkVol5_10_o-960x640.jpg' />
                    </div>
                    <div className="space-y-4">
                        <p className='text-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quae dolorum ducimus quasi id,  quo voluptatibus corporis accusamus perspiciatis
                            quaerat, in odit provident. Tempora adipisci sequi,
                            recusandae aspernatur numquam quos nesciunt quo et, accusamus maxime eum?</p>
                        <Link href='/' className='text-[14px] text-[#B38D51]'>Read More</Link>
                    </div>
                    <div className="">
                        <ArtLifestyle />
                    </div>
                </div>
                <div className="">
                    <AboutMe />
                </div>
            </div>
        </div>
    )
}

export default Nature