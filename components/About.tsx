import Image from "next/image"
import React from "react"

export default function About() {
	return (
		<div
			id='about'
			className='flex w-full snap-center items-center p-2 py-16 md:h-screen'
		>
			<div className='m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid'>
				<div className='col-span-2'>
					<p className='text-xl uppercase tracking-widest text-accent'>
						About
					</p>
					{/* <p className='py-2 text-gray-600 dark:text-primary-white-3'>
						IDK What to write here
					</p> */}
					<div className='my-4 rounded-xl px-4 py-4 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105 dark:rounded-md dark:bg-primary-black-1 dark:shadow-none dark:ring-1 dark:ring-white'>
						<h2 className='pb-5'>Bio</h2>
						<p className='text-gray-600 dark:text-primary-white-3'>
							I'm a driven and motivated grad student pursuing my
							Masters in C.S.
						</p>
						<p className='py-2 text-gray-600 dark:text-primary-white-3'>
							Throughout my journey, I have honed my skills in
							various programming languages, including JavaScript,
							Python, and Java, and I have used this knowledge to
							build web and mobile applications. I am excited to
							apply my skills and knowledge to new projects and
							challenges in the software engineering field. Please
							take a look at my portfolio, and feel free to
							contact me if you have any questions or if you would
							like to discuss a project.
						</p>
						<p className='text-gray-600 dark:text-primary-white-3'>
							As a self-taught front-end developer, I specialize
							in creating visually appealing and engaging user
							interfaces using HTML, CSS, and JavaScript. I am
							passionate about leveraging technology to create
							impactful solutions that can make a positive
							difference in people's lives.
						</p>
					</div>
					<div className='mx-auto rounded-xl px-4 py-4 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105 dark:rounded-md dark:bg-primary-black-1 dark:shadow-none dark:ring-1 dark:ring-white'>
						<div className='grid grid-cols-2'>
							<h3 className='col-span-2'>Education</h3>
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
					</div>
				</div>
				<div className='m-auto flex h-auto w-full items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105 dark:rounded-md dark:bg-primary-black-1 dark:shadow-none dark:ring-1 dark:ring-white'>
					<Image
						className='rounded-xl dark:rounded-md'
						src='/programming.jpg'
						width={1200}
						height={1200}
						alt='/'
					/>
				</div>
			</div>
		</div>
	)
}
