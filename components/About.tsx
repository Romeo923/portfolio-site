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
					className='my-4 px-4 pt-2 ease-in '
				>
					<h2 className='pb-5'>Who Am I?</h2>
					<p className='text-gray-600 dark:text-primary-white-3'>
						Hi, I&apos;m Romeo Capozziello, an Embedded Software Engineer with a Master&apos;s in Computer Science.
            I&apos;m passionate about developing innovative solutions and optimizing complex systems.
					</p>
					<p className='text-gray-600 dark:text-primary-white-3'>
            I have strong experience in C++ and excel at tackling challenging problems. I use every opportunity to learn and find ways to improve upon my skill set.
					</p>
					<p className='text-gray-600 dark:text-primary-white-3'>
            Outside of my professional work, I enjoy learning about new tech, building PCs, and gaming.
					</p>
				</motion.div>
				<motion.div
					initial='hidden'
					variants={fadeIn({ direction: "right", delay: 0 })}
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className='my-4 px-4 ease-in '
				>
					<div className='grid grid-cols-2'>
            <h2 className='pb-5 col-span-2'>Experience</h2>
						<h3 className='text-gray-900 dark:text-primary-white-1 col-span-2 md:col-span-1'>
							General Dynamics Electric Boat
						</h3>
						<p className='text-gray-600 dark:text-primary-white-3 col-span-2 md:col-span-1'>
							August 2023 - Present
						</p>
						<p className='col-span-2 text-gray-600 dark:text-primary-white-3 md:col-span-1'>
							Embedded Software Engineer
						</p>
          </div>
				</motion.div>
				<motion.div
					initial='hidden'
					variants={fadeIn({ direction: "right", delay: 0 })}
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className='my-4 px-4 ease-in '
				>
          <p className='text-gray-600 dark:text-primary-white-3'>
            At GDEB, my role is to support efforts in designing, developing, and testing software for ship control systems.
          </p>
          <p className='text-gray-600 dark:text-primary-white-3'>
            Within my first year, I was able to quickly integrate myself with the team, become acquainted with systems and procedures, and identify several areas of improvement and opportunities for automation.
          </p>
          <p className='text-gray-600 dark:text-primary-white-3'>
            I received an Operational Excellence Award for completely overhauling the test team workflow by automating redundant tasks and drastically improving tools utilized by the test team.
          </p>
				</motion.div>
				<motion.div
					initial='hidden'
					variants={fadeIn({ direction: "right", delay: 0 })}
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className='my-4 px-4 ease-in '
				>
          <p className='text-gray-600 dark:text-primary-white-3'>
            In addition, I was tasked with assisting a project that was falling behind to get it back on schedule. I wrote a script to read our local database files and generate code for each subsystem based on that data.
          </p>
          <p className='text-gray-600 dark:text-primary-white-3'>
            This script reduced the number of people required for this task,  allowing members to dedicate more time to various other areas of the project.
          </p>
          <p className='text-gray-600 dark:text-primary-white-3'>
            While working here, I&apos;ve improved my skills in C++ and git as well as gained experience working in a professional team environment.
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
						<h2 className='pb-5 col-span-2'>Education</h2>
						<h3 className='text-gray-900 dark:text-primary-white-1'>
							MS. Computer Science
						</h3>
						<p className='text-gray-600 dark:text-primary-white-3'>
							University of Bridgeport
						</p>
						<p className='col-span-2 py-2 text-gray-600 dark:text-primary-white-3 md:col-span-1 md:col-start-2'>
							May 2024
						</p>
						<h3 className='pb-2 col-span-2 text-2xl'>
							Relevant Courses
						</h3>
						<p className='text-gray-600 dark:text-primary-white-3'>
							Algorithms
						</p>
						<p className='text-gray-600 dark:text-primary-white-3'>
							Cloud Computing
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
					</div>
				</motion.div>
				<motion.div
					initial='hidden'
					variants={fadeIn({ direction: "right", delay: 0 })}
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className='m-auto px-4 py-2 ease-in'
				>
					<h2 className='pb-2 text-2xl'>
						Upsilon Pi Epsilon Honors Society - Vice President
					</h2>
					<p className='text-gray-600 dark:text-primary-white-3'>
            I served as Vice President of the University of Bridgeport Delta Chapter of Upsilon Pi Epsilon (UPE) Honors Society for 2 years. UPE is an international honors society dedicated to the computing and information disciplines, where I played a role in fostering academic excellence and community engagement.
					</p>
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
