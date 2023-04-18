import React from 'react'
import { Link } from 'react-router-dom'

const NvabarCom = () => {
  return (
    <div className='container mx-auto  mt-5'>

       <nav className='flex  justify-between flex-col md:flex-row'>
        <div>
          logo
        </div>

         <ul className='flex flex-col md:flex-row'>
          <li className='mx-5 text-lg font-semibold hover:text-teal-700 hover:font-bold border-2 border-teal-300 hover:bg-teal-100 hover:border-teal-500 px-3 py-1 rounded-lg shadow-md '>
            <Link to={'/'}> Home</Link>
          </li>
          <li className='mx-5 text-lg font-semibold hover:text-teal-700 hover:font-bold border-2 border-teal-300 hover:bg-teal-100 hover:border-teal-500 px-3 py-1 rounded-lg shadow-md'>
            <Link to={'/about'}>About</Link>
          </li>
        
         </ul>
         <Link to={'/login'} className=' text-lg font-semibold hover:text-teal-700 hover:font-bold border-2 border-teal-300 hover:bg-teal-100 hover:border-teal-500 px-3 py-1 rounded-lg shadow-md '> Log In</Link>
       </nav>


    </div>
  )
}

export default NvabarCom