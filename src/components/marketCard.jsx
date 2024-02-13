import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function MarketCard(props){
    return(
        <Link to={`/${props.url}`}>
        <div className="w-12/12 bg-crdGray h-auto  min-w-[320px] lg:min-w-[250px] rounded-[12px]">
            <div className="fcard-img h-[300px] w-auto sm:h-[500px] md:h-auto rounded-[12px] sm:max-h-[400px] md:max-h-[350px] min-h-[300px] overflow-hidden">
                <img className="w-full h-full object-cover" src={props.image} alt="" />
            </div>
            <div className="fcrd-details text-white px-4 py-4">
                <p className="author text-grayText font-medium text-sm mb-1">by <Link to={`/productionhouse/${props.user}`}><span className="hover:text-m-Primary">{props.user}</span> </Link></p>
                <p className="title text-mtext font-semibold text-base mb-2">{props.title}</p>
                <div className="etc flex flex-row justify-between">
                    <div className="price w-1/2 ">
                        <p className="text-grayText text-sm font-medium mb-1">price</p>
                        <h1 className="text-xl lg:text-xl text-mtext font-bold">${props.price}</h1>
                    </div>
                    <div className="shares w-1/2 ">
                        <p className="text-grayText text-sm font-medium mb-1">shares</p>
                        <h1 className="amount text-xl lg:text-xl text-mtext font-bold">{props.shares}</h1>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}