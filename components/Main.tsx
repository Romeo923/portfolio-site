"use client"

import Link from "next/link"
import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BGCircle from "@/components/BGCircle"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variants"

export default function Main() {
	const [job, jobTW] = useTypewriter({
		words: ["<SoftwareEngineer />"],
		loop: 1,
    typeSpeed: 50,
		delaySpeed: 2500,
	})

	const [caption, captionTW] = useTypewriter({
		words: ["Let's Build Something Great Together", "I Use VIM BTW", "Let's Build Something Great Together", "I Use Arch BTW"],
		loop: 0,
    typeSpeed: 30,
    deleteSpeed: 30,
		delaySpeed: 5000,
	})

	return (
		<div className='flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center'>
			<BGCircle />
			<div className='z-50'>
				<h1 className='text-sm uppercase tracking-widest text-gray-600 dark:text-primary-white-3 sm:text-lg'>
          {caption}
					<Cursor />
				</h1>
				<motion.h1
					initial='hidden'
					variants={fadeIn({ direction: "left", delay: 0.3 })}
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className='text5xl scroll-px-10 py-4 text-gray-700 dark:text-primary-white-2 lg:text-6xl'
				>
					Hi, I&apos;m <span className='text-accent'>Romeo</span>
				</motion.h1>
				<motion.h1
					initial='hidden'
					variants={fadeIn({ direction: "right", delay: 0.3 })}
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className='bold py-2 text-gray-700 dark:text-primary-white-2'
				>
					<span className='text5xl scroll-px-10 text-accent lg:text-6xl'>
          {job}
					</span>
				</motion.h1>
				<p className='m-auto max-w-[70%] py-4 text-gray-600 dark:text-primary-white-3'></p>
				<div className='m-auto flex max-w-[330px] items-center justify-between py-4'>
					<Link
						target='_blank'
						rel='noopener noreferrer'
						href='https://linkedin.com/in/romeo923/'
						className='social-icon p-6 hover:scale-110 dark:shadow-accent/50'
					>
						<FaLinkedinIn />
					</Link>
					<Link
						target='_blank'
						rel='noopener noreferrer'
						href='mailto:romeo.capozziello@gmail.com'
						className='social-icon p-6 hover:scale-110 dark:shadow-accent/50'
					>
						<AiOutlineMail />
					</Link>
					<Link
						target='_blank'
						rel='noopener noreferrer'
						href='https://github.com/Romeo923'
						className='social-icon p-6 hover:scale-110 dark:shadow-accent/50'
					>
						<FaGithub />
					</Link>
					<Link
						target='_blank'
						rel='noopener noreferrer'
						href='/resume.pdf'
						className='social-icon p-6 hover:scale-110 dark:shadow-accent/50'
					>
						<BsFillPersonLinesFill />
					</Link>
				</div>
			</div>
		</div>
	)
}
