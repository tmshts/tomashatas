import { Link } from 'react-router-dom'

import Blog_blogs from '../assets/1_Blog_blogs.png'
import Master_paper_home from '../assets/2_Master_paper_home.png'
import Real_estate_overview from '../assets/3_Real_estate_overview.png'
import Gym_search from '../assets/4_Gym_search.png'
import Christmas_sweet_home from '../assets/5_Christmas_sweet_home.png'

import { useRef } from 'react';
import Navbar from './Nav_projects/Navbar'
import ScrollToTop from './ScrollToTop'


const Projects = ({ projects }) => {

const padding = {
    paddingTop: 5,
    color: "black",
    fontSize: 20,
    textDecoration: "none",
    fontWeight: 'bold',
}

const christmas_ref = useRef(null);
const blog_ref = useRef(null);
const master_paper_ref = useRef(null);
const real_estate_ref = useRef(null);
const gym_ref = useRef(null);

    return (

        <>

            <Navbar blog_ref={blog_ref} christmas_ref={christmas_ref} master_paper_ref={master_paper_ref}
            real_estate_ref={real_estate_ref} gym_ref={gym_ref} />

                {projects.map(project =>
                <div key={project.ID}>

                        <Link style={padding} to={`/projects/${project.ID}`}>
                                <h2 className='project_name'>
                                    {project.title}
                                </h2>

                                <div className='project_image'>
                                    {project.ID == 1 && <img ref={blog_ref} src={Blog_blogs} className='project_foto_mini' alt="Blog_blogs"/> }
                                    {project.ID == 2 && <img ref={master_paper_ref} src={Master_paper_home} className='project_foto_mini' alt="Master_paper_home"/> }
                                    {project.ID == 3 && <img ref={real_estate_ref} src={Real_estate_overview} className='project_foto_mini' alt="Real_estate_overview"/> }
                                    {project.ID == 4 && <img ref={gym_ref} src={Gym_search} className='project_foto_mini' alt="Gym_search"/> }
                                    {project.ID == 5 && <img ref={christmas_ref} src={Christmas_sweet_home} className='project_foto_mini' alt="Christmas_sweet_home"/> }
                                </div>

                                <p className='click_projects'>Click to see more info</p>

                                <hr className='hr_projects' />

                        </Link>
                        

                </div>
                )}

                <ScrollToTop />

        </>
    )

}

export default Projects