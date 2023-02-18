import React from "react"
import SkillItem from "./SkillItem"

export default function Skills() {
	return (
		<div
			id='skills'
			className='w-full p-2 lg:h-screen'
		>
			<div className='mx-auto flex h-full max-w-[1240px] flex-col justify-center'>
				<p className='text-xl uppercase tracking-widest text-[#5651e5]'>
					Skills
				</p>
				<h2 className='py-4'>Tech I Use</h2>
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
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
