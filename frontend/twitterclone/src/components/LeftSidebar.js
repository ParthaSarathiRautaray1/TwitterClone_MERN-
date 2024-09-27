import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMdBookmarks } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';

function LeftSidebar() {
  return (
    <div className='w-[20%]'>
   
      <div>
        <div>
            <img className='ml-4' width={"34px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-h-e2hgz8mwGfCt4gvj4IgMG_wAUolVM6w&s' alt='Twitter_logo' />
        </div>
        <div className='my-4'>

            <Link to="/" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <div>
                <IoHome size="24px" />
              </div>
             
                <h1 className='font-bold text-lg ml-3'>Home</h1>
            </Link>

            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <div>
                <IoSearch size="24px" />
              </div>
             
                <h1 className='font-bold text-lg ml-3'>Explore</h1>
            </div>

            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <div>
                <IoNotifications size="24px" />
              </div>
             
                <h1 className='font-bold text-lg ml-3'>Notification</h1>
            </div>

            <Link to="/profile" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <div>
                <CgProfile size="24px" />
              </div>
             
                <h1 className='font-bold text-lg ml-3'>Profile</h1>
            </Link>

            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <div>
                <IoMdBookmarks size="24px" />
              </div>
             
                <h1 className='font-bold text-lg ml-3'>Bookmarks</h1>
            </div>

            <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
              <div>
                <IoLogOut size="24px" />
              </div>
             
                <h1 className='font-bold text-lg ml-3'>Logout</h1>
            </div>

            <button className='px-4 py-2 border-none text-lg bg-[#1D9BF0] w-full rounded-full text-white font-bold'>Post</button>

            
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar
