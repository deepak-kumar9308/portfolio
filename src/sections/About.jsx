import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-purple-400">Me</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-square relative rounded-3xl overflow-hidden glass p-2 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 z-10 rounded-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=800" 
                alt="Deepak Kumar - Developer Profile"
                className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-600/30 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-600/30 blur-[60px] rounded-full pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Engineering solutions with precision and passion.
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I am an MCA student at Chandigarh University, driven by an insatiable curiosity for how things work under the hood. My journey in tech is fueled by a relentless problem-solving mindset and a profound passion for the MERN stack and Java development.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond traditional software engineering, my interests aggressively expand into Artificial Intelligence, Cloud Architectures, and System Automation. I believe in writing code that is not just functional, but scalable, clean, and highly impactful.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="glass p-6 rounded-2xl text-center shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:-translate-y-2 transition-transform duration-300">
                <h4 className="text-3xl font-bold text-purple-400 mb-2">MERN</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Core Stack</p>
              </div>
              <div className="glass p-6 rounded-2xl text-center shadow-[0_0_15px_rgba(236,72,153,0.1)] hover:-translate-y-2 transition-transform duration-300">
                <h4 className="text-3xl font-bold text-pink-400 mb-2">AI/Cloud</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Current Focus</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
