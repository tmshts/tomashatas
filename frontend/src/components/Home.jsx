import main_picture from '../assets/main_picture.jpeg'

import ImageSlider from './ImageSlider'

import Blog_blogs_foto from '../assets/1_Blog_blogs.png'
import Master_paper_home_foto from '../assets/2_Master_paper_home.png'
import Real_estate_overview_foto from '../assets/3_Real_estate_overview.png'
import Gym_search_foto from '../assets/4_Gym_update.png'
import Christmas_sweet_home_foto from '../assets/5_Christmas_sweet_home.png'


const Home = () => {

    const projects_fotos = [
        Blog_blogs_foto,
        Master_paper_home_foto,
        Real_estate_overview_foto,
        Gym_search_foto,
        Christmas_sweet_home_foto
      ]

      const containerStyle = {
        width: '90%', // 70%
        height: '350px', // 480px
        margin: '0 auto', // maybe not necessary
        //border: 'solid black 3px',
        //borderRadius: '5px',
      }


    return (
        <>

            {/* Home Introduction */}
            <div className="home_picture_container">

                <div className="home_welcome_text_down">
                    Hi 👋, I am junior web/software developer
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
                I was born in Decin, Czech Republic. After studying the European Business Academy in Decin, I kept going on in the business field
                and hence I started studying at the University of Economics in Prague. After graduating, I was working above all in Germany.
            </div>

            <div className='home_about_me_text'>
                Nevertheless, aware of technological advances, I swift my carrer into technological world.
                I could have not made better decision. I was eager to discover various fields such as machine learning, web and software development
                learning programming/script languages: C, Python, Java, JavaScript, React, etc.
            </div>

            
            {/* Home Contact Me */}

            <h1 className='home_contact_me_headline'>
                Let's connect
            </h1>

            <div className='home_contact_me_text'>
                My WhatsApp
            </div>

        </>
    )
}

export default Home