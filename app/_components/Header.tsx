'use client'

import React, { useEffect, useRef, useState } from 'react'
import HeaderBar from './HeaderBar'
import { Facebook, Instagram, Search, Twitter, OptionIcon } from 'lucide-react'
import { FaPinterest } from 'react-icons/fa'
import Link from 'next/link'

const Header = () => {
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScrollY.current && currentScroll > 120) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      lastScrollY.current = currentScroll
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const logos = [
    <Facebook size={18} />,
    <Instagram size={18} />,
    <FaPinterest size={18} />,
    <Twitter size={18} />,
  ]

  return (
    <div>
      {/* TOP HEADER (normal scroll) */}
      <div className="py-4 lg:px-16 px-8 flex justify-between items-center">
        <div className="md:block hidden">
          <div className="flex items-center gap-2">
            {logos.map((logo, index) => (
              <div key={index}>{logo}</div>
            ))}
          </div>
        </div>

        <div className="lg:w-70 w-20">
          <Link href="/">
            <img
              src="https://res.cloudinary.com/ds5xe7ojy/image/upload/v1766138933/logo_2x_vx4mve.png"
              alt="logo"
            />
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <Search />
          <OptionIcon />
        </div>
      </div>

      {/* ✅ STICKY CONTAINER (NO TRANSFORM HERE) */}
      <div className="sticky top-0 z-40 bg-white">
        {/* ✅ ANIMATED CHILD */}
        <div
          className={`transition-transform duration-300 ease-in-out ${
            hidden ? '-translate-y-full' : 'translate-y-0'
          }`}
        >
          <HeaderBar />
        </div>
      </div>
    </div>
  )
}

export default Header
