import nextEraImg from '../images/right.png'

export default function NextEra(){
    return(
        <div className="next-era mt-28">
            <div className="mx-4 md:mx-20 flex flex-col-reverse md:flex-row md:items-center gap-y-12 md:gap-x-12">
                <div className="left-sec md:w-1/2">
                    <h1 className='text-3xl text-mtext md:text-4xl lg:text-5xl font-bold mb-4'>The Next Great Cinematic era Starts NOW on the <span className='text-m-Primary'>Blockchain.</span></h1>
                    <p className='text-mtext md:text-lg lg:text-xl'>Our Blockchain platform seamlessly connects Independent Creators and Passionate Supporters. 
                        Filmmakers tokenize projects into NFT "movie shares" that fans can buy and tradel. 
                        This raises production funds while retaining full ownership and creative control while fans.
                    </p>
                </div>
                <div className="right-sec self-center md:w-1/2">
                    <img className='mx-auto' src={nextEraImg} alt="" />
                </div>
            </div>
        </div>
    )
}