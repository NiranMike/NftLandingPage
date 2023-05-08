import TreasureCard from "./TreasureCard"
import { treasures } from "../assets/data"


const MonthlyTreasures = () => {
  return (
    <div className="third_section_bg">
        <div className=" flex flex-col space-y-6 text-white  mx-12 py-[60px]">
            <p className="  font-bold text-[38px] text-center">MONTHLY MONKEY TREASURES</p>
            <p className="text-[20px] font-medium text-center lg:mx-[220px]">Discover one of the most popular NFT creations picked for you. Place your bid and
                bi the first to have these treasures. All of the artworks are limited selections.
            </p>
            <div className="grid md:grid-cols-2 gap-12 justify-center lg:grid-cols-4 xl:grid-cols-5">
                {
                    treasures.map((item)=>{
                        const {id,image,name,userImg,username,price} = item
                        return (
                            <TreasureCard key={id} image={image} name={name} userImg={userImg} username={username} price={price} />
                        )
                    })
                }
            </div>
            <button className="py-3 px-4 mx-auto rounded-[8px] bg-gradient-to-b from-[#BD24E6] to-[#E40FAC]">View More</button>
        </div>
    </div>
  )
}



export default MonthlyTreasures