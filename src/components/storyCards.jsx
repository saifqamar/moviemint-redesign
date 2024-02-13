import StoryCard from "./storyCard"

export default function StoryCards(){
    return(
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
    )
}