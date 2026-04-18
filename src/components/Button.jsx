import { motion } from 'framer-motion'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden group inline-flex items-center justify-center cursor-pointer"
  
  const variants = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_20px_rgba(109,40,217,0.4)] hover:shadow-[0_0_30px_rgba(109,40,217,0.6)]",
    outline: "border-2 border-purple-400 text-white hover:bg-purple-500 glass shadow-[0_0_10px_rgba(139,92,246,0.3)]",
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={twMerge(clsx(baseStyle, variants[variant]), className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

export default Button
