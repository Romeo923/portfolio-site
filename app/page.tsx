import Projects from "@/components/Projects"
import About from "@/components/About"
import Main from "@/components/Main"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"

export default function Home() {
	return (
		<main className='mx:auto h-screen w-screen snap-y snap-mandatory overflow-scroll'>
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</main>
	)
}
