import { eth } from "../assets"
import PropTypes from 'prop-types';

const AuctionCard = ({image, price, countdown, name, artist}) => {
  return (
    <div className="h-[300px] relative w-[260px] bg-[#c392e75f] backdrop-blur-md border-[#E025CE] flex items-end border-[2px] rounded-[8px]">
                        <div className="flex px-4 py-2  w-full z-20 bg-[#3f0d6da5] backdrop-blur-2xl rounded-b-[8px] ">
                            <div className="w-full space-y-2">
                                <div className="justify-between flex items-center">
                                    <div>
                                        <p className="font-bold text-[18px]">{ name }</p>
                                        <p className=" font-medium text-[16px]">{`By ${artist}`}</p>
                                    </div>
                                    <div className="border rounded-[8px]">
                                        <p className="px-3 py-2 ">{countdown}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="justify-between flex items-center">
                                        <div className="flex gap-1 items-center">
                                            <div className=" py-1 backdrop-blur-md bg-[#ffffff12] px-3 rounded-full border">
                                                <img src={eth} alt="" />
                                            </div>
                                            <p>{`${price} ETH`}</p>
                                        </div>
                                        <button className="bg-[#00031A] text-white font-bold px-2 rounded-[6px] py-2">Place a Bid</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={image} alt="" className="absolute object-contain h-[450px]" />
                </div>
  )
}

AuctionCard.propTypes = {
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    countdown: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
};


export default AuctionCard