import React from "react"
import ProjectItem from "./ProjectItem"

export default function Projects() {
	return (
		<div
			id='projects'
			className='w-full p-16 dark:bg-primary-black-2 dark:shadow-md dark:shadow-gray-400 lg:h-screen'
		>
			<div className='mx-auto h-full max-w-[1240px] px-2 py-16'>
				<p className='text-xl uppercase tracking-widest text-accent'>
					Projects
				</p>
				<h2 className='pb-3'>What I've Built</h2>
				<div className='grid gap-8 md:grid-cols-2'>
					<ProjectItem
						name='Facial Recognition'
						description='Used PCA to classify face images from the AT&T Face Dataset'
						imgPath='/programming.jpg'
						projUrl='project1'
					/>
					<ProjectItem
						name='Portfolio Website'
						description='Used Next.js and Tailwind CSS to build a portfolio website'
						imgPath='/programming.jpg'
						projUrl='project1'
					/>
					<ProjectItem
						name='Project 3'
						description='Project Description'
						imgPath='/programming.jpg'
						projUrl='project1'
					/>
				</div>
			</div>
		</div>
	)
}
