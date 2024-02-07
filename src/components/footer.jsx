import React from "react";


export default function Footer(){
    return(
        <div className="px-6 lg:px-20 text-mtext">
            <div className="whole-footer mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
                <div className="mb-6 lg:mb-6">
                    {/* <p className="font-bold text-lg pb-7">W.</p> */}
                    <a href="" className=""><img className="w-24 h-24 mb-6" src="https://moviemint.net/static/media/logo.c8743748796ba7fefd35.png" alt="logo" /></a>
                    <div className="foot-wrap w-full flex flex-col gap-y-6 lg:flex-row ">
                        <div className="footer-grid flex flex-row justify-between ">
                            <ul className="foot-menu text-base font-semibold w-5/12">
                                {/* <li className="mb-2.5 w-24 h-24"><a href=""><img src="https://moviemint.net/static/media/logo.c8743748796ba7fefd35.png" alt="logo" /></a></li> */}
                                <li><a href="" className="font-normal">MovieMint liberates Filmmakers and fans through decentralized funding. Our Blockchain platform seamlessly connects Independent Creators and Passionate Supporters.</a></li>
                            </ul>

                            <ul className="foot-menu py-0 text-base font-semibold">
                                <li className="mb-2"><a href="">Home</a></li>
                                <li className="mb-2"><a href="">About Us</a></li>
                                <li className="mb-2"><a href="">Movies</a></li>
                                <li className=""><a href="">FAQs</a></li>
                            </ul>

                            <ul className="foot-menu py-0 text-base font-semibold">
                                <li className="mb-2.5"><a href="">Directory</a></li>
                                <li className="mb-2.5"><a href="">Collections</a></li>
                                <li><a href="">Contact us</a></li>
                            </ul>

                            <ul className="foot-menu text-base font-semibold">
                                <li className="mb-2.5"><a href="">FAQs</a></li>
                                <li className="mb-2.5"><a href="" className="mb-2.5">About Us</a></li>
                                <li><a href="" className="">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="foot-bottom border-1 boder-dotted pt-6 mb-10 flex flex-col lg:flex-row lg:justify-between">
                    <div className="flex text-sm py-1 font- gap-x-6">
                        <p>All Rights reserved for moviemint.net - 2024</p>
                        
                    </div>
                    {/* <div className="flex text-sm py-1 gap-x-6 gap-y-2 flex-wrap">
                        <p className="font-bold">Connect:</p>
                        <p>Instagram</p>
                        <p>LinkedIn</p>
                        <p>Twitter</p>
                        <p>Twitter</p>
                        <p>Twitter</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}