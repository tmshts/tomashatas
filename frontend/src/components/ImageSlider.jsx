import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'


const ImageSlider = ({ projects_fotos }) => {
  const timeRef = useRef(null)
  const n = projects_fotos.length
  // Extended array: [clone_of_last, ...real_slides, clone_of_first]
  // currentIndex 1..n maps to real slides; 0 = clone of last, n+1 = clone of first
  const extended = [projects_fotos[n - 1], ...projects_fotos, projects_fotos[0]]
  const [currentIndex, setCurrentIndex] = useState(1)
  const [animated, setAnimated] = useState(true)

  // 0-based real index for dots and project link
  const realIndex = currentIndex === 0 ? n - 1 : currentIndex === n + 1 ? 0 : currentIndex - 1

  const goToNext = useCallback(() => {
    setAnimated(true)
    setCurrentIndex(i => i + 1)
  }, [])

  const goToPrevious = () => {
    setAnimated(true)
    setCurrentIndex(i => i - 1)
  }

  const goToSlide = idx => {
    setAnimated(true)
    setCurrentIndex(idx + 1)
  }

  // After landing on a clone, instantly snap to the real counterpart
  const handleTransitionEnd = useCallback(() => {
    if (currentIndex === n + 1) {
      setAnimated(false)
      setCurrentIndex(1)
    } else if (currentIndex === 0) {
      setAnimated(false)
      setCurrentIndex(n)
    }
  }, [currentIndex, n])

  // Re-enable animation after the invisible snap render
  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimated(true))
      )
      return () => cancelAnimationFrame(id)
    }
  }, [animated])

  useEffect(() => {
    if (timeRef.current) clearTimeout(timeRef.current)
    timeRef.current = setTimeout(goToNext, 5000)
    return () => clearTimeout(timeRef.current)
  }, [currentIndex, goToNext])

  const arrowStyle = (side) => ({
    position: 'absolute',
    top: '50%',
    [side]: '0.75rem',
    transform: 'translateY(-50%)',
    zIndex: 2,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(15,23,42,0.5)',
    color: '#fff',
    fontSize: '1.25rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    flexShrink: 0,
  })

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>

      {/* Slide track */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>

        <div
          onTransitionEnd={handleTransitionEnd}
          style={{
            display: 'flex',
            height: '100%',
            transform: `translateX(${-currentIndex * 100}%)`,
            transition: animated ? 'transform 0.8s ease-in-out' : 'none',
          }}
        >
          {extended.map((foto, i) => (
            <div
              key={i}
              style={{
                flex: '0 0 100%',
                height: '100%',
                backgroundImage: `url(${foto})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>

        <button onClick={goToPrevious} style={arrowStyle('left')} aria-label="Previous">‹</button>
        <button onClick={goToNext}     style={arrowStyle('right')} aria-label="Next">›</button>

        <Link
          to={`/projects/${realIndex + 1}`}
          style={{
            position: 'absolute',
            bottom: '1.25rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            padding: '0.45rem 1.25rem',
            background: '#2563eb',
            color: '#fff',
            borderRadius: '9999px',
            fontWeight: 600,
            fontSize: '0.875rem',
            whiteSpace: 'nowrap',
          }}
        >
          View project →
        </Link>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center' }}>
        {projects_fotos.map((_, i) => (
          <button
            key={i === realIndex ? `active-${realIndex}` : `dot-${i}`}
            onClick={() => goToSlide(i)}
            className={`slider-dot ${i === realIndex ? 'slider-dot-active' : 'slider-dot-inactive'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

    </div>
  )
}

export default ImageSlider
