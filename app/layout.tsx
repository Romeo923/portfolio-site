"use client"

import Navbar from "@/components/Navbar"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { AnimatePresence } from "framer-motion"

// export const metadata = {
// 	title: "Romeo Capozziello",
// }

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<ThemeProvider
					enableSystem={true}
					attribute='class'
				>
					<div className='text-primary-black-1 duration-300 ease-in dark:bg-primary-black-1 dark:text-primary-white-1'>
						<Navbar />
						<AnimatePresence>{children}</AnimatePresence>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
