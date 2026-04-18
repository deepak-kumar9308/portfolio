import { motion } from 'framer-motion'
import { FaAward, FaShieldAlt, FaLaptopCode } from 'react-icons/fa'

const achievementsData = [
  {
    title: "Infosys Springboard",
    description: "Completed intensive modules across AI, Data Science, Natural Language Processing, Deep Learning, and Computer Vision.",
    icon: FaLaptopCode,
    color: "from-blue-400 to-indigo-600"
  },
  {
    title: "CyberPeace Certification",
    description: "Certified by CyberPeace Foundation, demonstrating a solid understanding of digital security landscapes and safe practices.",
    icon: FaShieldAlt,
    color: "from-emerald-400 to-teal-600"
  },
  {
    title: "Ethical Hacking Workshop",
    description: "Actively participated in hands-on workshops exploring vulnerabilities, penetration testing, and counter-measure deployments.",
    icon: FaAward,
    color: "from-orange-400 to-red-600"
  }
]

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-black/10">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awards & <span className="text-purple-400">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Milestones of my continuous learning journey and technical growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`} />
              <div className={`w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
