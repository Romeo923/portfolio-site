"use client"

import React from "react"
import { ThemeProvider } from "next-themes"
import { AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

type Props = { children: React.ReactNode }

export default function Providers({ children }: Props) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		<>
			{mounted && (
				<ThemeProvider
					attribute='class'
					enableSystem={true}
				>
					<AnimatePresence>{children}</AnimatePresence>
				</ThemeProvider>
			)}
		</>
	)
}
