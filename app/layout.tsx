"use client"

import Navbar from "@/components/Navbar"
import Providers from "@/components/Providers"
import "./globals.css"
import { useState, useEffect } from "react"

// export const metadata = {
// 	title: "Romeo Capozziello",
// }

type Props = {
	children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		<html lang='en'>
			<head />
			<body>
				{mounted && (
					<div className='text-primary-black-1 duration-300 ease-in dark:bg-primary-black-1 dark:text-primary-white-1'>
						<Providers>
							<Navbar key='nav' />
							{children}
						</Providers>
					</div>
				)}
			</body>
		</html>
	)
}
