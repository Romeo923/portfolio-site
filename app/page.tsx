import Projects from "@/components/Projects"
import About from "@/components/About"
import Main from "@/components/Main"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"

export default function Home() {
	return (
		<main className='h-screen w-screen md:snap-y md:snap-mandatory md:overflow-scroll'>
			<section
				id='home'
				className='snap-start'
			>
				<Main />
			</section>
			<section
				id='about'
				className='snap-start'
			>
				<About />
			</section>
			<section
				id='skills'
				className='snap-start'
			>
				<Skills />
			</section>
			<section
				id='projects'
				className='snap-start'
			>
				<Projects />
			</section>
			{/* <section
				id='contact'
				className='snap-start'
			>
				<Contact />
			</section> */}
		</main>
	)
}
