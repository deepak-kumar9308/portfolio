import { motion } from 'framer-motion'
import * as SiIcons from 'react-icons/si'

const SkillBadge = ({ skill, index }) => {
  const Icon = SiIcons[skill.icon] || SiIcons.SiReact

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass p-6 rounded-2xl flex flex-col items-center justify-center space-y-4 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer"
    >
      <div 
        className="text-5xl group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        style={{ color: skill.color }}
      >
        <Icon />
      </div>
      <h4 className="font-semibold text-lg">{skill.name}</h4>
    </motion.div>
  )
}

export default SkillBadge
