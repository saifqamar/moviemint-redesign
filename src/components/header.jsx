import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { HiBars2 } from "react-icons/hi2";
import { GrConnect } from "react-icons/gr";

import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import logo from '../images/logo.webp'


export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuToggle = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <div className="header bg-neutral-900 h-full text-mtext relative z-50">
            <div className={isMenuOpen ? "whole-sec absolute md:relative inset-0 top-0 h-screen bg-neutral-900 md:h-auto px-4 flex flex-col md:flex-row md:items-center md:gap-x-4 lg:mx-16" : "whole-sec absolute md:relative inset-0 h-20 bg-neutral-900 md:bg-transparent md:h-auto px-4 flex flex-col md:flex-row md:items-center md:gap-x-4 lg:mx-16"}>
                <div className="left py-4 flex flex-row items-center justify-between">
                    <div className="logo h-12 w-auto">
                        <Link to={'/'}><img className="w-auto h-full" src={logo} alt="logo" /></Link>
                    </div>
                    <div className="menuBtn flex items-center md:hidden">
                        <button className="px-2 rounded-2xl" onClick={menuToggle}>{isMenuOpen ?  <p className="text-white flex flex-row gap-x-2 items-center">Close <RxCross1 className="h-5 w-5" /></p> : <p className="text-white flex flex-row gap-x-2 items-center">Menu<HiBars2 className="h-7 w-7 " /></p>}</button>
                    </div>
                </div>

                <div className={isMenuOpen ? "right flex flex-col md:flex-row mt-20 md:mt-0 md:ml-8 h-full overflow-hidden justify-between md:items-center md:grow" : "right  flex flex-col md:flex-row mt-20 md:mt-0 md:ml-4 h-0 md:h-auto overflow-hidden justify-between md:items-center md:grow"}>
                    <div className="nav-lef flex flex-col md:flex-row h-full justify-start md:items-center md:gap-x-8">
                        <Link to="/marketpalce" className="text-3xl md:text-base  font-bold text-neutral-500 md:text-mtext hover:text-neutral-200 px-2 py-2">Marketplace</Link>
                        <Link to="/shorts" className="text-3xl md:text-base  font-bold text-neutral-500 md:text-mtext hover:text-neutral-200 px-2 py-2">Shorts</Link>
                        <Link to="/about" className="text-3xl md:text-base font-bold text-neutral-500 md:text-mtext hover:text-neutral-200 px-2 py-2">About</Link>
                        <HashLink exact to={"/#faq"} className="text-3xl md:text-base font-bold text-neutral-500 md:text-mtext hover:text-neutral-200 px-2 py-2">FAQs</HashLink>
                        

                    </div>

                    <div className="nav-right flex flex-col-reverse md:flex-row gap-y-3 md:gap-x-4 mb-3 md:mb-0 items-center">
                        <Link to={'/login'} className="w-full md:w-auto"><button  className="h-14 w-full bg-mgray rounded-2xl md:px-5">Login</button></Link>
                        <Link to={'/signup'} className="w-full md:w-auto"><button  className="h-14 w-full bg-m-Primary rounded-2xl text-black font-bold md:px-5 flex  flex-row gap-x-2 items-center justify-center"><GrConnect className="w-6 h-6"/> Connect</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}