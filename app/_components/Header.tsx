import { Facebook, Instagram, Option, OptionIcon, Search, Twitter } from 'lucide-react'
import React from 'react'
import { FaPinterest } from 'react-icons/fa'
import { PiPinterestLogo } from 'react-icons/pi'
import HeaderBar from './HeaderBar'

const Header = () => {
    const logos = [
        <Facebook size={18} />,
        , <Instagram size={18} />
        , <FaPinterest size={18} />
        , <Twitter size={18} />
    ]
    return (
        <div>
            <div>
                <div className="py-4 lg:px-16 px-8 flex justify-between">
                    <div className="md:block hidden ">
                        <div className="flex justify-center items-center gap-2">

                            {logos.map((logo, index) => (
                                <div key={index} className="">
                                    {logo}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-70 w-20">
                        <img src='https://themes-themegoods.b-cdn.net/letsblog/demo/wp-content/themes/letsblog/images/logo@2x.png' />
                    </div>
                    <div className="flex">
                        <Search />
                        <OptionIcon />
                    </div>
                </div>
                <HeaderBar />
            </div>
        </div>
    )
}

export default Header