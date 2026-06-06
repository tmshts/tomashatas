import { useState, useEffect } from 'react'
import { FaAngleDoubleUp } from 'react-icons/fa'


const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <button className="scroll-top-btn" onClick={scrollTop} aria-label="Back to top">
      <FaAngleDoubleUp />
    </button>
  )
}

export default ScrollToTop
