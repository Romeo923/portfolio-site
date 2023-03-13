import Projects from "@/components/Projects"
import About from "@/components/About"
import Main from "@/components/Main"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"

export default function Home() {
	return (
		<main className='snap-mandatory'>
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</main>
	)
}
