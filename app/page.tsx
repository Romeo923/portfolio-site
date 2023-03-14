import Projects from "@/components/Projects"
import About from "@/components/About"
import Main from "@/components/Main"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"

export default function Home() {
	return (
		<main className='h-screen w-screen  md:snap-y md:snap-mandatory md:overflow-scroll'>
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</main>
	)
}
