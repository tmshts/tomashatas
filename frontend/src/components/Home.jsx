import main_picture from '../assets/main_picture.jpeg'
import ImageSlider from './ImageSlider'

import GymProgg_main from '../assets/2_GymProgg_main.png'
import Speak_intro from '../assets/3_speak_intro.png'
import Real_estate_overview_foto from '../assets/1_Real_estate_overview.png'
import Blog_blogs_foto from '../assets/4_Blog_blogs.png'
import Christmas_sweet_home_foto from '../assets/5_Christmas_sweet_home.png'
import Master_paper_home_foto from '../assets/6_Master_paper_home.png'

import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom'


const Home = () => {
  const projects_fotos = [
    Real_estate_overview_foto,
    GymProgg_main,
    Speak_intro,
    Blog_blogs_foto,
    Christmas_sweet_home_foto,
    Master_paper_home_foto,
  ]

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name">Tomas Hatas</h1>
          <p className="hero-subtitle">Strategic IT Advisor &amp; Full-Stack Developer</p>
          <p className="hero-tagline">
            An experienced IT and business professional with international experience,
            fluent in multiple languages, and a strong passion for stock market investing.
          </p>
          <div className="hero-ctas">
            <Link to="/cv" className="btn btn-primary">View CV</Link>
            <Link to="/projects" className="btn btn-outline">See Projects</Link>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-accent" />
          <img src={main_picture} className="hero-img" alt="Tomas Hatas" />
        </div>
      </section>

      {/* Projects preview */}
      <div className="section-alt-wrapper">
        <div className="section">
          <h2 className="section-title">My Projects</h2>
          <div className="slider-wrapper">
            <ImageSlider projects_fotos={projects_fotos} />
          </div>
        </div>
      </div>

      {/* About */}
      <div className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-text">
          <p>
            After studying and working in business and with the growing technological advancements
            around the world, I was eager to explore different fields such as machine learning,
            web and software development.
          </p>
          <p>
            Therefore, I pursued my Master&apos;s in Information Systems where I learned programming
            languages such as C, Python, Java, JavaScript, React, and more.
            I couldn&apos;t have made a better decision.
          </p>
          <p>
            You can find more information about me{' '}
            <Link to="/cv" className="text-link">here</Link>.
          </p>
        </div>
      </div>

      {/* Connect */}
      <div className="section-dark-wrapper">
        <div className="section">
          <h2 className="section-title light">Let&apos;s Connect</h2>
          <div className="social-row">
            <SocialIcon
              url="https://whatsapp.com"
              href="https://wa.me/420732964320"
              target="_blank"
              rel="noopener noreferrer"
            />
            <SocialIcon
              url="mailto:tomhatas@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            />
            <SocialIcon
              url="https://linkedin.com/in/tomas-hatas"
              target="_blank"
              rel="noopener noreferrer"
            />
            <SocialIcon
              url="https://instagram.com/tmshts"
              target="_blank"
              rel="noopener noreferrer"
            />
            <SocialIcon
              url="https://github.com/tmshts"
              target="_blank"
              rel="noopener noreferrer"
            />
            <SocialIcon
              url="https://www.youtube.com/@tmshts"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
