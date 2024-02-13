import ReactPlayer from 'react-player'

export default function ShortsHero(){
    return(
        <div className="element-card  pt-28 mx-6 lg:mx-20 md:mt-12 md:pt-0">
            <div className="main-element">
                <div className="rounded-[16px] h-[300px] md:h-[20vh] w-full border border-crdGray relative overflow-hidden">
                    <video className="rounded-b-[16px] w-full h-full object-cover md:object-cover"  type="video/mp4" muted autoPlay play loop  >
                        <source src="https://staging.moviemint.net/uploads/video/admin/video1.mp4" type="video/mp4" />
                    </video>
                    {/* <ReactPlayer width={'100%'} style={{'objectFit': 'cover', width:'100%'}} url='https://staging.moviemint.net/uploads/video/admin/video1.mp4' /> */}


                    <div className="extras absolute px-4 md:px-20 pb-2 w-full h-full top-0 flex items-center bg-gradient-to-r from-neutral-900 to-mtext/0 text-mtext">
                        <div className="">
                            {/* <p className="text-lg md:text-xl lg:text-2xl mb-2">Welcome To The Revolution</p> */}
                            <h1 className="font-bold text-4xl md:5xl lg:text-7xl  leading-[120%] bg-gradient-to-r from-m-Primary to-mtext w-fit text-transparent bg-clip-text">Shorts</h1>
                            
                        </div>

                        
                    </div>
                </div>                                
            </div>
        </div>
    )
}