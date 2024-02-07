import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";


const Faq = (props) =>{
    const [isOpen, setIsOpen] = useState(false);
    console.log(props.id)

    // const content = document.getElementsByClassName('c-content');

    const collapse = () => {
        const open = setIsOpen(!isOpen); 

    }
    return(
        <div className="faq border-t border-mgray text-mtext w-full">
            <div onClick={collapse} className="py-8 flex justify-between items-center faq-body mx-4">
                <h3 className="text-2xl font-medium">What is B2B branding?</h3>
                <p className=""><FaPlus /></p>
                {/* <FontAwesomeIcon className="" icon={icon({name: 'plus', style: 'solid', size:'2x'})} /> */}
            </div>

            <div className="c-content">
                <div className={isOpen ? "c-inner mb-3.5 h-auto overflow-hidden mx-4": "c-inner h-0 overflow-hidden"}>
                    <p className="text-xl">B2B branding is a process managed by agencies like ours, aiming to establish unique, resonant brands within the business-to-business market. It's about setting your product or service apart from competitors, and creating a strong reputation that appeals specifically to other businesses</p>
                </div>

            </div>

        </div>
    )
}

export default Faq;