"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { BsPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

export default function Navbar() {
	const [nav, setNav] = useState(true)

	const handleNav = () => {
		setNav(!nav)
	}

	return (
		<div className="fixed w-full h-20 shadow-xl z-[100]">
			<div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
				<Image
					src="/favicon.ico"
					alt="/"
					width="50"
					height="50"
				/>
				<div>
					<ul className="hidden md:flex">
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Home
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								About
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Skills
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Projects
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Contact
							</li>
						</Link>
					</ul>
					<div
						onClick={handleNav}
						className="cursor-pointer md:hidden"
					>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			<div
				className={
					nav
						? "fixed top-0 left-0 w-full h-screen bg-black/70 md:hidden"
						: ""
				}
			>
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="flex items-center justify-between w-full">
							<Image
								src="/favicon.ico"
								alt="/"
								width="75"
								height="35"
							/>
							<div
								onClick={handleNav}
								className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="my-4 border-b border-gray-300">
							<p className="w-[85%] md:w-[90%] py-4">
								Lets Build Something Legendary Together
							</p>
						</div>
					</div>
					<div className="flex flex-col py-4">
						<ul className="uppercase">
							<Link href="/">
								<li className="py-4 text-sm">Home</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">About</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">Skills</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">Projects</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">Contacts</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest text-[#5651e5]">
								Let's Connect
							</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
								<div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
									<FaLinkedinIn />
								</div>
								<div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
									<FaGithub />
								</div>
								<div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
									<AiOutlineMail />
								</div>
								<div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
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
