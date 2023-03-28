"use client"
import React from "react"
import ProjectItem from "./ProjectItem"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variants"

export default function Projects() {
	const projects = [
		{
			name: "Facial Recognition",
			points: [
				"Uses Principal Component Analysis to classifies face images",
				"Trained using the AT&T Face Dataset",
				"Learned how use opencv, analyze and compare data, as well as use PCA to reduce dimentionality of data",
			],
			projUrl:
				"https://github.com/Romeo923/CPEG-585-Computer-Vision/tree/master/Assignment%208/Assignment%208",
			tools: ["/skills/c.svg"],
		},
		{
			name: "Canvas CLI",
			points: [
				"Utilizes the Canvas LMS API to implement a command line interface to interact with Canvas",
				"Allows users to upload, edit, and remove assignments and files to/from Canvas",
				"Learned how to use the requests library to use APIs and fetch/send data",
			],
			projUrl: "https://github.com/Romeo923/Canvas-API",
			tools: ["/skills/python.png"],
		},
		{
			name: "Portfolio Website",
			points: [
				"First attempt at building a website",
				"Learned how to build and deploy websites",
				"Learned various concepts such as server-side rendering and client-side rendering",
			],
			projUrl: "https://github.com/Romeo923/portfolio-site",
			tools: [
				"/skills/nextjs.png",
				"/skills/Typescript.png",
				"/skills/tailwind.png",
			],
		},
		{
			name: "Minesweeper",
			points: [
				"Implemented Minesweeper - Group Project",
				"Uses Inheritance and Polymorphism to construct different game variations",
				"Capable of running multiple games concurrently",
				"Users can select various difficulty options and board types",
			],
			// projUrl: "https://github.com/jayners17/MinesweeperProject",
			tools: ["/skills/cpp.png"],
		},
	]

	return (
		<div className='mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-5 py-10 pt-24 md:px-10'>
			<motion.h1
				initial='hidden'
				variants={fadeIn({ direction: "down", delay: 0 })}
				whileInView={"show"}
				viewport={{ once: false, amount: 0.7 }}
				className='top-28 uppercase tracking-widest text-accent'
			>
				Projects
			</motion.h1>

			<motion.div
				initial='hidden'
				variants={fadeIn({ direction: "up", delay: 0 })}
				whileInView={"show"}
				viewport={{ once: false, amount: 0.7 }}
				className='grid w-full grid-cols-1 gap-8 overflow-hidden overflow-y-scroll md:grid-cols-2'
			>
				{projects.map(project => (
					<ProjectItem
						{...project}
						key={project.projUrl}
					/>
				))}
			</motion.div>
		</div>
	)
}
