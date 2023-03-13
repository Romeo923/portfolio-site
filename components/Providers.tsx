"use client"

import React from "react"
import { ThemeProvider } from "next-themes"
import { AnimatePresence } from "framer-motion"

type Props = { children: React.ReactNode }

export default function Providers({ children }: Props) {
	return (
		<ThemeProvider attribute='class'>
			<AnimatePresence>{children}</AnimatePresence>
		</ThemeProvider>
	)
}
