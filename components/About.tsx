"use client"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variants"

export default function About() {
	return (
		<div className='m-auto w-full max-w-[1240px] grid-cols-3 items-center gap-8 p-2 py-16 md:grid md:h-screen'>
			<div className='col-span-2'>
				<motion.h1
					initial='hidden'
					variants={fadeIn({ direction: "down", delay: 0 })}
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className='uppercase tracking-widest text-accent'
				>
					About
				</motion.h1>
				<motion.div
					initial='hidden'
					variants={fadeIn({ direction: "right", delay: 0 })}
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className='my-4 px-4 py-4 shadow-gray-400 ease-in hover:scale-105 '
				>
					<h2 className='pb-5'>Bio</h2>
					<p className='text-gray-600 dark:text-primary-white-3'>
						I&apos;m a driven and motivated grad student pursuing my
						Masters in C.S.
					</p>
					<p className='py-2 text-gray-600 dark:text-primary-white-3'>
						Throughout my journey, I have honed my skills in various
						programming languages, including JavaScript, Python, and
						Java, and I have used this knowledge to build web and
						mobile applications. I am excited to apply my skills and
						knowledge to new projects and challenges in the software
						engineering field. Please take a look at my portfolio,
						and feel free to contact me if you have any questions or
						if you would like to discuss a project.
					</p>
					<p className='text-gray-600 dark:text-primary-white-3'>
						As a self-taught front-end developer, I specialize in
						creating visually appealing and engaging user interfaces
						using HTML, CSS, and JavaScript. I am passionate about
						leveraging technology to create impactful solutions that
						can make a positive difference in people&apos;s lives.
					</p>
				</motion.div>
				<motion.div
					initial='hidden'
					variants={fadeIn({ direction: "right", delay: 0 })}
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className='mx-auto px-4 py-4 shadow-gray-400 ease-in dark:rounded-md'
				>
					<div className='grid grid-cols-2'>
						<h2 className='col-span-2'>Education</h2>
						<p className='text-gray-600 dark:text-primary-white-3'>
							MS. Computer Science
						</p>
						<p className='text-gray-600 dark:text-primary-white-3'>
							University of Bridgeport
						</p>
						<p className='col-start-2 text-gray-600 dark:text-primary-white-3'>
							Expected Dec. 2023
						</p>
						<h3 className='col-span-2'>Relavent Courses</h3>
						<p className='text-gray-600 dark:text-primary-white-3'>
							Algorithms
						</p>
						<p className='text-gray-600 dark:text-primary-white-3'>
							Computer Vision
						</p>
						<p className='text-gray-600 dark:text-primary-white-3'>
							Deep Learning
						</p>
						<p className='text-gray-600 dark:text-primary-white-3'>
							Data Mining
						</p>
						<p className='text-gray-600 dark:text-primary-white-3'>
							Cloud Computing
						</p>
						<p className='text-gray-600 dark:text-primary-white-3'>
							OOP W/ Design Patterns
						</p>
					</div>
				</motion.div>
			</div>
			<motion.div
				initial='hidden'
				variants={fadeIn({ direction: "left", delay: 0 })}
				whileInView={"show"}
				viewport={{ once: false, amount: 0.7 }}
				className='m-auto flex h-auto w-full items-center justify-center p-4 ease-in'
			>
				<Image
					className='rounded-md'
					src='/programming.jpg'
					width={1200}
					height={1200}
					alt='/'
				/>
			</motion.div>
		</div>
	)
}
