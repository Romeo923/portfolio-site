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
				<h2 className='py-4'>What I Can Do</h2>
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
					<SkillItem
						imgPath='thirteen.svg'
						name='Skill 1'
					/>
					<SkillItem
						imgPath='thirteen.svg'
						name='Skill 2'
					/>
					<SkillItem
						imgPath='thirteen.svg'
						name='Skill 3'
					/>
					<SkillItem
						imgPath='thirteen.svg'
						name='Skill 4'
					/>
					<SkillItem
						imgPath='thirteen.svg'
						name='Skill 5'
					/>
				</div>
			</div>
		</div>
	)
}
