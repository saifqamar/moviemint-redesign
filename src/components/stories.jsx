import CategorySlider from "./categorySlider";
import StoryCard from "./storyCard";
import Top5Slider from "./top5Slider";

export default function Stories(){
    
    return(
        <div className="top-5 mt-28 w-full px-4">
            <div className="whole-top5-sec w-full">
                <div className="head-sec  w-full flex flex-row justify-between mb-5">
                    <h1 className="text-mtext  text-3xl font-bold ">Stories</h1>
                    <a href="" className="py-2 text-mtext bg-mgray rounded-xl md:px-5">see all</a>
                </div>
                <div className="story-cards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 xl:grid-cols-6 gap-x-4 gap-y-6">
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                </div>
            </div>
        </div>
    )
}