import CategorySlider from "./categorySlider";
import Top5Slider from "./top5Slider";

export default function Categories(){
    return(
        <div className="top-5 mt-28 w-full">
            <div className="whole-top5-sec w-full">
                <div className="head-sec px-4 w-full flex flex-row justify-between mb-5">
                    <h1 className="text-mtext  text-3xl font-bold ">Categories</h1>
                    <a href="" className="py-2 text-mtext bg-mgray rounded-xl md:px-5">see all</a>
                </div>
                <div className="category-cards">
                    <CategorySlider />
                </div>
            </div>
        </div>
    )
}