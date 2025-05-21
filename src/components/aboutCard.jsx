import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import aboutPic from '../images/managementPic.jpg'


export default function AboutCard(){
    return(
        <div className="w-12/12 bg-crdGray h-auto  min-w-[320px] lg:min-w-[280px] rounded-[12px]">
            <div className="fcard-img h-[300px] w-auto sm:h-[500px] md:h-auto rounded-[12px] sm:max-h-[400px] md:max-h-[350px] min-h-[300px] overflow-hidden">
                <img className="w-full h-full object-cover" src={aboutPic} alt="" />
            </div>
            <div className="fcrd-details text-white px-4 py-4">
                <p className="title text-mtext font-semibold text-xl flex justify-between items-center mb-2">Seventh Prophecy  <p className="author text-grayText font-medium text-sm mb-1 flex gap-x-2"><FaLinkedin className="w-5 h-5 hover:text-m-Primary hover:cursor-pointer" /> <FaInstagram className="w-5 h-5 hover:text-m-Primary hover:cursor-pointer" /></p></p>
                <p className="title text-mtext font-semibold text-base flex items-center gap-x-2 mb-3">Designation: <p className="author text-grayText font-medium text-sm">F B I <span>Movies</span></p></p>
                <p className="title text-grayText font-normal text-base flex ">Emma just went through a painful divorce from her high school sweetheart. 
                    She drowned herself in work for years, only realizing too late how unhappy she was. 
                    Now newly single, Emma is trying to rebuild her life.
                </p>
            </div>
        </div>
    )
}