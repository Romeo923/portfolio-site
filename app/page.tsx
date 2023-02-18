import Projects from "@/components/Projects"
import About from "@/components/About"
import Main from "@/components/Main"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"

export default function Home() {
	return (
		<main className='text-primary-dark duration-300 ease-in dark:bg-primary-dark dark:text-primary-light'>
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</main>
	)
}
