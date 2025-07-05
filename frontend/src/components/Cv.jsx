import PropTypes from 'prop-types'

import Job from './Job'
import Education from './Education'

import main_picture from '../assets/main_picture.jpeg'
import fullstack from '../assets/fullstack.png'
import aws from '../assets/aws.png'
import terraform from '../assets/terraform.png'
import fullstack_cicd from '../assets/fullstack_cicd.png'
import fullstack_containers from '../assets/fullstack_containers.png'
import cs50w from '../assets/CS50W.png'
import toefl from '../assets/toefl.jpg'
import testdaf from '../assets/testdaf.jpg'

import { useRef } from 'react';

import ScrollToTop from './ScrollToTop'
import Navbar from './Nav_cv/Navbar'



const Cv = ({ jobs, education }) => {

      // props drilling - bad approach
    const personal_details_ref = useRef(null);
    const portfolio_ref = useRef(null);
    const certificates_ref = useRef(null);
    const work_experience_ref = useRef(null);
    const education_ref = useRef(null);
    const it_aptitudes_ref = useRef(null);
    const languages_ref = useRef(null);

    return (
    
        <>

            <Navbar personal_details_ref={personal_details_ref} portfolio_ref={portfolio_ref}
            certificates_ref={certificates_ref} work_experience_ref={work_experience_ref}
            education_ref={education_ref} it_aptitudes_ref={it_aptitudes_ref}
            languages_ref={languages_ref} />

            <div className='cv'>
                    <div ref={personal_details_ref} id='personal_details'>

                        <div id='intro_wrapper'>

                            <div id='intro_first'>
                                    <p><b>Name:</b></p>
                                    <p><b>Email:</b></p>
                            </div>

                            <div id='intro_second'>
                                <p>Tomas Hatas</p>
                                <p>tomhatas@gmail.com</p>
                            </div>
                        </div>

                        <div className='main_picture_div'>
                            <div className='main_picture_div_child'>
                                <img src={main_picture} className='main_picture' alt='main_picture_tomas_hatas'/>
                            </div>
                        </div>

                    </div>
            
                    <hr className='hr_cv' />

                    <div className='motto'>
                        Internationally experienced professional with master’s degrees in business and information systems,
                        combining analytical and technical skills to deepen expertise in software and web development.
                    </div>

                <hr className='hr_cv' />

                    <h2 ref={portfolio_ref} >My Portfolio</h2>

                    <p>
                        <b>Programming: </b>
                        <a href="https://github.com/tmshts" className='a_style' target="_blank" rel="noopener noreferrer">https://github.com/tmshts</a>
                    </p>
                    

                <hr className='hr_cv' />

                    <h2 ref={certificates_ref} >Certificates</h2>

                        <div className='line_height'>
                            <b>AWS Certified Solutions Architect – Associate</b>
                        </div>
                        <p>
                            <i>More info about the certificate:</i><span> </span>
                            <a href="https://www.credly.com/badges/a3b75745-65ab-4796-b71f-08a54b4eb5ba/public_url" className='a_style' target="_blank" rel="noopener noreferrer"><i>here</i></a>.
                        </p>
                        
                        <img src={aws} className='certificate_badge' alt='aws'/>


                        <div className='line_height'>
                            <b>HashiCorp Certified: Terraform Associate (003)</b>
                        </div>
                        <p>
                            <i>More info about the certificate:</i><span> </span>
                            <a href="https://www.credly.com/badges/11c5fcd5-8673-44e5-8fbf-0d8721c3be29/public_url" className='a_style' target="_blank" rel="noopener noreferrer"><i>here</i></a>.
                        </p>
                        
                        <img src={terraform} className='certificate_badge' alt='terraform'/>


                        <div className='line_height'>
                            <b>Full Stack Open from University of Helsinki </b> (React, Redux, React Router, Node.js, Express, REST API, MongoDB)
                        </div>
                        <p>
                            <i>More info about the certificate:</i><span> </span>
                            <a href="https://fullstackopen.com/en/" className='a_style' target="_blank" rel="noopener noreferrer"><i>here</i></a>.
                        </p>
                        
                        <img src={fullstack} className='certificate' alt='fullstack'/>


                        <div className='line_height'>
                            <b>CI/CD from University of Helsinki </b> (Branches, Pull Request, Continuous Integration, Continuous Deployment, GitHub Actions, Workflow, Versioning, Periodic health check)
                        </div>
                        <p>
                            <i>More info about the certificate:</i><span> </span>
                            <a href="https://fullstackopen.com/en/part11/" className='a_style' target="_blank" rel="noopener noreferrer"><i>here</i></a>.
                        </p>
                        
                        <img src={fullstack_cicd} className='certificate' alt='fullstack_cicd'/>


                        <div className='line_height'>
                            <b>Containers from University of Helsinki </b> (Images, Containers, Docker, Docker Network, Dockerfile, Docker Compose, Nginx, Mongo, Redis)
                        </div>
                        <p>
                            <i>More info about the certificate:</i><span> </span>
                            <a href="https://fullstackopen.com/en/part12/" className='a_style' target="_blank" rel="noopener noreferrer"><i>here</i></a>.
                        </p>
                        
                        <img src={fullstack_containers} className='certificate' alt='fullstack_containers'/>

                        
                        <p className='line_height'>
                            <b>CS50’s Web Programming with Python and JavaScript from Harvard</b> (Django)
                        </p>
                        <p>
                            <i>More info about the certificate:</i><span> </span>
                            <a href="https://cs50.harvard.edu/web/2020/" className='a_style' target="_blank" rel="noopener noreferrer"><i>here</i></a>.
                        </p>

                        <img src={cs50w} className='certificate' alt='cs50w'/>


                <hr className='hr_cv' />

                    <h2 ref={work_experience_ref} >Work experience</h2>

                    <Job jobs={jobs} />

                <hr className='hr_cv' />

                    <h2 ref={education_ref} >Education</h2>

                    <Education education={education} />

                <hr className='hr_cv' />

                    <h2 ref={it_aptitudes_ref} >IT Aptitudes</h2>

                    <ul className="list_it_aptitudes">
                        <li>Python</li>
                        <li>Java</li>

                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>REST API</li>
                        <li>Django</li>
                        <li>AJAX</li>
                        <li>jQuery</li>
                        <li>SQL</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>

                        <li>SPARQL</li>
                        <li>Git</li>
                        <li>Postman</li>
                        <li>Docker</li>
                        <li>UML</li>
                        <li>LaTeX</li>
                        <li>Visual Studio Code</li>
                        <li>AWS</li>
                        
                    </ul>

                <hr className='hr_cv' />

                    <h2 ref={languages_ref} >Foreign languages</h2>
                    
                    <ul className="list_languages">
                        <li>Czech (mother tongue)</li>
                        <li>German (Advanced)</li>
                        <img src={testdaf} className='certificate' alt='testdaf'/>
                        <br/>
                        <br/>

                        <li>English (Advanced)</li>
                        <img src={toefl} className='certificate' alt='toefl'/>
                        <br/>
                        <br/>
                        
                        <li>Spanish (Advanced)</li>
                        <li>Italian (Basic)</li>
                    </ul>

            </div>

            <ScrollToTop />

        </>

    )
}

export default Cv


Cv.propTypes = {
    jobs: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    education: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
}