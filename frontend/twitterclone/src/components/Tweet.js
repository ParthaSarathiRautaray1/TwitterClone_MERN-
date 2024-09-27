import React from 'react'
import Avatar from 'react-avatar'
import { FaHeart } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { IoMdBookmarks } from "react-icons/io";

function Tweet() {
    return (
        <div className='border-b border-gray-200'>
            <div>
                <div className='flex p-4 '>
                    <Avatar src="https://media.licdn.com/dms/image/v2/D4E03AQGWSFcFu63QTQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1721309383320?e=1732752000&v=beta&t=N1h4sKCP--D2CHhr8L31lICRRGjvDEvQVnitjc2c1js" size="40" round={true} />
                    <div className='ml-2 w-full'>

                        <div className='flex items-center '>
                            <h1 className='font-semibold '>Partha</h1>
                            <p className='text-gray-500 text-sm ml-1'>partha@gmail  . 1m</p>
                        </div>

                        <div>
                            <p>
                                Hello developers lets connect and grow together.
                            </p>
                        </div>

                        <div className='flex justify-between my-3'>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-blue-200 rounded-full cursor-pointer'>
                                    <FaCommentDots size="24px" />

                                </div>
                                <p>0</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-blue-200 rounded-full cursor-pointer'>

                                    <FaHeart size="24px" />
                                </div>
                                <p >0</p>
                            </div>
                            
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-blue-200 rounded-full cursor-pointer'>

                                    <IoMdBookmarks size="24px" />
                                </div>
                                <p>0</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Tweet
