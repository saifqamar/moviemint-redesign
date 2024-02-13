import ReactPlayer from 'react-player'

export default function ProductTrailer(props){
    return(
        <div className="element-card  pt-28 mx-6 lg:mx-20 md:mt-12 md:pt-0">
            <div className="main-element">
                <div className="rounded-[16px] h-[300px] md:h-[50vh] w-full relative overflow-hidden">
                    <video className="rounded-b-[16px] w-full h-full object-cover md:object-cover"  type="video/mp4"  controls>
                        <source src={props.trailer} type="video/mp4" />
                    </video>
                    {/* <ReactPlayer width={'100%'} style={{'objectFit': 'cover', width:'100%'}} url='https://staging.moviemint.net/uploads/video/admin/video1.mp4' /> */}
                </div>                                
            </div>
        </div>
    )
}