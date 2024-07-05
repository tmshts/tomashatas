import { Link } from 'react-router-dom'

import Blog_blogs from '../assets/1_Blog_blogs.png'
import Master_paper_home from '../assets/2_Master_paper_home.png'
import Real_estate_overview from '../assets/3_Real_estate_overview.png'
import Gym_search from '../assets/4_Gym_search.png'


const Projects = ({ projects }) => {

const padding = {
    padding: 5,
    color: "black",
    fontSize: 20,
    textDecoration: "none",
    fontWeight: 'bold',
    }


    return (

        <>

                {projects.map(project =>
                <div key={project.id}>

                        <Link style={padding} to={`/projects/${project.ID}`}>
                            <div className='projects_container'>
                                <div className='project_name'>
                                    {project.title}
                                </div>

                                <div >
                                    {project.ID == 1 && <img src={Blog_blogs} className='project_foto_mini' alt="Blog_blogs"/> }
                                    {project.ID == 2 && <img src={Master_paper_home} className='project_foto_mini' alt="Master_paper_home"/> }
                                    {project.ID == 3 && <img src={Real_estate_overview} className='project_foto_mini' alt="Real_estate_overview"/> }
                                    {project.ID == 4 && <img src={Gym_search} className='project_foto_mini' alt="Gym_search"/> }
                                </div>
                            </div>
                        </Link>

                </div>
                )}


        </>
    )

}

export default Projects