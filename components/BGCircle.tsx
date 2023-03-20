import React from "react"

export default function BoarderCircle() {
	return (
		<div className='relative z-0 flex items-center justify-center overflow-auto sm:overflow-visible'>
			<div className='absolute mt-72 h-[1000px] w-[1000px] animate-pulse rounded-full border border-accent opacity-20' />
			<div className='absolute mt-72 h-[800px] w-[800px] animate-pulse rounded-full border border-accent opacity-20' />
			<div className='absolute mt-72 h-[550px] w-[550px] animate-pulse rounded-full border border-accent opacity-20' />
			<div className='absolute mt-72 h-[400px] w-[400px] animate-ping rounded-full border border-accent ' />
		</div>
	)
}
