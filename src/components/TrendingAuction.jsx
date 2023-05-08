import { auctionData } from "../assets/data"
import AuctionCard from "./AuctionCard"

const TrendingAuction = () => {
    
  return (
    <div className="text-white trending_auction_bg ">
        <div className=" flex flex-col space-y-14  mx-12 py-[60px]">
            <p className="  font-bold text-[38px] text-center mb-16">TRENDING AUCTION</p>
            <div className="grid md:grid-cols-2 gap-12 justify-center lg:grid-cols-3 xl:grid-cols-4">
                {
                    auctionData.map((item)=>{
                        const {img, name, artist, price, countdown} = item
                        return (
                            <AuctionCard key={img} image={img} name={name} artist={artist} price={price} countdown={countdown} />
                        )
                    })
                }
            </div>
            <button className="py-3 px-4 mx-auto rounded-[8px] bg-gradient-to-b from-[#BD24E6] to-[#E40FAC]">View More</button>
        </div>
    </div>
  )
}



export default TrendingAuction