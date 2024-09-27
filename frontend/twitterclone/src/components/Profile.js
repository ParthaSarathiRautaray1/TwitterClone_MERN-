import React from 'react'
import Avatar from 'react-avatar';
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useGetProfile from '../hooks/useGetProfile'

function Profile() {

    const {user} = useSelector(store=>store.user);



   useGetProfile(user?._id);



  return (
    <div className='w-[50%] ' >
        <div>
            <div className='flex items-center py-2'>
                <Link to="/" className='p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer'>
                <IoArrowBackSharp size={"20px"}/>

                </Link>
                <div className='ml-2'>
                <h1 className='font-bold text-lg'>Partha</h1>
                <p className='text-gray-500 text-sm'>10 posts</p>

                </div>
            </div>
            <img src="https://media.licdn.com/dms/image/v2/D4E16AQHGqXDWYpfdxA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1675287795510?e=1732752000&v=beta&t=HjAwGziNXfsK7InZrt62OixuFD1zJAA8zQdsXCSK_kE"  alt="banner"/>
            <div className='absolute top-48 ml-2  border-4 border-white rounded-full'>
                <Avatar src="https://media.licdn.com/dms/image/v2/D4E03AQGWSFcFu63QTQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1721309383320?e=1732752000&v=beta&t=N1h4sKCP--D2CHhr8L31lICRRGjvDEvQVnitjc2c1js" size="120" round={true} />
            </div>
            <div className='text-right m-4'>
                <button className='px-4 py-1 hover:bg-gray-200 rounded-full  border border-gray-700'>Edit Profile</button>
            </div>

            <div>
                <h1 className='font-bold text-xl mt-9'>partha</h1>
                <p className=''>@parthamernstack</p>
            </div>

            <div className='m-4 text-sm'>
                <p>computer science education, distance learning, collaborative learning, computer-assisted instruction.</p>
            </div>

        </div>
      
    </div>
  )
}

export default Profile
