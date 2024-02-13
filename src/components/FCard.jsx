import React from "react";
import { Link } from "react-router-dom";


export default function FCard(props){
    return(
        <Link to={`${props.url}`} >
        <div className="w-12/12 bg-crdGray h-auto max-w-[370px] max-h-[550px] min-w-[330px] min-h-[500px] rounded-[12px]">
            <div className="fcard-img h-[380px] w-auto sm:h-[380px] md:h-auto rounded-[12px] max-h-[400px] min-h-[380px] overflow-hidden">
                <img className="w-full h-full object-cover" src={props.image} alt="" />
            </div>
            <div className="fcrd-details text-white px-4 py-4">
                <Link to={`/${props.user}`}><p className="author text-grayText font-medium text-sm mb-1">by <span className="hover:text-m-Primary">{props.user}</span></p></Link>
                <p className="title text-mtext font-semibold text-xl mb-4">{props.title}</p>
                <div className="etc flex flex-row justify-between">
                    <div className="price w-1/2 ">
                        <p className="text-grayText text-sm font-medium mb-1">price</p>
                        <h1 className="text-xl lg:text-2xl text-mtext font-bold">${props.price}</h1>
                    </div>
                    <div className="shares w-1/2 ">
                        <p className="text-grayText text-sm font-medium mb-1">shares</p>
                        <h1 className="amount text-xl lg:text-2xl text-mtext font-bold">{props.shares}</h1>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}