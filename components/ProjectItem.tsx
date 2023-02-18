import Image from "next/image"
import Link from "next/link"
import React from "react"

type ProjectItemProps = {
	name: string
	description: string
	imgPath: string
	projUrl: string
}

export default function ProjectItem({
	name,
	description,
	imgPath,
	projUrl,
}: ProjectItemProps) {
	return (
		<div className='group relative flex h-auto w-full items-center justify-center rounded-xl from-[#5651e5] to-[#709dff] p-4 shadow-xl shadow-gray-400 hover:bg-gradient-to-r'>
			<Image
				src={imgPath}
				width={500}
				height={500}
				alt='/'
				className='rounded-xl group-hover:opacity-10'
			/>
			<div className='absolute top-[50%] left-[50%] hidden translate-x-[-50%] translate-y-[-50%] group-hover:block'>
				<h3 className='text-center text-2xl tracking-wider text-white'>
					{name}
				</h3>
				<p className='pt2 pb-4 text-center text-white'>{description}</p>
				<Link href={projUrl}>
					<p className='cursor-pointer rounded-lg bg-white py-3 text-center text-lg font-bold text-gray-700'>
						More Info
					</p>
				</Link>
			</div>
		</div>
	)
}
