"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { HiOutlineChevronDoubleUp } from "react-icons/hi"

export default function Contact() {
	const { systemTheme, theme, setTheme } = useTheme()
	const currTheme = theme === "system" ? systemTheme : theme ? theme : "light"

	return (
		<div
			id='contact'
			className='w-full lg:h-screen'
		>
			<div className='m-auto w-full max-w-[1240px] px-2 py-16'>
				<p className='text-xl uppercase tracking-widest text-[#5651e5]'>
					Contact
				</p>
				<h2 className='py-4'>Get In Touch</h2>
				<div className='grid gap-8 lg:grid-cols-5'>
					<div className='col-span-3 h-full w-full rounded-xl p-4 shadow-xl shadow-gray-400 lg:col-span-2'>
						<div className='h-full lg:p-4'>
							<div>
								<Image
									className='rounded-xl duration-300 ease-in hover:scale-105'
									src={
										currTheme === "light"
											? "logoLight.svg"
											: "logoDark.svg"
									}
									alt='/'
									width={200}
									height={200}
								/>
							</div>
							<div>
								<h2 className='py-2'>Romeo Capozziello</h2>
								<p>Software Engineer & Front-End Dev</p>
								<p className='py-4'>
									I am available for freelance or full-time
									positions. Contact me and let's talk.
								</p>
							</div>
							<div>
								<p className='pt-8 uppercase'>
									Connect With Me
								</p>
								<div className='flex items-center justify-between py-4'>
									<div className='social-icon p-6 hover:scale-110'>
										<FaLinkedinIn />
									</div>
									<div className='social-icon p-6 hover:scale-110'>
										<FaGithub />
									</div>
									<div className='social-icon p-6 hover:scale-110'>
										<AiOutlineMail />
									</div>
									<div className='social-icon p-6 hover:scale-110'>
										<BsFillPersonLinesFill />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-span-3 h-auto w-full rounded-lg shadow-xl shadow-gray-400 lg:p-4'>
						<div className='p-4'>
							<form>
								<div className='grid w-full gap-4 py-2 md:grid-cols-2'>
									<div className='flex flex-col'>
										<label className='py-2 text-sm uppercase'>
											Name
										</label>
										<input
											className='felx rounded-lg border-2 border-gray-300 p-3'
											type='text'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='py-2 text-sm uppercase'>
											Phone Number
										</label>
										<input
											className='flex rounded-lg border-2 border-gray-300 p-3'
											type='text'
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label className='py-2 text-sm uppercase'>
										Email
									</label>
									<input
										className='felx rounded-lg border-2 border-gray-300 p-3'
										type='email'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='py-2 text-sm uppercase'>
										Subject
									</label>
									<input
										className='felx rounded-lg border-2 border-gray-300 p-3'
										type='text'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='py-2 text-sm uppercase'>
										Message
									</label>
									<textarea
										className='rounded-lg border-2 border-gray-300 p-3'
										rows={10}
									></textarea>
								</div>
								<button className='mt-4 w-full p-4 text-gray-100'>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<Link href='/'>
						<div className='social-icon p-4 hover:scale-110'>
							<HiOutlineChevronDoubleUp
								className='m-auto text-[#5651e5]'
								size={30}
							/>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}
