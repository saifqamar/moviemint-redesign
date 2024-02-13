import Footer from "../components/footer";
import Header from "../components/header";
import ProductionHero from "../components/ProductionHero";
import ProductionHouseBody from "../components/productionHouseBody";
import LeadCard from "../components/leadCard";
import { useParams } from "react-router-dom";
import userData from "../data/userData";
import productData from "../data/movieData";

export default function ProductionHousePage(){
    let user = useParams();
    const userDet = userData.find(us => us['userName'].includes(user.user)); 

    const userMovies = productData.filter(movie => movie['uploader'].includes(userDet.userName));
    console.log('user Details ===>>>>', userMovies)
    return(
        <div className="whole-production-house">
            <Header />
            <ProductionHero />
            <ProductionHouseBody userName={userDet?.userName} wNum={userDet?.web3WalletNumber} bio={userDet?.bio} movies={userMovies} />
            <div className="Cast mx-4 mt-12 mb-12 lg:mt-28 lg:mb-28 lg:mx-20">
                <h1 className="text-mtext text-3xl font-bold mb-4 ">Crew</h1>
                <div className="all-leads flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
                    <LeadCard />
                    <LeadCard />
                    <LeadCard />
                    <LeadCard />
                </div>
            </div>
            <Footer />
        </div>
    )
}