"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { BsPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { RiMoonFill, RiSunFill } from "react-icons/ri"

export default function Navbar() {
	const [nav, setNav] = useState(false)
	const [shadow, setShadow] = useState(false)
	const { systemTheme, theme, setTheme } = useTheme()

	const currTheme = theme === "system" ? systemTheme : theme

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true)
			} else {
				setShadow(false)
			}
		}
		window.addEventListener("scroll", handleShadow)
	}, [])

	const handleNav = () => {
		setNav(nav => !nav)
	}

	return (
		<nav
			className={
				shadow
					? "fixed top-0 z-[100] h-20 w-full bg-primary-light shadow-xl duration-300 ease-in dark:bg-primary-black-1 dark:shadow-sm dark:shadow-primary-white-3"
					: "fixed top-0 z-[100] h-20 w-full bg-primary-light duration-300 ease-in dark:bg-primary-black-1"
			}
		>
			<div className='flex h-full w-full items-center justify-between px-2 2xl:px-16'>
				<Link href='/'>
					<Image
						src={
							currTheme === "light"
								? "/logoLight.svg"
								: "/logoDark.svg"
						}
						alt='/'
						width='75'
						height='75'
					/>
				</Link>
				<div>
					<ul className='hidden md:flex'>
						<li className='ml-10 text-sm uppercase hover:border-b hover:border-b-black dark:hover:border-b-white'>
							<a href='/#home'>Home</a>
						</li>
						<li className='ml-10 text-sm uppercase hover:border-b hover:border-b-black dark:hover:border-b-white'>
							<a href='/#about'>About</a>
						</li>
						<li className='ml-10 text-sm uppercase hover:border-b hover:border-b-black dark:hover:border-b-white'>
							<a href='/#skills'>Skills</a>
						</li>
						<li className='ml-10 text-sm uppercase hover:border-b hover:border-b-black dark:hover:border-b-white'>
							<a href='/#projects'>Projects</a>
						</li>
						<li className='ml-10 text-sm uppercase hover:border-b hover:border-b-black dark:hover:border-b-white'>
							<a href='/#contact'>Contact</a>
						</li>
						<div className='ml-10 mr-5 text-sm uppercase'>
							<li>
								{currTheme === "light" ? (
									<RiMoonFill
										size={20}
										onClick={() => setTheme("dark")}
									/>
								) : (
									<RiSunFill
										size={20}
										onClick={() => setTheme("light")}
									/>
								)}
							</li>
						</div>
					</ul>
					<div
						onClick={handleNav}
						className='cursor-pointer md:hidden'
					>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			<div
				className={
					nav
						? "fixed top-0 left-0 h-screen w-full bg-black/70 text-primary-dark dark:bg-primary-black-3/70 dark:text-primary-light md:hidden"
						: "invisible"
				}
			>
				<div
					className={
						nav
							? "fixed left-0 top-0 h-screen w-[75%] bg-primary-light p-10 duration-300 ease-in dark:bg-primary-black-1 sm:w-[60%] md:w-[45%]"
							: "fixed left-[-100%] top-0 p-10 duration-300 ease-in"
					}
				>
					<div>
						<div className='flex w-full items-center justify-between'>
							<Link
								scroll={false}
								href='/'
							>
								<Image
									src={
										currTheme === "light"
											? "/logoLight.svg"
											: "/logoDark.svg"
									}
									alt='/'
									width='120'
									height='120'
									className='cursor-pointer'
								/>
							</Link>
							<div
								onClick={handleNav}
								className='cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 dark:shadow-none dark:ring-1 dark:ring-white'
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className='my-4 border-b border-gray-300'>
							<p className='w-[85%] py-4 md:w-[90%]'>
								Lets Build Something Legendary Together
							</p>
						</div>
					</div>
					<div className='flex flex-col py-4'>
						<ul className='uppercase'>
							<a
								href='/#home'
								onClick={handleNav}
							>
								<li className='py-4 text-sm'>Home</li>
							</a>
							<a
								href='/#about'
								onClick={handleNav}
							>
								<li className='py-4 text-sm'>About</li>
							</a>
							<a
								href='/#skills'
								onClick={handleNav}
							>
								<li className='py-4 text-sm'>Skills</li>
							</a>
							<a
								href='/#projects'
								onClick={handleNav}
							>
								<li className='py-4 text-sm'>Projects</li>
							</a>
							<a
								href='/#contact'
								onClick={handleNav}
							>
								<li className='py-4 text-sm'>Contacts</li>
							</a>
						</ul>
						<div className='pt-40'>
							<p className='uppercase tracking-widest text-accent'>
								Let&apos;s Connect
							</p>
							<div className='my-4 flex w-full items-center justify-between sm:w-[80%]'>
								<Link
									target='_blank'
									rel='noopener noreferrer'
									href='https://linkedin.com/in/romeo923/'
									className='social-icon dark:shadow-none dark:ring-1 dark:ring-white'
								>
									<FaLinkedinIn />
								</Link>
								<Link
									target='_blank'
									rel='noopener noreferrer'
									href='https://github.com/Romeo923'
									className='social-icon dark:shadow-none dark:ring-1 dark:ring-white'
								>
									<FaGithub />
								</Link>
								<Link
									target='_blank'
									rel='noopener noreferrer'
									href='mailto:romeo.capozziello@gmail.com'
									className='social-icon dark:shadow-none dark:ring-1 dark:ring-white'
								>
									<AiOutlineMail />
								</Link>
								<Link
									target='_blank'
									rel='noopener noreferrer'
									href='/resume.pdf'
									className='social-icon dark:shadow-none dark:ring-1 dark:ring-white'
								>
									<BsPersonLinesFill />
								</Link>
								{currTheme === "light" ? (
									<div
										className='social-icon dark:shadow-none dark:ring-1 dark:ring-white'
										onClick={() => {
											setTheme("dark")
										}}
									>
										<RiMoonFill size={20} />
									</div>
								) : (
									<div
										className='social-icon dark:shadow-none dark:ring-1 dark:ring-white'
										onClick={() => {
											setTheme("light")
										}}
									>
										<RiSunFill size={20} />
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}
