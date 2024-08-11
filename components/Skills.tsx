"use client"
import React from "react"
import SkillItem from "./SkillItem"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/variants"
import { useTheme } from "next-themes"

export default function Skills() {
	const { systemTheme, theme } = useTheme()
	const currTheme = theme === "system" ? systemTheme : theme

	const mySkills = [
		{ imgPath: "/skills/cpp.png", name: "C++" },
		{
			imgPath:
				currTheme === "light"
					? "/skills/rust.png"
					: "/skills/rustWhite.png",
			name: "Rust",
		},
		{ imgPath: "/skills/python.png", name: "Python" },
		{ imgPath: "/skills/git.png", name: "Git" },
		{
			imgPath:
				currTheme === "light"
					? "/skills/github.svg"
					: "/skills/githubWhite.png",
			name: "GitHub",
		},
		{ imgPath: "/skills/linux.png", name: "Linux" },
		{ imgPath: "/skills/java.png", name: "Java" },
		{ imgPath: "/skills/c.svg", name: "C#" },
		{ imgPath: "/skills/Typescript.png", name: "Typescript" },
		{ imgPath: "/skills/react.png", name: "React" },
		{ imgPath: "/skills/nextjs.png", name: "Next.js" },
		{ imgPath: "/skills/html.png", name: "HTML" },
		{ imgPath: "/skills/tailwind.png", name: "Tailwind CSS" },
	]

	return (
		<motion.div
			key='skills'
			className='h-screen w-full p-2'
		>
			<div className='mx-auto flex h-full max-w-[1240px] flex-col justify-center'>
				<motion.h1
					initial='hidden'
					variants={fadeIn({ direction: "right", delay: 0 })}
					whileInView={"show"}
					viewport={{ once: false, amount: 0.7 }}
					className='pb-4 uppercase tracking-widest text-accent'
				>
					Skills
				</motion.h1>
				<div className='grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 '>
					{mySkills.map((skill, idx) => (
						<motion.div
							initial='hidden'
							variants={fadeIn({
								direction:
									Math.floor(Math.random() * 10) % 2 === 0
										? "down"
										: "up",
								delay:
									(0.2 * Math.floor(Math.random() * 10)) / 10,
							})}
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							key={skill.name}
						>
							<SkillItem {...skill} />
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	)
}
