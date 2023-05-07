import { ethCoins } from "../assets/data"

const EtheriumCoinsSection = () => {
  return (
    <div className="bg-[#36135f] border-[#622f99ae] border-[2px]">
        <div className="py-4 items-center px-3 lg:px-12 grid justify-center gap-6 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-6 bg-[#622f991b] backdrop-blur-md">
            {
                ethCoins.map((item)=>{
                    
                    return (
                        <div key={item.name} className="items-center flex gap-3 text-white">
                            <img src={item.img} alt="" />
                            <p>{ item.name}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default EtheriumCoinsSection