"use client"
import React from "react"
import ProjectItem from "./ProjectItem"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variants"
import { useTheme } from "next-themes"

export default function Projects() {
	const { systemTheme, theme } = useTheme()
	const currTheme = theme === "system" ? systemTheme : theme

	const projects = [
		{
			name: "Music Library Manager CLI",
			points: [
				"Command line interface for listening to music",
				"Scan directories for music files",
				"Create and manage music playlists",
				"Play/Queue songs and playlists",
			],
			projUrl:
				"https://github.com/Romeo923/music-lib-manager",
			tools: [
        currTheme == 'light'
          ? "/skills/rust.png"
          : "/skills/rustWhite.png"
      ],
		},
		{
			name: "Hackathon Project",
			points: [
				"A social media automation tool developed during a hackathon.",
				"Led a team of 4 in developing the project using NextJS and TypeScript.",
				"Utilized ChatGPT and Twitter APIs to generate and schedule social media posts for companies/businesses.",
				"Allows users to fine tune post intent, tone, and audience.",
			],
			projUrl: "https://github.com/BeamBounty/UB-Hackathon",
			tools: [
				"/skills/nextjs.png",
				"/skills/Typescript.png",
				"/skills/tailwind.png",
			],
		},
		{
			name: "Facial Recognition",
			points: [
				"Utilizes Principal Component Analysis (PCA) for classifying face images.",
				"Trained using the AT&T Face Dataset",
				"Gained experience with OpenCV for data analysis and PCA for dimensionality reduction.",
			],
			projUrl:
				"https://github.com/Romeo923/CPEG-585-Computer-Vision/tree/master/Assignment%208/Assignment%208",
			tools: ["/skills/c.svg"],
		},
		{
			name: "Canvas CLI",
			points: [
				"Created command-line interface for managing Canvas assignments in python using the Canvas API",
				"Allows users to upload, edit, and remove assignments and files to/from Canvas",
			],
			projUrl: "https://github.com/Romeo923/Canvas-API",
			tools: ["/skills/python.png"],
		},
		{
			name: "Minesweeper",
			points: [
				"Developed Minesweeper as a group project.",
				"Utilizes inheritance and polymorphism to construct different game variations",
				"Supports running multiple concurrent instances of the game.",
				"Users can select various difficulty options and board types",
			],
			// projUrl: "https://github.com/jayners17/MinesweeperProject", // repo is private
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
