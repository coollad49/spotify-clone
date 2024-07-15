
// eslint-disable-next-line react/prop-types
const SongsItem = ({img, name, desc}) => {
    return (
      <div className="p-2 min-w-36 hover:bg-[#ffffff26] transition rounded cursor-pointer">
              <img src={img} alt="" className="rounded"/>
              <div className="mt-2 space-y-1">
                  <h3 className="font-semibold">{name}</h3>
                  <p className="text-xs text-slate-200">{desc}</p>
              </div>
          </div>
    )
  }
  
  export default SongsItem