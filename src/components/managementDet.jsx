import CategoryCard from "./categoryCard";
import AboutCard from "./aboutCard";

export default function ManagementDet(props){
    return(
        <div className="top-5 mt-28 w-full">
            <div className="whole-top5-sec px-4 lg:px-20 w-full">
                <div className="head-sec w-full flex flex-col lg:flex-row justify-between mb-5 gap-x-4 gap-y-4">
                    <h1 className="text-mtext text-3xl font-bold ">Management Team <span className="text-m-Primary text-sm font-normal">Driven By Doers</span></h1>
                    <h1 className="text-mtext text-lg font-normal lg:w-4/6 2xl:w-3/6">Our leadership team combines rare expertise across filmmaking, technology, 
                    business and regulation to turn bold ambitions into executed realities. 
                    Meet the guiding forces at the helm.</h1>
                    {/* <a href="" className="py-2 text-mtext bg-mgray rounded-xl md:px-5">see all</a> */}
                </div>
                <div className="about-cards grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-x-4 gap-y-6">
                    <AboutCard />
                    <AboutCard />
                    <AboutCard />
                    <AboutCard />
                    <AboutCard />
                    <AboutCard />
                </div>
            </div>
        </div>
    )
}