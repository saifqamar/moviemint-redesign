import React from "react";
import HoverVideoPlayer from 'react-hover-video-player';
import storyVideo from '../assets/videos/2.mp4'


export default function StoryCard(){
    return(
        <div className="w-12/12h-auto rounded-[12px]">
            <div className="fcard-img h-auto w-auto md:h-auto rounded-[12px]  overflow-hidden">
               
                <video className="story-video rounded-b-[16px] w-full h-full object-cover md:object-fill"  type="video/mp4" autoPlay muted play loop   >
                    <source src={storyVideo} type="video/mp4" />
                </video>
            </div>
            <div className="fcrd-details text-white py-4">
                <p className="author text-grayText font-medium text-sm mb-1">by <span>Warner Bros</span></p>
                <p className="title text-mtext font-semibold text-base">Seventh Prophecy</p>
               
            </div>
        </div>
    )
}