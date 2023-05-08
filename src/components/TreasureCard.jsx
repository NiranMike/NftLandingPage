import { greenEth, like } from "../assets"
import PropTypes from 'prop-types';


const TreasureCard = ({image,userImg,username,price,name}) => {
  return (
    <div className="h-[400px] space-y-3 px-4 py-3 relative w-[240px] bg-[#c392e75f] backdrop-blur-md border-[#E025CE] border-[2px] rounded-[8px]">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
                <img src={userImg} alt="" />
                  <p>{ username }</p>
            </div>
            <img src={like} alt="" />
        </div>
        <div>
            <img src={image} alt="" />
              <p className="font-bold">{ name }</p>
            <p>Limited Edition</p>
        </div>
        <div className=" flex justify-between">
            <div className="flex gap-2 items-center">
                <img src={greenEth} alt="" />
                <div className="">
                    <p>Price</p>
                    <p>{`${price} ETH`}</p>
                </div>
            </div>
            <button className=" py-3 px-4 font-bold rounded-[8px] bg-[#00031A]">Place a Bid</button>
        </div>
        
    </div>
  )
}

TreasureCard.propTypes = {
    image:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    userImg:PropTypes.string.isRequired,
    username:PropTypes.string.isRequired,
    price:PropTypes.string.isRequired,
}

export default TreasureCard

