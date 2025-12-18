// "use client"
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
// import React, { useState } from 'react'

type Features = {
    params: {
        name: string
    }
}
type featuresArrayType = {
    id: number,
    title: string,
    slug: string,
    image1?:string,
    image2?:string,
}

const Features = async ({ params }: Features) => {
    // const [select,setSelected] = useState(false);
    const { name } = await params;
    const featuresArray: featuresArrayType[] = [
        { id: 1, title: "Theme Support & Updates", slug: "theme-support-updates",image1:"https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/08/Screen-Shot-2558-08-03-at-2.18.38-PM.png",image2:"https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/08/Screen-Shot-2558-08-03-at-2.18.38-PM.png" },
        { id: 2, title: "Demo Content Import", slug: "demo-content-import" ,image1:"https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/08/4.png" },
        { id: 3, title: "20+ Slider and Blog Layouts", slug: "20-plus-slider-and-blog-layouts", image1:"https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/08/Screen-Shot-2558-08-03-at-2.28.10-PM.png" , image2:"https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/08/Screen-Shot-2558-08-03-at-2.28.10-PM.png" },
        { id: 4, title: "Flexible Single Post Options", slug: "flexible-single-post-options ",image1:"https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/08/Screen-Shot-2558-08-03-at-2.35.57-PM.png" },
        { id: 5, title: "Custom Sidebar", slug: "custom-sidebar",image1:"https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/08/Screen-Shot-2558-06-08-at-5.51.05-PM-1024x662.png" },
        { id: 6, title: "Theme Customizer", slug: "theme-customizer" ,image1:"https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/08/Screen-Shot-2558-08-03-at-2.48.08-PM.png"},
        { id: 7, title: "Instant Search", slug: "instant-search",image1:"https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/08/Screen-Shot-2558-08-03-at-2.44.46-PM.png" },
        { id: 8, title: "Side Menu", slug: "side-menu" , image1:"https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/08/Screen-Shot-2558-08-03-at-2.53.52-PM.png"},
        { id: 9, title: "Google Mobile Friendly", slug: "google-mobile-friendly" , image1:"https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/08/Screen-Shot-2558-08-03-at-3.01.57-PM.png"},
        { id: 10, title: "Theme Admin", slug: "theme-admin",image1:"https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/uploads/2015/08/1.png" },
        { id: 11, title: "Shortcodes", slug: "shortcodes",image1:"" }
    ];
    const pageData = featuresArray.find(
        (feature) => feature.slug === name
    );

    if (!pageData) {
        return <h1>Page not found!</h1>;
    }else{
        // setSelected(true);
    }

    return (
        <div className='py-5'>
            <div className="flex flex-col justify-center items-center py-15 bg-gray-100 space-y-6">
                <h1 className='md:text-4xl text-xl '>{pageData.title}</h1>
                <div className="max-w-xl mx-auto space-y-5">
                    <Separator />
                    <h3 className='text-gray-400 text-[14px]'>WHAT MAKE THIS THEME BETTER</h3>
                </div>
            </div>
            <div>
                <div className="max-w-320 mx-auto py-7">
                    <div className="md:grid grid-cols-4 gap-8 px-5">
                        <div className="border px-4 py-6 space-y-4 h-fit">
                            <h2 className='text-center text-[12px]'>FEATUERS LIST</h2>
                            <div className="">
                                {featuresArray.map((feature) => (
                                    <div key={feature.id} className="py-2 space-y-1">
                                        <Link href={`/features/${feature.slug}`} className='text-sm '>{feature.title}</Link>
                                        <Separator />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-3 space-y-3">
                            <p className='text-sm'>When you purchased theme you get free theme support and updates. We are very focus to offer best support experience possible for you and you always doing that. We provide our own support portal and searchable theme documentation. Our support staffs usually answer all tickets within less than 24 hours.</p>
                            <img src={pageData.image1} />
                            <img className={pageData.image2} />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features