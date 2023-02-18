import Image from "next/image"
import React from "react"

export default function About() {
	return (
		<div
			id='about'
			className='flex w-full items-center p-2 py-16 md:h-screen'
		>
			<div className='m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid'>
				<div className='col-span-2'>
					<p className='text-xl uppercase tracking-widest text-[#5651e5]'>
						About
					</p>
					<h2 className='py-4'>Who I Am</h2>
					<p className='py-2 text-gray-600'>Bio</p>
					<p className='py-2 text-gray-600'>More Bio</p>
				</div>
				<div className='m-auto flex h-auto w-full items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105'>
					<Image
						className='rounded-xl'
						src='/vercel.svg'
						width={250}
						height={250}
						alt='/'
					/>
				</div>
			</div>
		</div>
	)
}
