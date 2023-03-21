import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/Navbar"
import Providers from "@/components/Providers"
import "./globals.css"

export const metadata = {
	title: "Romeo Capozziello",
	description: "Romeo Capozziello: Software Developer",
	icons: { icon: "/logoDark.svg" },
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
}

type Props = {
	children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en'>
			<body>
				<div className='text-primary-black-1 duration-300 ease-in dark:bg-primary-black-1 dark:text-primary-white-1'>
					<Providers>
						<Navbar key='nav' />
						{children}
					</Providers>
				</div>
				<Analytics />
			</body>
		</html>
	)
}
