import React, { useContext } from 'react'
import { MainContext } from '../pages/Context'
import { Link } from 'react-router-dom'

export default function Header() {
      const {user,logout}  = useContext(MainContext)  //{user}  {} destructure s aaya h user..
    //   console.log(user)
  return (
    <>
    <div className='w-full shadow-lg  flex justify-between px-10 py-4'>
         <div className='text-lg'>Logo</div>
         <ul className='flex gap-3  text-lg'>
         <li><Link to={'/'}>Home</Link></li>
            {
                user == null ?
                <li><Link to={'/login'}>Login</Link></li>
                :
                <> 
                <li><Link to={'/add-quiz'}>Add Quiz</Link></li>
                <li><Link to={'/view-quiz'}>View Quiz</Link></li>
                <li><Link to={'/play-quiz'}>Play Quiz</Link></li>
                <li onClick={logout}>
                    <Link to={'/login'}>Logout</Link>
                    
                </li>
                </>
            }
         </ul>
    </div>
    </>
  )
}
