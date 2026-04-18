import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (!isDark) {
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
    }
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full glass hover:scale-110 transition-transform flex items-center justify-center cursor-pointer relative z-50 text-xl"
      aria-label="Toggle Theme"
    >
      {isDark ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-indigo-600" />}
    </button>
  )
}

export default ThemeToggle
