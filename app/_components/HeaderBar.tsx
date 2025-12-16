import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowDownNarrowWideIcon, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const HeaderBar = () => {
    const navItems = [
        {
            id: 1,
            label: "HOME",
            href: "/",
            hasDropdown: true,
        },
        {
            id: 2,
            label: "SINGLE POSTS",
            href: "/single-posts",
            hasDropdown: true,
        },
        {
            id: 3,
            label: "PAGES",
            href: "/pages",
            hasDropdown: true,
        },
        {
            id: 4,
            label: "CATEGORY",
            href: "/category",
            hasDropdown: false,
        },
        {
            id: 5,
            label: "ABOUT",
            href: "/about",
            hasDropdown: false,
        },
        {
            id: 6,
            label: "CONTACT ME",
            href: "/contact",
            hasDropdown: false,
        },
        {
            id: 7,
            label: "FEATURES",
            href: "/features",
            hasDropdown: true,
        },
    ];
    return (
        <div className='w-full space-y-4 md:block hidden'>
            <Separator className='' />
            <div className="flex justify-center gap-8">
                {navItems.map((item) => (
                    <div key={item.id} className="flex gap-1 items-center">

                        <Link key={item.id} href={item.href} className='text-[12px]'>{item.label}</Link>
                        {item.hasDropdown && (
                            <ChevronDown size={15}/>
                        )}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default HeaderBar