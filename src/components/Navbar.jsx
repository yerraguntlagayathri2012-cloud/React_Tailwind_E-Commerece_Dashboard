import React from 'react'
import { Menu,CircleX} from "lucide-react"
import { NavbarList } from "../data/NavbarData";
function Navbar() { 
  return (

 <nav className='bg-gray-100 shadow-lg p-4'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center relative'>
          <div className='text-green-800 font-bold text-2xl'>Product list Dashboard</div>


          <div className='flex gap-5 text-gray-800 font-bold'>
         {/* //linking ..... */}
            {NavbarList.map((item) => (
              <a key={item.Cid} className='hover:text-blue-800' href="#">{item.name}</a>
            ))}
            
          </div>

          <div className='w-full md:w-1/3'>
          <input type="text" placeholder='Search by Product Name'  className='w-full bg-white border rounded-lg px-4 py-2' />
          </div>
      </div>
    </nav>
 
  )
}

export default Navbar