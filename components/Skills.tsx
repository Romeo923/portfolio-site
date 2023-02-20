import React from "react"
import SkillItem from "./SkillItem"

export default function Skills() {
	return (
		<div
			id='skills'
			className='w-full p-2 lg:h-screen'
		>
			<div className='mx-auto flex h-full max-w-[1240px] flex-col justify-center'>
				<h1 className='pb-4 text-2xl uppercase tracking-widest text-accent'>
					Skills
				</h1>
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4 '>
					<SkillItem
						imgPath='/skills/cpp.png'
						name='C++'
					/>
					<SkillItem
						imgPath='/skills/c.svg'
						name='C#'
					/>
					<SkillItem
						imgPath='/skills/python.png'
						name='Python'
					/>
					<SkillItem
						imgPath='/skills/java.png'
						name='Java'
					/>
					<SkillItem
						imgPath='/skills/Typescript.png'
						name='Typescript'
					/>
					<SkillItem
						imgPath='/skills/react.png'
						name='React'
					/>
					<SkillItem
						imgPath='/skills/nextjs.png'
						name='Next.js'
					/>
					<SkillItem
						imgPath='/skills/html.png'
						name='HTML'
					/>
					<SkillItem
						imgPath='/skills/tailwind.png'
						name='Tailwind CSS'
					/>
					<SkillItem
						imgPath='/skills/github.svg'
						name='GitHub'
					/>
				</div>
			</div>
		</div>
	)
}
