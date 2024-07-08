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

    /*
    return (
        <>
            <div>Hello from Home</div>

            <div style={containerStyle}>
                <ImageSlider projects_fotos={projects_fotos} parentWidth={1500} />  
            </div>
        </>
    )
    */
    return (
        <>
            <div>Hello from Home</div>

            <div style={containerStyle}>
                <ImageSlider projects_fotos={projects_fotos} parentWidth={1500} />  
            </div>
        </>
    )
}

export default Home