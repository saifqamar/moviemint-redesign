import AboutHero from "../components/aboutHero";
import Header from "../components/header";
import ManagementDet from "../components/managementDet";
import Footer from "../components/footer";

export default function AboutPage(){
    return(
        <div className="about-page">
            <Header />
            <AboutHero />
            <ManagementDet />
            <div className="mb-28">
                <ManagementDet />
            </div>
            <Footer />
        </div>
    )
}