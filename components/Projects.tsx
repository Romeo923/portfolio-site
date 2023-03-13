import React from "react"
import ProjectItem from "./ProjectItem"

export default function Projects() {
	return (
		<div
			id='projects'
			className='h-screen w-full snap-center p-16'
		>
			<div className='mx-auto h-full max-w-[1240px] px-2 py-16'>
				<p className='text-xl uppercase tracking-widest text-accent'>
					Projects
				</p>
				<h2 className='pb-3'>What I&apos;ve Built</h2>
				<div className='grid gap-8 md:grid-cols-2'>
					<ProjectItem
						name='Facial Recognition'
						description='Used PCA to classify face images from the AT&T Face Dataset'
						imgPath='/programming.jpg'
						projUrl='facialrecognition'
					/>
					<ProjectItem
						name='Portfolio Website'
						description='Used Next.js and Tailwind CSS to build a portfolio website'
						imgPath='/programming.jpg'
						projUrl='portfolio'
					/>
					<ProjectItem
						name='Canvas CLI'
						description='Used Python and the Canvas API to make a command line interface for Canvas'
						imgPath='/programming.jpg'
						projUrl='canvascli'
					/>
				</div>
			</div>
		</div>
	)
}
