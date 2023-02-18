"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { BsPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

export default function Navbar() {
	const [nav, setNav] = useState(false)
	const [shadow, setShadow] = useState(false)

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
					? "fixed z-[100] h-20 w-full shadow-xl"
					: "fixed z-[100] h-20 w-full"
			}
		>
			<div className='flex h-full w-full items-center justify-between px-2 2xl:px-16'>
				<Link href='/'>
					<Image
						src='/favicon.ico'
						alt='/'
						width='50'
						height='50'
					/>
				</Link>
				<div>
					<ul className='hidden md:flex'>
						<a href='/#home'>
							<li className='ml-10 text-sm uppercase hover:border-b'>
								Home
							</li>
						</a>
						<a href='/#about'>
							<li className='ml-10 text-sm uppercase hover:border-b'>
								About
							</li>
						</a>
						<a href='/#skills'>
							<li className='ml-10 text-sm uppercase hover:border-b'>
								Skills
							</li>
						</a>
						<a href='/#projects'>
							<li className='ml-10 text-sm uppercase hover:border-b'>
								Projects
							</li>
						</a>
						<a href='/#contact'>
							<li className='ml-10 text-sm uppercase hover:border-b'>
								Contact
							</li>
						</a>
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
						? "fixed top-0 left-0 h-screen w-full bg-black/70 md:hidden"
						: ""
				}
			>
				<div
					className={
						nav
							? "fixed left-0 top-0 h-screen w-[75%] bg-[#ecf0f3] p-10 duration-500 ease-in sm:w-[60%] md:w-[45%]"
							: "fixed left-[-100%] top-0 p-10 duration-500 ease-in"
					}
				>
					<div>
						<div className='flex w-full items-center justify-between'>
							<Image
								src='/favicon.ico'
								alt='/'
								width='75'
								height='35'
							/>
							<div
								onClick={handleNav}
								className='cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400'
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
							<Link href='/'>
								<li className='py-4 text-sm'>Home</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>About</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>Skills</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>Projects</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>Contacts</li>
							</Link>
						</ul>
						<div className='pt-40'>
							<p className='uppercase tracking-widest text-[#5651e5]'>
								Let&apos;s Connect
							</p>
							<div className='my-4 flex w-full items-center justify-between sm:w-[80%]'>
								<div className='social-icon'>
									<FaLinkedinIn />
								</div>
								<div className='social-icon'>
									<FaGithub />
								</div>
								<div className='social-icon'>
									<AiOutlineMail />
								</div>
								<div className='social-icon'>
									<BsPersonLinesFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
