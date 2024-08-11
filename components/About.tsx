"use client"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variants"

export default function About() {
	return (
		<div className='w-full grid-cols-3 items-center gap-8 overflow-hidden py-16 md:grid md:h-screen'>
			<div className='col-span-2 pt-6'>
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
					className='my-4 px-4 py-2 ease-in '
				>
					<h2 className='pb-5'>Who Am I?</h2>
					<p className='text-gray-600 dark:text-primary-white-3'>
						Hi, I&apos;m Romeo Capozziello, an Embedded Software Engineer with a Master&apos;s in Computer Science.
            I&apos;m passionate about developing innovative solutions and optimizing complex systems.
					</p>
					<p className='text-gray-600 dark:text-primary-white-3'>
            I have experience in C++ and excel at tackling challenging problems while continuing to hone my skills.
            At General Dynamics Electric Boat, I contribute to the development of advanced ship control systems.
					</p>
					<p className='text-gray-600 dark:text-primary-white-3'>
            Outside of my professional work, I enjoy building PCs and gaming.
					</p>
				</motion.div>
				<motion.div
					initial='hidden'
					variants={fadeIn({ direction: "right", delay: 0 })}
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className='m-auto px-4 py-2 ease-in '
				>
					<h2 className='pb-2 text-2xl'>
						Upsilon Pi Epsilon Honors Society - Vice President
					</h2>
					<p className='text-gray-600 dark:text-primary-white-3'>
            I served as Vice President of the University of Bridgeport Delta Chapter of Upsilon Pi Epsilon (UPE) Honors Society for 2 years. UPE is an international honors society dedicated to the computing and information disciplines, where I played a role in fostering academic excellence and community engagement.
					</p>
				</motion.div>
				<motion.div
					initial='hidden'
					variants={fadeIn({ direction: "right", delay: 0 })}
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className='mx-auto px-4 py-2 ease-in'
				>
					<div className='grid grid-cols-2'>
						<h2 className='col-span-2'>Education</h2>
						<p className='text-gray-600 dark:text-primary-white-3'>
							MS. Computer Science
						</p>
						<p className='text-gray-600 dark:text-primary-white-3'>
							University of Bridgeport
						</p>
						<p className='col-span-2 py-2 text-gray-600 dark:text-primary-white-3 md:col-span-1 md:col-start-2'>
							May 2024
						</p>
						<h3 className='col-span-2 text-2xl'>
							Relavent Courses
						</h3>
						<p className='text-gray-600 dark:text-primary-white-3'>
							Algorithms
						</p>
						<p className='text-gray-600 dark:text-primary-white-3'>
							OOP W/ Design Patterns
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
					src='/headshot.png'
					width={1200}
					height={1200}
					alt='/'
				/>
			</motion.div>
		</div>
	)
}
