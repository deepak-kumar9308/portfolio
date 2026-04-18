import { motion } from 'framer-motion'
import { FaMeetup, FaUsers } from 'react-icons/fa'

const extraData = [
  {
    title: "Tech Events & Meetups",
    description: "Active participant in regional GDG (Google Developer Groups) events and Salesforce trailblazer meetups. Always looking to expand my network and stay ahead of industry curves.",
    icon: FaMeetup,
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "Leadership & Community",
    description: "Experienced in guiding peers through complex technical challenges, fostering an environment where collaboration thrives and innovative solutions emerge.",
    icon: FaUsers,
    color: "from-purple-400 to-pink-500"
  }
]

const Extra = () => {
  return (
    <section id="extra" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
         <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Beyond <span className="text-purple-400">Code</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {extraData.map((item, index) => (
             <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-10 rounded-3xl w-full md:w-1/2 relative overflow-hidden group shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] transition-all duration-300"
             >
               <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${item.color} rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
               <item.icon className="text-5xl text-purple-400 mb-6 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:scale-110 transition-transform duration-300"/>
               <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
               <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Extra
