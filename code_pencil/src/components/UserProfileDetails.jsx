import {useState} from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Menus,signOutAction } from '../utils/helpers';
const UserProfileDetails = () => {

  const user = useSelector(state=> state.user?.user)
  const [isMenu, setIsMenu] = useState(false)
  return (
    <div className='flex items-center justify-center gap-4 relative'>
      <div className='w-10 h-10 flex items-center justify-center rounded-xl overflow-hidden curson-pointer bg-emerald-500'>
        {
          user?.photoURL ? <>
            <img src={user?.photoURL} alt={user?.displayName}
            referrerPolicy='no-referrer' className='w-full h-full object-cover'/>
          </> : <p className='text-xl text-white font-semibold capitalize'>{user?.email[0]}</p>
        }
        </div>  
        <div onClick={()=> setIsMenu(!isMenu)} className='w-8 h-6 rounded-xl -m-2 flex items-center justify-center bg-gray-700 text-white cursor-pointer'>\/
          
        </div>

        {isMenu && <div className='bg-gray-600 absolute top-16 right-0 px-4 py-3 rounded-xl shadow-md z-10 flex flex-col items-start justify-start gap-4 min-w-[225px]'>
          {Menus && Menus.map((menu) => (
            <Link to={menu.uri} key={menu.id} className='text-white text-lg hover:bg-[rgba(256,256,256,0.05)] px-2 py-1 w-full rounded-md '>{menu.name}</Link>
          ))}
          <p onClick={signOutAction} className='text-white text-lg hover:bg-[rgba(256,256,256,0.05)] px-2 py-1 w-full rounded-md '>
            Sign Out
          </p>
        </div>}
    </div>
  )
}

export default UserProfileDetails