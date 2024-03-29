import Projects from "@/components/Projects"
import About from "@/components/About"
import Main from "@/components/Main"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"

export default function Home() {
	const snapping = "md:snap-y md:snap-mandatory md:overflow-scroll"
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
				className='mx-10 snap-start'
			>
				<About />
			</section>
			<section
				id='skills'
				className='mx-10 snap-start'
			>
				<Skills />
			</section>
			<section
				id='projects'
				className='mx-3 snap-start md:mx-10'
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
