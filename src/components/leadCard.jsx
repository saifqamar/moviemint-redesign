export default function LeadCard(){
    return(
        <div className="lead bg-crdGray py-6 px-6 rounded-lg flex flex-col gap-x-4">
            <div className="ch-img mb-4 w-full h-full mx-auto text-center flex justify-center">
                <img className="w-[180px] h-[180px] rounded-[100%]  border border-m-Primary object-cover" src="https://staging.moviemint.net/uploads/creator/0x5f4b470ae07e7780c03cb73256c5aebd69fa7e77/0x5f4b470ae07e7780c03cb73256c5aebd69fa7e771704977282026.png" alt=" hero " />
            </div>
            <div className="det text-mtext grow">
                {/* <h1 className="heading font-bold text-xl">Emma Thompson</h1> */}
                <h1 className="text-mtext text-xl font-bold mb-1">Emma Thompson </h1>

                <p className="mb-1">Age:<span className="font-bold">24</span></p>
                <p>a graceful ballet dancer with long, flowing red hair and an elegant demeanor</p>
            </div>
        </div>
    )
}