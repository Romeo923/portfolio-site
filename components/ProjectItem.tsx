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
		<div className='group relative flex h-auto w-full items-center justify-center rounded-xl from-accent to-accent2 p-4 shadow-xl shadow-gray-400 hover:bg-gradient-to-r dark:shadow-none dark:ring-1 dark:ring-white'>
			<Image
				src={imgPath}
				width={750}
				height={750}
				alt='/'
				className='rounded-xl group-hover:opacity-10'
			/>
			<div className='absolute top-[50%] left-[50%] hidden translate-x-[-50%] translate-y-[-50%] group-hover:block'>
				<h3 className='text-center text-2xl tracking-wider text-white'>
					{name}
				</h3>
				<p className='pt2 hidden pb-4 text-center text-white md:block'>
					{description}
				</p>
				<Link href={"/projects/" + projUrl}>
					<p className='my-4 cursor-pointer rounded-lg bg-white text-center text-lg font-bold text-gray-700 md:my-auto md:py-3'>
						More Info
					</p>
				</Link>
			</div>
		</div>
	)
}
