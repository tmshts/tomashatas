import PropTypes from 'prop-types'

import Job from './Job'
import Education from './Education'

import main_picture from '../assets/main_picture.jpeg'

import { useRef } from 'react';

import ScrollToTop from './ScrollToTop'


const Cv = ({ jobs, education }) => {

    const personal_details_ref = useRef(null);
    const portfolio_ref = useRef(null);
    const certificates_ref = useRef(null);
    const work_experience_ref = useRef(null);
    const education_ref = useRef(null);
    const it_aptitudes_ref = useRef(null);
    const languages_ref = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
    
        <>

            <div className='cv_sections'>
                <ul>
                    <li onClick={() => scrollToSection(personal_details_ref)} className='link_section_cv'>Personal Details</li>
                    <li onClick={() => scrollToSection(portfolio_ref)} className='link_section_cv'>Portfolio</li>
                    <li onClick={() => scrollToSection(certificates_ref)} className='link_section_cv'>Certificates</li>
                    <li onClick={() => scrollToSection(work_experience_ref)} className='link_section_cv'>Work Experience</li>
                    <li onClick={() => scrollToSection(education_ref)} className='link_section_cv'>Education</li>
                    <li onClick={() => scrollToSection(it_aptitudes_ref)} className='link_section_cv'>IT Aptitudes</li>
                    <li onClick={() => scrollToSection(languages_ref)} className='link_section_cv'>Languages</li>
                </ul>
            </div>

            <div>Download</div>

            <div className='cv'>
                    <div ref={personal_details_ref} id='wrapper_intro'>

                        <div id='intro_wrapper'>

                            <div id='intro_first'>
                                    <p><b>Name:</b></p>
                                    <p><b>Phone:</b></p>
                                    <p><b>Email:</b></p>
                            </div>

                            <div id='intro_second'>
                                <p>Tomas Hatas</p>
                                <p>+420 732 964 320</p>
                                <p>tomhatas@gmail.com</p>
                            </div>
                        </div>

                        <div className='main_picture_div'>
                            <div className='main_picture_div_child'>
                                <img src={main_picture} className='main_picture' alt='main_picture_tomas_hatas'/>
                            </div>
                        </div>

                    </div>
            
                <hr/>

                    <div className='motto'>
                        Internationally minded personality with unique background combining master’s degrees in business and
                        information systemswith the aim of improving my IT skills in software/web development.
                    </div>

                <hr/>

                    <h2 ref={portfolio_ref} >My Portfolio</h2>

                    <p>
                        <b>Linked Data: </b>
                        <a href="https://tmshts.inrupt.net/public" target="_blank" rel="noopener noreferrer">https://tmshts.inrupt.net/public</a>
                    </p>
                    <p>
                        <b>Programming: </b>
                        <a href="https://github.com/tmshts" target="_blank" rel="noopener noreferrer">https://github.com/tmshts</a>
                    </p>

                <hr/>

                    <h2 ref={certificates_ref} >Certificates</h2>

                    <p>
                        Full Stack Open from University of Helsinki (React, Node.js, Express, REST API, MongoDB)
                    </p>
                    <p>
                        CS50’s Web Programming with Python and JavaScript from Harvard (Django)
                    </p>

                <hr/>

                    <h2 ref={work_experience_ref} >Work experience</h2>

                    <Job jobs={jobs} />

                <hr/>

                    <h2 ref={education_ref} >Education</h2>

                    <Education education={education} />

                <hr/>

                    <h2 ref={it_aptitudes_ref} >IT Aptitudes</h2>

                    <p>
                        Python, Java, C, JavaScript, React, HTML, CSS, Django, SQL, SPARQL,
                        MongoDB, MySQL, REST API, NodeJS, Express, AJAX, jQuery, Git,
                        UML, LaTeX, Visual Studio Code
                    </p>

                <hr/>

                    <h2 ref={languages_ref} >Foreign languages</h2>

                    <p>
                        C1 level in German, English and Spanish; Czech – mother tongue
                    </p>

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