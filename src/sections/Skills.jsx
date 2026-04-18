import { motion } from 'framer-motion'
import skillsData from '../data/skills.json'
import * as SiIcons from 'react-icons/si'
import * as FaIcons from 'react-icons/fa'

const IconLoader = ({ iconName, color }) => {
  const Icon = SiIcons[iconName] || FaIcons[iconName] || SiIcons.SiReact
  return <Icon className="text-2xl min-w-6" style={{ color }} />
}

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/10">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-purple-400">Toolkit</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A categorized look at my technical proficiencies and the tools I use daily.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(skillsData).map(([category, skills], catIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              className="glass p-8 rounded-3xl flex flex-col space-y-6 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-shadow duration-300 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 blur-[40px] rounded-full pointer-events-none" />
              
              <h3 className="text-2xl font-bold border-b border-white/10 pb-4 mb-2">
                {category}
              </h3>
              
              <div className="space-y-6 flex-grow">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="flex flex-col space-y-2 group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <IconLoader iconName={skill.icon} color={skill.color} />
                        <span className="font-medium text-gray-200 group-hover:text-white transition-colors">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-400 font-mono">{skill.proficiency}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                      {/* Animated Fill */}
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                        className="h-full rounded-full relative"
                        style={{ backgroundColor: skill.color }}
                      >
                         <div className="absolute inset-0 bg-white/20 w-full animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
