import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function MarketCard(){
    return(
        <div className="w-12/12 bg-crdGray h-auto  min-w-[320px] lg:min-w-[250px] rounded-[12px]">
            <div className="fcard-img h-[300px] w-auto sm:h-[500px] md:h-auto rounded-[12px] sm:max-h-[400px] md:max-h-[350px] min-h-[300px] overflow-hidden">
                <img className="w-full h-full object-cover" src={'https://staging.moviemint.net/uploads/creator/0x5f4b470ae07e7780c03cb73256c5aebd69fa7e77/0x5f4b470ae07e7780c03cb73256c5aebd69fa7e771704977213953.jpeg'} alt="" />
            </div>
            <div className="fcrd-details text-white px-4 py-4">
                <p className="author text-grayText font-medium text-sm mb-1">by <span>Warner Bros</span></p>
                <p className="title text-mtext font-semibold text-base mb-2">Seventh Prophecy</p>
                <div className="etc flex flex-row justify-between">
                    <div className="price w-1/2 ">
                        <p className="text-grayText text-sm font-medium mb-1">price</p>
                        <h1 className="text-xl lg:text-xl text-mtext font-bold">$30</h1>
                    </div>
                    <div className="shares w-1/2 ">
                        <p className="text-grayText text-sm font-medium mb-1">shares</p>
                        <h1 className="amount text-xl lg:text-xl text-mtext font-bold">123,000</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}