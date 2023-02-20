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

	if (!theme) {
		setTheme("light")
	}

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
		<div
			className={
				shadow
					? "fixed z-[100] h-20 w-full bg-primary-light shadow-xl duration-300 ease-in dark:bg-primary-black-1 dark:shadow-sm dark:shadow-primary-white-3"
					: "fixed z-[100] h-20 w-full bg-primary-light duration-300 ease-in dark:bg-primary-black-1"
			}
		>
			<div className='flex h-full w-full items-center justify-between px-2 2xl:px-16'>
				<a href='/'>
					<Image
						src={
							currTheme === "light"
								? "logoLight.svg"
								: "logoDark.svg"
						}
						alt='/'
						width='75'
						height='75'
					/>
				</a>
				<div>
					<ul className='hidden md:flex'>
						<a href='/#home'>
							<li className='ml-10 text-sm uppercase hover:border-b hover:border-b-black dark:hover:border-b-white'>
								Home
							</li>
						</a>
						<a href='/#about'>
							<li className='ml-10 text-sm uppercase hover:border-b hover:border-b-black dark:hover:border-b-white'>
								About
							</li>
						</a>
						<a href='/#skills'>
							<li className='ml-10 text-sm uppercase hover:border-b hover:border-b-black dark:hover:border-b-white'>
								Skills
							</li>
						</a>
						<a href='/#projects'>
							<li className='ml-10 text-sm uppercase hover:border-b hover:border-b-black dark:hover:border-b-white'>
								Projects
							</li>
						</a>
						<a href='/#contact'>
							<li className='ml-10 text-sm uppercase hover:border-b hover:border-b-black dark:hover:border-b-white'>
								Contact
							</li>
						</a>
						<div className='ml-10 mr-5 text-sm uppercase'>
							{currTheme === "light" ? (
								<li
									onClick={() => {
										setTheme("dark")
									}}
								>
									<RiMoonFill size={20} />
								</li>
							) : (
								<li
									onClick={() => {
										setTheme("light")
									}}
								>
									<RiSunFill
										color='white'
										size={20}
									/>
								</li>
							)}
						</div>
					</ul>
					<div
						onClick={handleNav}
						className='cursor-pointer md:hidden'
					>
						<AiOutlineMenu
							size={25}
							color={currTheme === "light" ? "black" : "white"}
						/>
					</div>
				</div>
			</div>
			<div
				className={
					nav
						? "fixed top-0 left-0 h-screen w-full bg-black/70 text-primary-dark dark:bg-primary-black-3/70 dark:text-primary-light md:hidden"
						: ""
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
							<a href='/'>
								<Image
									src={
										currTheme === "light"
											? "logoLight.svg"
											: "logoDark.svg"
									}
									alt='/'
									width='120'
									height='120'
									className='cursor-pointer'
								/>
							</a>
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
								<div className='social-icon dark:shadow-none dark:ring-1 dark:ring-white'>
									<FaLinkedinIn />
								</div>
								<div className='social-icon dark:shadow-none dark:ring-1 dark:ring-white'>
									<FaGithub />
								</div>
								<div className='social-icon dark:shadow-none dark:ring-1 dark:ring-white'>
									<AiOutlineMail />
								</div>
								<div className='social-icon dark:shadow-none dark:ring-1 dark:ring-white'>
									<BsPersonLinesFill />
								</div>
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
		</div>
	)
}
