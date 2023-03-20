"use client"
import React from "react"
import ProjectItem from "./ProjectItem"
import { motion } from "framer-motion"

export default function Projects() {
	const projects = [
		{
			name: "Facial Recognition",
			description: "FC Description",
			projUrl: "facialrecogniton",
		},
		{
			name: "Canvas CLI",
			description: "Canvas Description",
			projUrl: "canvascli",
		},
		{
			name: "Portfolio Website",
			description: "Site Description",
			projUrl: "portfolio",
		},
	]

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 pt-24 md:flex-row'
		>
			<div className='mx-auto h-full max-w-[1240px] px-2 '>
				<p className='text-xl uppercase tracking-widest text-accent'>
					Projects
				</p>
			</div>

			<div className='flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll'>
				{projects.map(project => (
					<ProjectItem
						{...project}
						key={project.projUrl}
					/>
				))}
			</div>
		</motion.div>
	)
}
