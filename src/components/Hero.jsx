import { Monkey, eth, heroText, playbtn } from "../assets"

const Hero = () => {
  return (
    <div className="hero-bg 2xl:justify-center 2xl:items-center 2xl:mx-auto text-white grid gap-7 lg:grid-cols-2 px-3 lg:px-12 pt-[160px]">
        <div className=" space-y-6">
            <p className="md:text-[20px] font-semibold ">THE LARGEST MONKEY NFT MARKETPLACE</p>
            <img src={heroText} alt="" />
            <p className=" font-medium max-w-xl text-[20px] tracking-wide">The world’s largest marketplace for monkey
                  character collections non fungible token NFTs.
            </p>
            <div className="flex gap-4">
                <button className="p-3 border  bg-[#E025CE] rounded-[8px] shadow-2xl shadow-[#4AED52] border-[#4AED52] font-bold text-sm lg:text-[20px]">CONNECT WALLET</button>
                <div className="flex items-center gap-2">
                    <img src={playbtn} alt="" />
                    <p className="font-bold md:text-[20px]">HOW IT WORKS</p>
                </div>
            </div>
        </div>
        <div className="relative hidden lg:block">
            <div className=" relative border-[3px] flex flex-col 2xl:w-[500px] from-[#4AED52] to-[#E025CE] border-[#E025CE] rounded-[8px] bg-[#ffffff2c] ml-[180px] backdrop-blur-md">
                
                <div className="flex h-[380px] bg-[#ffffff2c] items-end z-20 p-4 backdrop-blur-none justify-between">
                    <div className=" space-y-5 ">
                        <div>
                            <p className=" text-[20px] font-bold">Monkey Monster</p>
                            <p className=" text-[16px] font-medium">By Stefon Brown</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className=" py-1 backdrop-blur-md bg-[#ffffff12] px-3 rounded-full border">
                                <img src={eth} alt="" />
                            </div>
                            <p>18.3 ETH</p>
                        </div>
                    </div>
                    <button className="bg-[#00031A] text-white font-bold px-7 rounded-[6px] py-4">Place a Bid</button>
                </div>
                <img className="absolute -top-[80px] h-[460px]" src={Monkey} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default Hero