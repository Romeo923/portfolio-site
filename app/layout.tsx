import Navbar from "@/components/Navbar"
import Providers from "@/components/Providers"
import "./globals.css"

// export const metadata = {
// 	title: "Romeo Capozziello",
// }

type Props = {
	children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<head />
			<body>
				<div className='text-primary-black-1 duration-300 ease-in dark:bg-primary-black-1 dark:text-primary-white-1'>
					<Providers>
						<Navbar />
						{children}
					</Providers>
				</div>
			</body>
		</html>
	)
}
