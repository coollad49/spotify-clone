import { assets } from "../assets/assets"
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

  return (
    <div className="space-y-4">
        <div className="flex justify-between">
            <div className="flex gap-4">
                <div className="bg-black rounded-full p-2 cursor-pointer">
                    <img onClick={()=>navigate(-1)} src={assets.arrow_left} alt="" className="w-4"/>
                </div>
                <div className="bg-black rounded-full p-2 cursor-pointer">
                    <img onClick={()=>navigate(1)} src={assets.arrow_right} alt="" className="w-4"/>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="hidden lg:block bg-white rounded-full py-1 px-3 font-semibold text-black">
                    <span>Explore Premium</span>
                </div>
                <div className="bg-black rounded-full py-1 px-4 font-semibold">
                    <span>Install App</span>
                </div>
                <div className="rounded-full bg-amber-600 px-3 py-1">
                    <span>L</span>
                </div>
            </div>
        </div>
        <div className="flex gap-3">
            <div className="bg-white rounded-full px-4 py-1 text-black cursor-pointer font-medium">
                All
            </div>
            <div className="bg-black rounded-full py-1 px-4 cursor-pointer font-medium">
                <span>Music</span>
            </div>
            <div className="bg-black rounded-full py-1 px-4 cursor-pointer font-medium">
                <span>Podcasts</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar