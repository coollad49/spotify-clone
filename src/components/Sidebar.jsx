import {assets} from '../assets/assets'

const Sidebar = () => {
  return (
    <div className="w-[26%] flex-col lg:flex hidden gap-3">
        <div className="h-[20%] bg-[#121212] flex flex-col justify-around rounded py-3 gap-5">
            <div className="flex items-center gap-5 pl-5 cursor-pointer">
                <img src={assets.home_icon} alt="" className='w-6'/>
                <p className='font-bold text-white'>Home</p>
            </div>
            <div className="flex items-center gap-5 pl-5 cursor-pointer">
                <img src={assets.search_icon} alt="" className='w-6'/>
                <p className='font-bold text-white'>Search</p>
            </div>
        </div>
        <div className='h-[80%] bg-[#121212]'>
            <div className='space-y-5 overflow-auto'>
                <div className='flex justify-between px-5 pt-4'>
                    <div className='flex items-center gap-3 text-gray-400'>
                        <img src={assets.stack_icon} alt="" className='w-6'/>
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <img src={assets.plus_icon} alt="" className='w-5'/>
                        <img src={assets.arrow_icon} alt="" className='w-5'/>
                    </div>
                </div>
                <div className='space-y-5'>
                    <div className='pl-4 py-4 mx-2 gap-3 text-white bg-[#242424] rounded-md'>
                        <h1 className='font-semibold'>Create your first playlist</h1>
                        <p className='mt-2 font-medium text-sm'>{"It's easy, we'll help you"}</p>
                        <button className='mt-4 text-black bg-white rounded-full px-3 py-[5px] text-sm font-bold'>Create playlist</button>
                    </div>
                    <div className='pl-4 py-4 mx-2 gap-3 text-white bg-[#242424] rounded-md'>
                        <h1 className='font-semibold max-w-52'>{"Let's find some podcast to follow"}</h1>
                        <p className='mt-2 font-medium text-sm max-w-52'>{"We'll keep you updated on new episodes"}</p>
                        <button className='mt-4 text-black bg-white rounded-full px-3 py-[5px] text-sm font-bold'>Browse podcasts</button>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Sidebar