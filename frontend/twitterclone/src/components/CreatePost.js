import React from 'react'
import Avatar from "react-avatar"
import { CiImageOn } from "react-icons/ci";

function CreatePost() {
    return (
        <div className='w-[100%]'>
            <div> 
                <div className='flex items-center justify-evenly border-b border-gray-200'>

                    <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                        <h1 className='font-semibold text-gray-700 text-lg '>For You</h1>
                    </div>
                    <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                        <h1 className='font-semibold text-gray-700 text-lg '>Following</h1>
                    </div>

                </div>

                    {/* lower box  */}
                <div>
                    <div className='flex justify-center p-4'>
                        <div>
                            <Avatar src="https://media.licdn.com/dms/image/v2/D4E03AQGWSFcFu63QTQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1721309383320?e=1732752000&v=beta&t=N1h4sKCP--D2CHhr8L31lICRRGjvDEvQVnitjc2c1js" size="40" round={true} />
                        </div>
                       <input className='w-full outline-none border-none text-lg ml-2' type='text' placeholder='What is Happenning?!'/> 
                    </div>


                    {/*  */}
                    <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                        <div>
                            <CiImageOn size={"24px"}/>
                        </div>
                        <button className='bg-[#1D9BF0] px-4 py-1 text-lg text-white border-none rounded-full'>Post</button>
                    </div>


                </div>


            </div>


        </div>
    )
}

export default CreatePost
