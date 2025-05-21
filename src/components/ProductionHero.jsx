import productionHouseImg from '../images/Production-Houses.jpg';

export default function ProductionHero(props){
    return(
        <div className="element-card pt-20 md:pt-0">
            <div className="main-element">
                <div className="rounded-b-[16px] h-[500px] md:h-[40vh] w-full relative overflow-hidden">
                    <img src={productionHouseImg} alt="banner production house" className="w-full h-full object-cover md:object-cover" />
                    <div className="extras absolute px-4 md:px-20 pb-2 w-full h-full top-0 flex items-center bg-gradient-to-r from-neutral-900 to-mtext/0 text-mtext">
                    </div>
                </div>                                
            </div>
        </div>
    )
}