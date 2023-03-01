import Link from "next/link"
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
						A
						<span className='text-accent'> Software Engineer </span>
						and <div className='text-accent'>Front-End Dev</div>
					</h1>
					<p className='m-auto max-w-[70%] py-4 text-gray-600 dark:text-primary-white-3'></p>
					<div className='m-auto flex max-w-[330px] items-center justify-between py-4'>
						<Link
							target='_blank'
							rel='noopener noreferrer'
							href='https://linkedin.com/in/romeo923/'
							className='social-icon p-6 hover:scale-110'
						>
							<FaLinkedinIn />
						</Link>
						<Link
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/Romeo923'
							className='social-icon p-6 hover:scale-110'
						>
							<FaGithub />
						</Link>
						<Link
							target='_blank'
							rel='noopener noreferrer'
							href='mailto:romeo.capozziello@gmail.com'
							className='social-icon p-6 hover:scale-110'
						>
							<AiOutlineMail />
						</Link>
						<Link
							target='_blank'
							rel='noopener noreferrer'
							href='/resume.pdf'
							className='social-icon p-6 hover:scale-110'
						>
							<BsFillPersonLinesFill />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
