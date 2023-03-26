import Image from "next/image"
import React from "react"

type SkillItemProps = {
	imgPath: string
	name: string
}

export default function SkillItem({ imgPath, name }: SkillItemProps) {
	return (
		<div className='rounded-xl p-3 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105 dark:shadow-none dark:ring-1 dark:ring-white md:p-6'>
			<div className='grid items-center justify-center gap-4 sm:grid-cols-1 md:grid-cols-2'>
				<div className='m-auto'>
					<Image
						src={imgPath}
						width={70}
						height={70}
						alt='/'
					/>
				</div>
				<div className='hidden flex-col items-center justify-center md:flex'>
					<h3>{name}</h3>
				</div>
			</div>
		</div>
	)
}
