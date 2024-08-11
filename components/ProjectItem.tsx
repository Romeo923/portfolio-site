import Image from "next/image"
import Link from "next/link"
import React from "react"

type ProjectItemProps = {
	name: string
	points: string[]
	projUrl?: string
	tools: string[]
}

export default function ProjectItem({
	name,
	points,
	projUrl,
	tools,
}: ProjectItemProps) {
	return (
		<article className='mx-2 my-4 flex h-full flex-col start rounded-lg p-5 shadow-lg shadow-gray-400 duration-300 ease-in dark:shadow-none dark:ring-1 dark:ring-white md:mx-4'>
			<div className='px-0 md:px-10'>
        <div className='flex justify-between'>
          <span className='text-3xl font-light sm:text-4xl'>{name}</span>
          {projUrl ? (
            <Link
              href={projUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-lg ring h-full py-2 px-2 justify-end dark:ring-accent ring-accent2'
            >
              GitHub
            </Link>
          ) : (
            <></>
          )}
        </div>
				<div className='my-2 flex space-x-2 align-items-center'>
					{tools.map((tool, idx) => (
						<Image
							key={name + "-" + tool + "-" + idx}
							className='h-10 w-10 rounded-sm'
							src={tool}
							width={500}
							height={500}
							alt='/'
						/>
					))}
				</div>
				<ul className='ml-5 list-disc space-y-4 text-xs md:text-lg'>
					{points.map((point, idx) => (
						<li key={idx}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	)
}
