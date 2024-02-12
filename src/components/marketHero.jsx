

export default function MarketHero(){
    return(
        <div className="element-card pt-20 md:pt-0">
            <div className="main-element">
                <div className="rounded-b-[16px] h-[500px] md:h-[50vh] w-full relative overflow-hidden">
                    <video className="rounded-b-[16px] w-full h-full object-cover md:object-cover"  type="video/mp4"  muted paly loop autoPlay>
                        <source src="https://staging.moviemint.net/uploads/video/admin/video1.mp4" type="video/mp4" />
                    </video>
                    <div className="extras absolute px-4 md:px-20 pb-2 w-full h-full top-0 flex items-center bg-gradient-to-r from-neutral-900 to-mtext/0 text-mtext">
                        <div className="">
                            {/* <p className="text-lg md:text-xl lg:text-2xl mb-2">Welcome To The Revolution</p> */}
                            <h1 className="font-bold text-4xl md:5xl lg:text-7xl lg:w-3/6 leading-[120%] mb-2 md:w-4/6">NFT <span className="text-m-Primary">Marketplace</span></h1>
                            <p className="text-lg md:text-xl lg:text-2xl lg:w-4/6 ">Our Market Place delivers liquidity for your investments. List NFTs for sale, Purchase interests from others, and trade tokens in real time. 
                            Automation ensures fast settlement while price discovery puts you in control.
                            </p>
                            
                            {/* <div className="nav-right mt-4 md:mt-8 w-fit flex flex-row min-[280px]:flex-col min-[400px]:flex-row md:flex-row gap-y-3 gap-x-4 md:gap-x-4 mb-3 md:mb-0 items-center">
                                <button  className="h-14 md:h-16 w-[170px] md:text-lg md:w-[250px] bg-m-Primary rounded-2xl text-black font-bold px-5 md:px-8 flex  flex-row gap-x-2 items-center justify-center"> Explore Projects</button>
                            </div> */}
                        </div>

                        
                    </div>
                </div>                                
            </div>
        </div>
    )
}