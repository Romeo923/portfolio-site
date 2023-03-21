import Image from "next/image"
import Link from "next/link"
import React from "react"

type ProjectItemProps = {
	name: string
	points: string[]
	projUrl: string
	tools: string[]
}

export default function ProjectItem({
	name,
	points,
	projUrl,
	tools,
}: ProjectItemProps) {
	return (
		<article className='flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 rounded-lg bg-primary-white-3 opacity-40 transition-opacity duration-200 hover:opacity-100'>
			<div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>{name}</h4>
				<div className='my-2 flex space-x-2'>
					{tools.map((tool, idx) => (
						<Image
							key={name + "-" + tool + "-" + idx}
							className='h-10 w-10 rounded-full'
							src={tool}
							width={500}
							height={500}
							alt='/'
						/>
					))}
				</div>
				<ul className='ml-5 list-disc space-y-4 text-lg'>
					{points.map((point, idx) => (
						<li key={idx}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	)
}
