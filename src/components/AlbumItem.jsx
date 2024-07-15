import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const AlbumItem = ({img, name, desc, id}) => {

  const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(`/album/${id}`)} className="p-2 min-w-32 hover:bg-[#ffffff26] transition rounded cursor-pointer">
            <img src={img} alt="" className="rounded"/>
            <div className="mt-2 space-y-1">
                <h3 className="font-semibold">{name}</h3>
                <p className="text-xs text-slate-200">{desc}</p>
            </div>
        </div>
  )
}

export default AlbumItem