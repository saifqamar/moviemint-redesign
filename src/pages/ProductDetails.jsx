import AboutHero from "../components/aboutHero";
import Header from "../components/header";
import ManagementDet from "../components/managementDet";
import Footer from "../components/footer";
import ProductTrailer from "../components/trailer";
import LeadCard from "../components/leadCard";
import FAQs from "../components/FAQs";

export default function ProductDetailsPage(){
    return(
        <div className="productDet-page">
            <Header />
            <ProductTrailer />
            <div className="all-details-hsec mt-20">
                <div className="all-det mx-6 lg:mx-20 flex max-[400px]:flex-col flex-row gap-x-4 gap-y-4">
                    <div className="poster mb-5 max-[400px]:hidden w-[250px] md:w-auto rounded-lg max-w-[490px] overflow-hidden">
                        <img className="w-full h-full" src="https://staging.moviemint.net/uploads/creator/0x8df6279ad337e6765c7b534df98076d8c5e4b6f0/0x8df6279ad337e6765c7b534df98076d8c5e4b6f01704978508876.jpeg" alt="poster" />
                    </div>
                    <div className="det  text-mtext w-full"> 
                        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl flex flex-row justify-between w-full gap-y-4">Top Gun: Maverick <span className="flex flex-row items-center text-sm gap-x-2 lg:gap-x-4"><p className="text-grayText py-1 max-[400px]:px-2 px-4 border border-grayText rounded-3xl">action</p> <p className="text-grayText py-1 max-[400px]:px-2 px-4 border border-grayText rounded-3xl">horror</p></span></h1>
                        <a href="" className="publisher text-grayText hover:text-mtext flex flex-row gap-x-4 mt-2 ">
                            <img className=" w-8 h-8 object-cover rounded-full overflow-hidden" src="https://staging.moviemint.net/uploads/creator/0x8df6279ad337e6765c7b534df98076d8c5e4b6f0/0x8df6279ad337e6765c7b534df98076d8c5e4b6f01704978508876.jpeg" alt="" />
                            <p className="font-bold  border-b-2 border-grayText">Warner Bros</p>
                        </a>
                        <p className="mt-4 text-grayText max-[400px]:text-sm">After thirty years, Maverick is still pushing the envelope as a top naval aviator,
                            but must confront ghosts of his past when he leads TOP GUN's elite graduates 
                            on a mission that demands the ultimate sacrifice from those chosen to fly it.
                        </p>


                        <div className="sm-dt mt-4">
                            <p className="text-base py-3 pl-2 border-t border-mgray text-mtext ">Production Stage : <span className="text-grayText font-bold"> Final</span></p>
                            <p className="text-base py-3 pl-2 border-t border-mgray text-mtext ">Production Stage : <span className="text-grayText font-bold"> Final</span></p>
                            <p className="text-base py-3 pl-2 border-t border-mgray text-mtext ">Production Stage : <span className="text-grayText font-bold"> Final</span></p>
                            <p className="text-base py-3 pl-2 border-t border-mgray text-mtext ">Production Stage : <span className="text-grayText font-bold"> Final</span></p>
                            <p className="text-base py-3 pl-2 border-t border-mgray text-mtext ">Production Stage : <span className="text-grayText font-bold"> Final</span></p>
                            <p className="text-base py-3 pl-2 border-t border-mgray text-mtext ">Production Stage : <span className="text-grayText font-bold"> Final</span></p>
                            <p className="text-base py-3 pl-2 border-t border-mgray text-mtext ">Production Stage : <span className="text-grayText font-bold"> Final</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Cast mx-4 mt-12 lg:mt-28 lg:mx-20">
                <h1 className="text-mtext text-3xl font-bold mb-4 ">Cast</h1>
                <div className="all-leads flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
                    <LeadCard />
                    <LeadCard />
                    <LeadCard />
                    <LeadCard />
                </div>
            </div>

            <div className="Cast mx-4 mt-12 lg:mt-28 lg:mx-20">
                <h1 className="text-mtext text-3xl font-bold mb-4 ">Our Crew</h1>
                <div className="all-leads flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
                    <LeadCard />
                    <LeadCard />
                    <LeadCard />
                    <LeadCard />
                </div>
            </div>

            <FAQs />
            
            <Footer />
        </div>
    )
}