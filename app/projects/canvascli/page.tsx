import React from "react"

export default function page() {
	return (
		<div className='m-auto grid h-screen w-full grid-cols-2 items-center justify-center gap-8 py-20'>
			<div className='rounded-xl border px-4 py-4 shadow-xl shadow-gray-400 duration-300 ease-in dark:rounded-md dark:bg-primary-black-1 dark:shadow-none dark:ring-1 dark:ring-white'>
				<h3>Project Description</h3>
				<p>Lorem ipsum ...</p>
			</div>
			<div className='rounded-xl border shadow-xl shadow-gray-400 duration-300 ease-in dark:rounded-md dark:bg-primary-black-1 dark:shadow-none dark:ring-1 dark:ring-white'>
				<h3>Tech Used</h3>
				<ul>
					<li>Python</li>
					<li>Canvas Rest API</li>
					<li>Python</li>
					<li>Python</li>
				</ul>
			</div>
		</div>
	)
}
