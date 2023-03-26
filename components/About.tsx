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
						Hi, my name is Romeo Capozziello. I&apos;m a driven and
						motivated grad student pursuing my Masters in C.S.
					</p>
					<p className='py-2 text-gray-600 dark:text-primary-white-3'>
						I enjoy coding and problem solving and am proficient in
						languages like C++ and Python. I work on campus as a
						Math and Compuer Science Tutor as well as a Teaching
						Assistant for a few CS classes. I&apos;m a self-taught
						web developer with this website being my first real
						front-end project.
					</p>
					<p className='text-gray-600 dark:text-primary-white-3'>
						I build PCs in my free time. I&apos;ve helped build
						several systems for my friends and am currently working
						on a custom watercooled system for myself.
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
						I&apos;ve been vice president for the University of
						Bridgeport Delta Chapter of UPE for 2 semesters. UPE is
						an international honors society for the computing and
						information disciplines.
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
							Expected Dec. 2023
						</p>
						<h3 className='col-span-2 text-2xl'>
							Relavent Courses
						</h3>
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
