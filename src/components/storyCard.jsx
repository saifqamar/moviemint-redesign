import React from "react";
import HoverVideoPlayer from 'react-hover-video-player';



export default function StoryCard(){
    return(
        <div className="w-12/12h-auto rounded-[12px]">
            <div className="fcard-img h-auto w-auto md:h-auto rounded-[12px]  overflow-hidden">
                {/* <img className="w-full h-full object-cover" src={'https://staging.moviemint.net/uploads/creator/0x5f4b470ae07e7780c03cb73256c5aebd69fa7e77/0x5f4b470ae07e7780c03cb73256c5aebd69fa7e771704977213953.jpeg'} alt="" /> */}
                {/* <HoverVideoPlayer
                    videoSrc="https://staging.moviemint.net/uploads/creator/0x18f72bcc4a91f33e6c0b979d17f35aec6b489367/0x18f72bcc4a91f33e6c0b979d17f35aec6b4893671706177828244.mp4"
                    loadingOverlay={
                        <div className="loading-overlay">
                          <div className="loading-spinner animate-spin" />
                        </div>
                      }
                /> */}
                <video className="story-video rounded-b-[16px] w-full h-full object-cover md:object-fill"  type="video/mp4" autoPlay muted play loop   >
                    <source src="https://staging.moviemint.net/uploads/creator/0x18f72bcc4a91f33e6c0b979d17f35aec6b489367/0x18f72bcc4a91f33e6c0b979d17f35aec6b4893671706177828244.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="fcrd-details text-white py-4">
                <p className="author text-grayText font-medium text-sm mb-1">by <span>Warner Bros</span></p>
                <p className="title text-mtext font-semibold text-base">Seventh Prophecy</p>
               
            </div>
        </div>
    )
}