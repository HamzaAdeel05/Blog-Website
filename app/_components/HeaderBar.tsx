'use client'

import React from 'react'
import DropDown from './DropDown'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

const HeaderBar = () => {
    const navItems = [
        {
            id: 1,
            label: 'HOME',
            hasDropdown: true,
            href: [
                { label: 'Fullwidth Slider', link: '/home/fullwidth-slider' },
                { label: '3 Columns Slider', link: '/home/3-columns-slider' },
                { label: 'Fixed Width Slider', link: '/home/fixed-width-slider' },
                { label: 'Fullwidth', link: '/home/fullwidth' },
                { label: 'List', link: '/home/list' },
                { label: 'Full Post + Grid Right Sidebar', link: '/home/full-post-grid-right' },
                { label: 'Full Post + Grid Left Sidebar', link: '/home/full-post-grid-left' },
                { label: 'Full Post + Grid Fullwidth', link: '/home/full-post-grid-fullwidth' },
                { label: 'Full Post + List', link: '/home/full-post-list' },
                { label: 'Right Sidebar', link: '/home/right-sidebar' },
                { label: 'Left Sidebar', link: '/home/left-sidebar' },
                { label: 'Grid 2 Columns', link: '/home/grid-2-columns' },
            ],
        },
        {
            id: 2,
            label: 'SINGLE POSTS',
            hasDropdown: true,
            href: [
                { label: 'Full Page Grid 1', link: '/single-posts/full-page-grid-1' },
                { label: 'Classic Single Post', link: '/single-posts/classic' },
                { label: 'Overlay Image Post', link: '/single-posts/overlay-image' },
                { label: 'Video Format Post', link: '/single-posts/video' },
                { label: 'Gallery Slider Post', link: '/single-posts/gallery-slider' },
                { label: 'No Sidebar Layout', link: '/single-posts/no-sidebar' },
            ],
        },
        {
            id: 3,
            label: 'PAGES',
            hasDropdown: true,
            href: [
                { label: 'Archive Page', link: '/pages/archive' },
                { label: 'Author Profile', link: '/pages/author-profile' },
                { label: 'Error 404 Page', link: '/pages/404' },
                { label: 'Search Results', link: '/pages/search-results' },
                { label: 'Coming Soon', link: '/pages/coming-soon' },
                { label: 'Maintenance Mode', link: '/pages/maintenance' },
            ],
        },
        { id: 4, label: 'CATEGORY', hasDropdown: false, href: '/categories/art' },
        { id: 5, label: 'ABOUT', hasDropdown: false, href: '/about' },
        { id: 6, label: 'CONTACT ME', hasDropdown: false, href: '/contact' },
        {
            id: 7,
            label: 'FEATURES',
            hasDropdown: true,
            href: [
                { label: 'Theme Support & Updates', link: '/features/theme-support-updates' },
                { label: 'Demo Content Import', link: '/features/demo-content-import' },
                { label: '20+ Slider and Blog Layouts', link: '/features/slider-blog-layouts' },
                { label: 'Flexible Single Post Options', link: '/features/flexible-single-post' },
                { label: 'Custom Sidebar', link: '/features/custom-sidebar' },
                { label: 'Theme Customizer', link: '/features/theme-customizer' },
                { label: 'Instant Search', link: '/features/instant-search' },
                { label: 'Side Menu', link: '/features/side-menu' },
                { label: 'Google Mobile Friendly', link: '/features/mobile-friendly' },
                { label: 'Theme Admin', link: '/features/theme-admin' },
                { label: 'Shortcodes', link: '/features/shortcodes' },
            ],
        },
    ]

    return (
        <nav className="relative h-[48px] bg-white">
            {/* top separator */}
            <Separator className="absolute top-0 w-full" />

            {/* nav items */}
            <div className="h-full flex justify-center items-center gap-8">
                {navItems.map((nav) => (
                    <React.Fragment key={nav.id}>
                        {nav.hasDropdown ? (
                            <DropDown label={nav.label} subItems={nav.href as []} />
                        ) : (
                            <Link
                                href={nav.href as string}
                                className="text-[12px] font-medium hover:text-[#BE9656]"
                            >
                                {nav.label}
                            </Link>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </nav>
    )
}

export default HeaderBar
