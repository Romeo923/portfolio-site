"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import React, { useRef } from "react"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { HiOutlineChevronDoubleUp } from "react-icons/hi"

export default function Contact() {
	const { systemTheme, theme } = useTheme()
	const currTheme = theme === "system" ? systemTheme : theme

	const nameRef = useRef<HTMLInputElement>(null)
	const phoneRef = useRef<HTMLInputElement>(null)
	const emailRef = useRef<HTMLInputElement>(null)
	const subjectRef = useRef<HTMLInputElement>(null)
	const messageRef = useRef<HTMLTextAreaElement>(null)

	const submit = () => {
		console.log({
			name: nameRef.current?.value,
			phone: phoneRef.current?.value,
			email: emailRef.current?.value,
			subject: subjectRef.current?.value,
			message: messageRef.current?.value,
		})
	}
	return (
		<div
			id='contact'
			className='w-full p-2 py-16 lg:h-screen'
		>
			<div className='m-auto w-full max-w-[1240px] px-2 py-16'>
				<p className='text-xl uppercase tracking-widest text-accent'>
					Contact
				</p>
				<h2 className='py-4'>Get In Touch</h2>
				<div className='grid gap-8 lg:grid-cols-5'>
					<div className='col-span-3 h-full w-full rounded-xl p-4 shadow-md shadow-gray-400 lg:col-span-2'>
						<div className='h-full lg:p-4'>
							<div>
								<Image
									className='rounded-xl duration-300 ease-in hover:scale-105'
									src={
										currTheme === "light"
											? "/logoLight.svg"
											: "/logoDark.svg"
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
									I am current available for freelance or
									full-time positions. Contact me and let's
									talk.
								</p>
							</div>
							<div>
								<p className='pt-8 uppercase'>
									Connect With Me
								</p>
								<div className='flex items-center justify-between py-4'>
									<Link
										target='_blank'
										rel='noopener noreferrer'
										href='https://linkedin.com/in/romeo923/'
										className='social-icon p-6 hover:scale-110'
									>
										<FaLinkedinIn />
									</Link>
									<Link
										target='_blank'
										rel='noopener noreferrer'
										href='https://github.com/Romeo923'
										className='social-icon p-6 hover:scale-110'
									>
										<FaGithub />
									</Link>
									<Link
										target='_blank'
										rel='noopener noreferrer'
										href='mailto:romeo.capozziello@gmail.com'
										className='social-icon p-6 hover:scale-110'
									>
										<AiOutlineMail />
									</Link>
									<Link
										target='_blank'
										rel='noopener noreferrer'
										href='/resume.pdf'
										className='social-icon p-6 hover:scale-110'
									>
										<BsFillPersonLinesFill />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className='col-span-3 h-auto w-full rounded-lg shadow-md shadow-gray-400 lg:p-4'>
						<div className='p-4'>
							<form>
								<div className='grid w-full gap-4 py-2 md:grid-cols-2'>
									<div className='flex flex-col'>
										<label className='py-2 text-sm uppercase'>
											Name
										</label>
										<input
											ref={nameRef}
											className='felx rounded-lg border-2 border-gray-300 p-3'
											type='text'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='py-2 text-sm uppercase'>
											Phone Number
										</label>
										<input
											ref={phoneRef}
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
										ref={emailRef}
										className='felx rounded-lg border-2 border-gray-300 p-3'
										type='email'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='py-2 text-sm uppercase'>
										Subject
									</label>
									<input
										ref={subjectRef}
										className='felx rounded-lg border-2 border-gray-300 p-3'
										type='text'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='py-2 text-sm uppercase'>
										Message
									</label>
									<textarea
										ref={messageRef}
										className='rounded-lg border-2 border-gray-300 p-3'
										rows={10}
									></textarea>
								</div>
								<button
									onClick={submit}
									className='mt-4 w-full p-4 text-gray-100 shadow-none'
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<a href='/#home'>
						<div className='social-icon p-4 shadow-none hover:scale-110 dark:shadow-none'>
							<HiOutlineChevronDoubleUp
								className='m-auto text-accent'
								size={50}
							/>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}
