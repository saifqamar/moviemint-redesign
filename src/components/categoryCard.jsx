import React from "react";
import fantasyImg from '../images/fantasy.jpg'


export default function CategoryCard(){
    return(
        <div className="w-12/12 bg-crdGray h-auto max-w-[370px] max-h-[550px] min-w-[330px] rounded-[12px]">
            <div className="fcard-img h-[300px] w-auto sm:h-[300px] md:h-auto rounded-[12px] max-h-[300px] min-h-[300px] overflow-hidden">
                <img className="w-full h-full object-cover" src={fantasyImg} alt="" />
            </div>
            <div className="fcrd-details text-white px-4 py-4">
                <p className="title text-mtext font-semibold text-xl flex justify-between">Seventh Prophecy  <p className="author text-grayText font-medium text-sm mb-1">200 <span>Movies</span></p></p>

            </div>
        </div>
    )
}