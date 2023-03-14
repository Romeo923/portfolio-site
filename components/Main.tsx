"use client"

import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BGCircle from "@/components/BGCircle"

export default function Main() {
	const [job, jobTW] = useTypewriter({
		words: ["<Software Engineer />", "<Front-End Dev />"],
		loop: 0,
		delaySpeed: 2500,
	})
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			key='home'
			id='home'
			className='h-screen w-full snap-center text-center'
		>
			<div className='mx-auto flex h-full w-full max-w-[1240px] flex-col items-center justify-center p-2'>
				<BGCircle />
				<div className='z-50'>
					<p className='uppercase tracking-widest text-gray-600 dark:text-primary-white-3'>
						Let&apos;s Build Something Together
					</p>
					<h1 className='py-4 text-gray-700 dark:text-primary-white-2'>
						Hi, I&apos;m <span className='text-accent'>Romeo</span>
					</h1>
					<h1 className='py-2 text-gray-700 dark:text-primary-white-2'>
						<span className='text-accent'>{job}</span>
						<Cursor />
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
		</motion.div>
	)
}
