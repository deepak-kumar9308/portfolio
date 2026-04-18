import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Canvas3D from '../components/Canvas3D'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <Canvas3D />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-16 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-purple-400 mb-4 tracking-widest uppercase">
            Hi, I'm Deepak Kumar
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-24 md:h-32 mb-6 flex items-center justify-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Data Analyst',
                2000,
                'Creative Engineer',
                2000
              ]}
              wrapper="span"
              speed={50}
              className="text-white drop-shadow-[0_2px_15px_rgba(255,255,255,0.5)]"
              repeat={Infinity}
            />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-400 mb-10">
            I specialize in crafting high-performance, beautiful applications 
            and extracting meaningful insights from complex data. Let's build the future together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a href="#projects">
            <Button variant="primary">View Projects</Button>
          </a>
        <a href="/assets/resume.pdf" download="Deepak_Resume.pdf">
            <Button variant="outline">Download Resume</Button>
        </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero
