import Image from "next/image"
import React from "react"

type SkillItemProps = {
	imgPath: string
	name: string
}

export default function SkillItem({ imgPath, name }: SkillItemProps) {
	return (
		<div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
			<div className='grid grid-cols-2 items-center justify-center gap-4'>
				<div className='m-auto'>
					<Image
						src={imgPath}
						width={64}
						height={64}
						alt='/'
					/>
				</div>
				<div className='flex flex-col items-center justify-center'>
					<h3>{name}</h3>
				</div>
			</div>
		</div>
	)
}
