import React, { useState } from "react";
import Faq from "./faq";
import faqImg from '../images/faqimg.png'


const FAQs = () => {
    


    return(
        <div className="column container">
            <div id="faq" className="b2b-body mt-28 pb-16 mx-6 lg:mx-20">
                <h1 className="text-3xl font-bold pb-8 max-w-4xl text-mtext">FAQs</h1>
                <div className="all w-full flex flex-row gap-x-4 items-center">
                    <div className="all-faqs w-full">
                        <Faq id={0}/>
                        <Faq id={1}/>
                        <Faq id={2}/>
                    </div>
                    <div className="faq-img hidden lg:block lg:w-2/6 ">
                        <img className="w-full h-full" src={faqImg} alt="faqimg" />
                    </div>
                </div>
                
                
                {/* <p className="pb-6 text-2xl max-w-4xl">
                    {props.para1}
                </p>

                <p className="pb-10 text-2xl max-w-4xl">
                    {props.para2}
                </p> */}
            </div>
        </div>
    )
}


export default FAQs;