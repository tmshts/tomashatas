import main_picture from '../assets/main_picture.jpeg'

import ImageSlider from './ImageSlider'

import Blog_blogs_foto from '../assets/1_Blog_blogs.png'
import Master_paper_home_foto from '../assets/2_Master_paper_home.png'
import Real_estate_overview_foto from '../assets/3_Real_estate_overview.png'
import Gym_search_foto from '../assets/4_Gym_update.png'
import Christmas_sweet_home_foto from '../assets/5_Christmas_sweet_home.png'

import { SocialIcon } from 'react-social-icons'

import { Link } from 'react-router-dom'


const Home = () => {

    const projects_fotos = [
        Blog_blogs_foto,
        Master_paper_home_foto,
        Real_estate_overview_foto,
        Gym_search_foto,
        Christmas_sweet_home_foto
      ]

      const containerStyle = {
        width: '100%', // 70%
        height: '480px',
        margin: '0 auto', // maybe not necessary
        //border: 'solid black 3px',
        //borderRadius: '5px',
      }


    return (
        <>

            {/* Home Introduction */}
            <div className="home_picture_container">

                <div className="home_welcome_text_down">
                    Hi 👋, I am junior web/software developer.
                </div>


                <div className="home_welcome_picture">
                    <img src={main_picture} className="foto_home" alt='main_picture_tomas_hatas'/>
                </div>

            </div>


            {/* Home Projects */}

            <h1 style={{textAlign: 'center', marginTop: '50px'}}>
                My projects
            </h1>

            <div style={containerStyle}>
                <ImageSlider projects_fotos={projects_fotos} parentWidth={1500} />  
            </div>

            
            {/* Home About Me */}

            <h1 className='home_about_me_headline'>
                About me
            </h1>

            <div className='home_about_me_text'>
                After studying and working in business and with the growing technological advancements around the world,
                I was eager to explore different fields such as machine learning, web and software development.
            </div>

            <br />

            <div className='home_about_me_text'>
                Therefore, I have pursued my Master's in Information Systems where I have learned programming/scripting languages such as:
                C, Python, Java, JavaScript, React, etc. I couldn't have made a better decision.
            </div>

            <br />

            <div className='home_about_me_text'>
                You can find more information about me <Link to="/cv">here</Link>.
            </div>
            
            {/* Home Contact Me */}

            <h1 className='home_contact_me_headline'>
                Let's connect
            </h1>

            <div className='home_contact_me_text'>

                <div>
                    <SocialIcon url='https://whatsapp.com' href="https://wa.me/420732964320" target="_blank" rel="noopener noreferrer"/>
                </div>

                <div>
                    <SocialIcon url='mailto:tomhatas@gmail.com' target="_blank" rel="noopener noreferrer"/>
                </div>

                <div>
                    <SocialIcon url="https://linkedin.com/in/tomas-hatas" target="_blank" rel="noopener noreferrer"/>
                </div>

                <div>
                    <SocialIcon url="https://instagram.com/tmshts" target="_blank" rel="noopener noreferrer"/>
                </div>

                <div>
                    <SocialIcon url="https://github.com/tmshts" target="_blank" rel="noopener noreferrer"/>
                </div>

                <div>
                    <SocialIcon url="https://www.youtube.com/@tmshts" target="_blank" rel="noopener noreferrer"/>
                </div>

            </div>

        </>
    )
}

export default Home