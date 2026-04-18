import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Tilt from 'react-parallax-tilt'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        scale={1.02}
        transitionSpeed={2500}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        className="glass rounded-2xl flex flex-col h-full shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-shadow duration-300 relative overflow-hidden group"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative overflow-hidden h-56 md:h-64 rounded-t-2xl bg-gray-800" style={{ transform: "translateZ(30px)" }}>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://picsum.photos/800/600?random=" + project.id;
            }}
          />
        </div>
        <div className="p-6 flex flex-col flex-grow relative bg-gradient-to-b from-transparent to-black/20" style={{ transform: "translateZ(40px)" }}>
          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-gray-300 mb-6 flex-grow text-sm leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
               <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-[0_0_5px_rgba(139,92,246,0.2)]">
                 {tag}
               </span>
            ))}
          </div>

          <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-white/10">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
              <FaGithub className="text-lg" />
              <span>Source Code</span>
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
              <FaExternalLinkAlt className="text-lg" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

export default ProjectCard
