import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';

function RightSidebar() {
  return (
    <div className='items-center w-[25%]'>
      <div className='p-2 bg-gray-100 text-gray-500 rounded-full outline-none flex items-center'>
        <CiSearch size={"20px"}/>
        <input className='bg-transparent outline-none px-2' type='text'  placeholder="Search"/>
      </div>
      <div className='p-4 bg-gray-100 rounded-2xl my-4'>
        <h1 className='font-bold text-lg '>Who to follow</h1>
        <div className='flex items-center justify-between my-3'>
          <div className='flex'>
          <Avatar src="https://media.licdn.com/dms/image/v2/D4E03AQGWSFcFu63QTQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1721309383320?e=1732752000&v=beta&t=N1h4sKCP--D2CHhr8L31lICRRGjvDEvQVnitjc2c1js" size="40" round={true} />
          <div className='ml-2'>
            <h1 className='font-semibold'>
              pinu
            </h1>
            <p className='text-sm'>@pinumernstack</p>
          </div>
          </div>
          <div>

            <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>

        </div>


        
      </div>
    </div>
  )
}

export default RightSidebar
