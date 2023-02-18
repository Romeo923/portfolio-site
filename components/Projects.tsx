import React from "react"
import ProjectItem from "./ProjectItem"

export default function Projects() {
	return (
		<div
			id='projects'
			className='w-full'
		>
			<div className='mx-auto max-w-[1240px] px-2 py-16'>
				<p className='text-xl uppercase tracking-widest text-[#5651e5]'>
					Projects
				</p>
				<h2>What I've Built</h2>
				<div className='grid gap-8 md:grid-cols-2'>
					<ProjectItem
						name='Project 1'
						description='Project Description'
						imgPath='next.svg'
						projUrl='project1'
					/>
					<ProjectItem
						name='Project 2'
						description='Project Description'
						imgPath='next.svg'
						projUrl='project1'
					/>
					<ProjectItem
						name='Project 3'
						description='Project Description'
						imgPath='next.svg'
						projUrl='project1'
					/>
				</div>
			</div>
		</div>
	)
}
