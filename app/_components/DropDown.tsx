import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';
type LinksType = {
    label: string;
    link: string;
}[]
const DropDown = ({ subItems, label }: {label: string, subItems?: LinksType }) => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <DropdownMenu open={openMenu} onOpenChange={setOpenMenu}>
            <DropdownMenuTrigger asChild>
                <button onMouseEnter={() => setOpenMenu(true)} onMouseLeave={() => setOpenMenu(false)} className='py-1 px-2 cursor-pointer '>{label}</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={`w-56 -mt-1`} align="start" onMouseEnter={() => setOpenMenu(true)} onMouseLeave={() => setOpenMenu(false)}>
                <DropdownMenuGroup>
                    {typeof subItems !== 'string' && subItems?.map((item) => (
                        <DropdownMenuItem key={item.label} >
                            <Link href={item.link}>
                                {item.label}
                            </Link>
                        </DropdownMenuItem>
                    ))
                    }
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropDown