import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import Button from '../components/Button'

const Contact = () => {
  const form = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMsg, setStatusMsg] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // REPLACE THESE PLACEHOLDERS WITH YOUR ACTUAL EMAILJS CREDS
    const SERVICE_ID = 'YOUR_SERVICE_ID'
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

    if (SERVICE_ID === 'YOUR_SERVICE_ID') {
       setTimeout(() => {
         setIsSubmitting(false)
         setIsSuccess(true)
         setStatusMsg('Message successfully sent! (Simulation)')
         form.current.reset()
         
         setTimeout(() => { setIsSuccess(false); setStatusMsg('') }, 5000)
       }, 1500)
       return
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
          setIsSubmitting(false)
          setIsSuccess(true)
          setStatusMsg('Message successfully sent!')
          form.current.reset()
          setTimeout(() => { setIsSuccess(false); setStatusMsg('') }, 5000)
      }, () => {
          setIsSubmitting(false)
          setIsSuccess(false)
          setStatusMsg('Failed to send the message, please try again.')
      })
  }

  const inputAnimation = {
    hidden: { opacity: 0, x: 20 },
    visible: (custom) => ({
      opacity: 1, x: 0, transition: { delay: custom * 0.1, duration: 0.5 }
    })
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/30 w-full">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-purple-400">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            I'm currently looking for new opportunities depending on my schedule. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="space-y-4">
             <div className="flex items-center space-x-3 text-gray-300">
               <span className="text-purple-400 text-xl text-center w-6">📞</span>
               <p>+91 9308754906</p>
             </div>
             <div className="flex items-center space-x-3 text-gray-300">
               <span className="text-purple-400 text-xl text-center w-6">📧</span>
               <p>deepakkr93087@gmail.com</p>
             </div>
             <div className="flex items-center space-x-3 text-gray-300">
               <span className="text-purple-400 text-xl text-center w-6">🔗</span>
               <a href="linkedin.com/in/deepak-kumar-58273a264" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">LinkedIn</a>
             </div>
             <div className="flex items-center space-x-3 text-gray-300">
               <span className="text-purple-400 text-xl text-center w-6">💻</span>
               <a href="https://github.com/deepak-kumar9308" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">GitHub</a>
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 glass p-8 rounded-2xl relative overflow-hidden"
        >
          <AnimatePresence>
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 z-20 glass flex flex-col items-center justify-center bg-black/80"
              >
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(34,197,94,0.6)]"
                >
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                <p className="text-gray-300 mt-2">{statusMsg}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6 relative z-10">
            <motion.div custom={1} variants={inputAnimation} initial="hidden" whileInView="visible" viewport={{ once:true }}>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input 
                type="text" 
                name="user_name" 
                required 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)] text-white transition-all duration-300 glass"
                placeholder="Deepak Kumar"
              />
            </motion.div>
            <motion.div custom={2} variants={inputAnimation} initial="hidden" whileInView="visible" viewport={{ once:true }}>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input 
                type="email" 
                name="user_email" 
                required 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)] text-white transition-all duration-300 glass"
                placeholder="deepak@example.com"
              />
            </motion.div>
            <motion.div custom={3} variants={inputAnimation} initial="hidden" whileInView="visible" viewport={{ once:true }}>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                name="message" 
                required 
                rows="4" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(139,92,246,0.2)] text-white transition-all duration-300 glass"
                placeholder="Hello, I'd like to talk about..."
              ></textarea>
            </motion.div>
            <motion.div custom={4} variants={inputAnimation} initial="hidden" whileInView="visible" viewport={{ once:true }}>
              <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              {statusMsg && !isSuccess && <p className="text-sm text-center text-red-400 mt-4">{statusMsg}</p>}
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
