import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='tracking-widest text-gray-600 uppercase'>
                    Let's Build Something Together
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#5651e5]'>Romeo</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A <span className='text-[#5651e5]'>Software Engineer</span> and <div className='text-[#5651e5]'>Front-End Dev</div>
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    Description
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='p-6 social-icon hover:scale-110'>
                        <FaLinkedinIn/>
                    </div>
                    <div className='p-6 social-icon hover:scale-110'>
                        <FaGithub/>
                    </div>
                    <div className='p-6 social-icon hover:scale-110'>
                        <AiOutlineMail/>
                    </div>
                    <div className='p-6 social-icon hover:scale-110'>
                        <BsFillPersonLinesFill/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
