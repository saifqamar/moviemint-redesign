import AboutHero from "../components/aboutHero";
import Header from "../components/header";
import ManagementDet from "../components/managementDet";
import Footer from "../components/footer";
import ProductTrailer from "../components/trailer";
import LeadCard from "../components/leadCard";
import FAQs from "../components/FAQs";
import { useParams } from "react-router-dom";
import productData from "../data/movieData";
import { Link } from "react-router-dom";


export default function ProductDetailsPage(){
    let movieUrl = useParams();
    const movieDet = productData.find(movie => movie['url'].includes(movieUrl.url)); 
    console.log('movieDet ==->', movieDet.trailer)
    return(
        <div className="productDet-page">
            <Header />
            <ProductTrailer trailer={movieDet.trailer} />
            <div className="all-details-hsec mt-20">
                <div className="all-det mx-6 lg:mx-20 flex max-[400px]:flex-col flex-row gap-x-4 gap-y-4">
                    <div className="poster mb-5 max-[400px]:hidden w-[250px] md:w-auto rounded-lg max-w-[490px] overflow-hidden">
                        <img className="w-full h-full" src={movieDet.imageUrl} alt="poster" />
                    </div>
                    <div className="det  text-mtext w-full"> 
                        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl flex flex-row justify-between w-full gap-y-4">{movieDet.title} <span className="flex flex-row items-center text-sm gap-x-2 lg:gap-x-4">
                            {movieDet.genre.map((gen) => (
                                <p className="text-grayText py-1 max-[400px]:px-2 px-4 border border-grayText rounded-3xl">{gen}</p>
                            ))}
                        </span></h1>
                        <Link to={`/productionhouse/${movieDet.uploader}`} className="publisher text-grayText hover:text-mtext flex flex-row gap-x-4 mt-2 ">
                            <img className=" w-8 h-8 object-cover rounded-full overflow-hidden" src="https://staging.moviemint.net/uploads/creator/0x8df6279ad337e6765c7b534df98076d8c5e4b6f0/0x8df6279ad337e6765c7b534df98076d8c5e4b6f01704978508876.jpeg" alt="" />
                            <p className="font-bold  border-b-2 border-grayText">{movieDet.uploader}</p>
                        </Link>
                        <p className="mt-4 text-grayText max-[400px]:text-sm">{movieDet.description}
                        </p>


                        <div className="sm-dt mt-4">
                            <p className="text-base py-3 pl-2 border-t border-mgray text-mtext ">Release Year : <span className="text-grayText font-bold"> {movieDet.releaseYear}</span></p>
                            <p className="text-base py-3 pl-2 border-t border-mgray text-mtext ">Price : <span className="text-grayText font-bold"> ${movieDet.price} </span></p>
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