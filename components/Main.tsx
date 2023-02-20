import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

export default function Main() {
	return (
		<div
			id='home'
			className='h-screen w-full text-center'
		>
			<div className='mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2'>
				<div>
					<p className='uppercase tracking-widest text-gray-600 dark:text-primary-white-3'>
						Let's Build Something Together
					</p>
					<h1 className='py-4 text-gray-700 dark:text-primary-white-2'>
						Hi, I'm <span className='text-accent'>Romeo</span>
					</h1>
					<h1 className='py-2 text-gray-700 dark:text-primary-white-2'>
						A <span className='text-accent'>Software Engineer</span>{" "}
						and <div className='text-accent'>Front-End Dev</div>
					</h1>
					<p className='m-auto max-w-[70%] py-4 text-gray-600 dark:text-primary-white-3'>
						Description
					</p>
					<div className='m-auto flex max-w-[330px] items-center justify-between py-4'>
						<div className='social-icon p-6 hover:scale-110 dark:shadow-none dark:ring-1 dark:ring-white'>
							<FaLinkedinIn />
						</div>
						<div className='social-icon p-6 hover:scale-110 dark:shadow-none dark:ring-1 dark:ring-white'>
							<FaGithub />
						</div>
						<div className='social-icon p-6 hover:scale-110 dark:shadow-none dark:ring-1 dark:ring-white'>
							<AiOutlineMail />
						</div>
						<div className='social-icon p-6 hover:scale-110 dark:shadow-none dark:ring-1 dark:ring-white'>
							<BsFillPersonLinesFill />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
