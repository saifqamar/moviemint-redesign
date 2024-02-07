import FAQs from "../components/FAQs";
import Categories from "../components/categories";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import NextEra from "../components/nexEra";
import ProductionHouses from "../components/productionHouses";
import Stories from "../components/stories";
import Top5 from "../components/top5";
import UpComingProjects from "../components/upComingProjects";



export default function LandingPage(){
    return(
        <div className="max-w-[1700px] mx-auto">
            <Header />
            <Hero />
            <NextEra />
            <Top5 />
            <ProductionHouses />
            <Categories />
            <Stories />
            <UpComingProjects />
            <FAQs />
            <Footer />
        </div>
    )
}