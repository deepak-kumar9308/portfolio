import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Achievements from '../sections/Achievements'
import Extra from '../sections/Extra'
import Contact from '../sections/Contact'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const mainRef = useRef(null)

  useGSAP(() => {
    const sections = gsap.utils.toArray('.gsap-section')
    
    sections.forEach((section) => {
      // Don't animate the hero section with scroll trigger as it's the first thing seen
      if(section.id === 'home-section') return;

      gsap.fromTo(section, 
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  }, { scope: mainRef })

  return (
    <>
      <Helmet>
        <title>Deepak Kumar | Full Stack Developer & Data Analyst</title>
        <meta name="description" content="Portfolio of Deepak Kumar, a Full Stack Developer and Data Analyst specializing in building scalable web apps and extracting insights." />
      </Helmet>
      
      <Navbar />
      
      <main ref={mainRef} className="w-full relative bg-transparent text-white overflow-hidden">
        <div id="home-section" className="gsap-section"><Hero /></div>
        <div className="gsap-section"><About /></div>
        <div className="gsap-section"><Skills /></div>
        <div className="gsap-section"><Projects /></div>
        <div className="gsap-section"><Achievements /></div>
        <div className="gsap-section"><Extra /></div>
        <div className="gsap-section"><Contact /></div>
      </main>

      <footer className="w-full text-center py-6 text-gray-500 text-sm border-t border-white/10 glass bg-transparent relative z-10">
        <p>&copy; {new Date().getFullYear()} Deepak Kumar. Built with React, GSAP & Vite.</p>
      </footer>
    </>
  )
}

export default Home
