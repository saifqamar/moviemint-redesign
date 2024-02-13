import AboutHero from "../components/aboutHero";
import Header from "../components/header";
import StoryCard from "../components/storyCard";
import Footer from "../components/footer";
import ShortsHero from "../components/shortsHero";

export default function ShortPage(){
    return(
        <div className="shorts">
            <Header />
            <ShortsHero />
            <div className="whole mx-6 lg:mx-20 mb-14 lg:mb-28 mt-8">
                <div className="story-cards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 xl:grid-cols-5 gap-x-4 gap-y-6">
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                    <StoryCard />
                </div>
            </div>
            <Footer />
        </div>

    )
}