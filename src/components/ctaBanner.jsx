export default function CTABannner(){
    return(
        <div className="cta-banner px-6 lg:px-20">
            <div className="whole bg-crdGray w-full rounded-xl overflow-hidden  relative items-center flex flex-col md:flex-row-reverse">
                <div className="ban-img md:w-8/12 h-full ">
                    <img className="w-full h-full object-cover" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/221219166/original/cee678002ec36e26cf0bde47806fe35da6b35fee/make-professional-creative-movie-poster-design-for-your-film.jpg" alt="banner img" />
                </div>
                <div className="ban-det w-full md:w-5/12 p-6 md:p-12 h-full md:items-center  flex flex-col justify-center">
                    <h1 className="font-semibold mb-3  md:text-3xl lg:text-4xl xl:text-5xl text-mtext">Become a Partner</h1>
                    <p className="text-mtext mb-5">Invest and manage all your NFTs at one place.</p>
                    <button  className="h-14 md:h-16 w-[170px] md:text-lg md:w-[250px] bg-m-Primary rounded-2xl text-black font-bold px-5 md:px-8 flex  flex-row gap-x-2 items-center justify-center"> Explore Projects</button>
                </div>
            </div>
        </div>
    )
}