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

import { useRef } from 'react'
import ScrollToTop from './ScrollToTop'
import Navbar from './Nav_cv/Navbar'


const Cv = ({ jobs, education }) => {
  const personal_details_ref = useRef(null)
  const portfolio_ref = useRef(null)
  const certificates_ref = useRef(null)
  const work_experience_ref = useRef(null)
  const education_ref = useRef(null)
  const aptitudes_ref = useRef(null)
  const languages_ref = useRef(null)

  const strategicSkills = [
    'Digital Transformation', 'AI Strategy Consulting', 'Technology Roadmapping',
    'Client Engagement', 'Presentation', 'Workshop Facilitation',
    'Market Analysis', 'Process Optimization', 'Fintech', 'Blockchain Advisory',
  ]

  const technicalSkills = [
    'Python', 'Java', 'JavaScript', 'React', 'HTML', 'CSS', 'Material UI',
    'NodeJS', 'Express', 'REST API', 'Postman', 'Django', 'AJAX', 'jQuery',
    'SQL', 'PostgreSQL', 'MongoDB', 'SPARQL', 'Git', 'Bitbucket', 'Docker',
    'UML', 'LaTeX', 'Visual Studio Code', 'Cypress', 'Unit Testing',
    'AWS', 'GenAI', 'LLM', 'Databricks', 'dbt', 'Dagster', 'Jenkins',
    'BPMN', 'Signavio', 'Celonis', 'Sparx Enterprise Architect',
  ]

  const softSkills = [
    'Leadership', 'Cross-Functional Collaboration', 'Negotiation', 'Public Speaking',
  ]

  return (
    <>
      <Navbar
        personal_details_ref={personal_details_ref}
        portfolio_ref={portfolio_ref}
        certificates_ref={certificates_ref}
        work_experience_ref={work_experience_ref}
        education_ref={education_ref}
        aptitudes_ref={aptitudes_ref}
        languages_ref={languages_ref}
      />

      <div className="cv-page">

        {/* Personal Details */}
        <div ref={personal_details_ref} className="cv-header">
          <div className="cv-header-info">
            <h1>Tomas Hatas</h1>
            <p className="cv-header-email">tomhatas@gmail.com</p>
          </div>
          <img src={main_picture} className="cv-photo" alt="Tomas Hatas" />
        </div>

        {/* Motto */}
        <blockquote className="cv-motto">
          Strategic advisor translating emerging technologies to drive business growth, operational
          efficiency, and digital transformation. Experienced in leading cross-functional teams
          and advising stakeholders.
        </blockquote>

        {/* Portfolio */}
        <div ref={portfolio_ref} className="cv-section">
          <h2 className="cv-section-title">Portfolio</h2>
          <a
            href="https://github.com/tmshts"
            className="portfolio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/tmshts
          </a>
        </div>

        {/* Certificates */}
        <div ref={certificates_ref} className="cv-section">
          <h2 className="cv-section-title">Certificates</h2>
          <div className="cert-list">

            <div className="cert-item">
              <img src={aws} className="cert-badge" alt="AWS" />
              <div className="cert-info">
                <h3>AWS Certified Solutions Architect – Associate</h3>
                <p>
                  <a href="https://www.credly.com/badges/a3b75745-65ab-4796-b71f-08a54b4eb5ba/public_url" target="_blank" rel="noopener noreferrer">
                    View certificate on Credly →
                  </a>
                </p>
              </div>
            </div>

            <div className="cert-item">
              <img src={terraform} className="cert-badge" alt="Terraform" />
              <div className="cert-info">
                <h3>HashiCorp Certified: Terraform Associate (003)</h3>
                <p>
                  <a href="https://www.credly.com/badges/11c5fcd5-8673-44e5-8fbf-0d8721c3be29/public_url" target="_blank" rel="noopener noreferrer">
                    View certificate on Credly →
                  </a>
                </p>
              </div>
            </div>

            <div className="cert-item">
              <div className="cert-info">
                <h3>Full Stack Open — University of Helsinki</h3>
                <p>React, Redux, React Router, Node.js, Express, REST API, MongoDB</p>
                <p>
                  <a href="https://fullstackopen.com/en/" target="_blank" rel="noopener noreferrer">
                    fullstackopen.com →
                  </a>
                </p>
                <img src={fullstack} className="cert-wide-img" alt="Full Stack Open certificate" />
              </div>
            </div>

            <div className="cert-item">
              <div className="cert-info">
                <h3>CI/CD — University of Helsinki</h3>
                <p>GitHub Actions, Continuous Integration, Continuous Deployment, Versioning</p>
                <p>
                  <a href="https://fullstackopen.com/en/part11/" target="_blank" rel="noopener noreferrer">
                    View course →
                  </a>
                </p>
                <img src={fullstack_cicd} className="cert-wide-img" alt="CI/CD certificate" />
              </div>
            </div>

            <div className="cert-item">
              <div className="cert-info">
                <h3>Containers — University of Helsinki</h3>
                <p>Docker, Docker Compose, Nginx, Mongo, Redis</p>
                <p>
                  <a href="https://fullstackopen.com/en/part12/" target="_blank" rel="noopener noreferrer">
                    View course →
                  </a>
                </p>
                <img src={fullstack_containers} className="cert-wide-img" alt="Containers certificate" />
              </div>
            </div>

            <div className="cert-item">
              <div className="cert-info">
                <h3>CS50&apos;s Web Programming with Python and JavaScript — Harvard</h3>
                <p>Django, JavaScript, SQL</p>
                <p>
                  <a href="https://cs50.harvard.edu/web/2020/" target="_blank" rel="noopener noreferrer">
                    cs50.harvard.edu →
                  </a>
                </p>
                <img src={cs50w} className="cert-wide-img" alt="CS50W certificate" />
              </div>
            </div>

          </div>
        </div>

        {/* Work Experience */}
        <div ref={work_experience_ref} className="cv-section">
          <h2 className="cv-section-title">Work Experience</h2>
          <Job jobs={jobs} />
        </div>

        {/* Education */}
        <div ref={education_ref} className="cv-section">
          <h2 className="cv-section-title">Education</h2>
          <Education education={education} />
        </div>

        {/* Aptitudes */}
        <div ref={aptitudes_ref} className="cv-section">
          <h2 className="cv-section-title">Aptitudes</h2>

          <div className="skills-group">
            <p className="skills-group-label">Strategic</p>
            <div className="skill-tags">
              {strategicSkills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skills-group">
            <p className="skills-group-label">Technical</p>
            <div className="skill-tags">
              {technicalSkills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skills-group">
            <p className="skills-group-label">Soft Skills</p>
            <div className="skill-tags">
              {softSkills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div ref={languages_ref} className="cv-section">
          <h2 className="cv-section-title">Foreign Languages</h2>

          <div className="language-list">
            <div className="language-item">
              <span className="language-name">Czech</span>
              <span className="language-level">Mother tongue</span>
            </div>
            <div>
              <div className="language-item">
                <span className="language-name">German</span>
                <span className="language-level">Advanced</span>
              </div>
              <img src={testdaf} className="language-cert" alt="TestDaF certificate" />
            </div>
            <div>
              <div className="language-item">
                <span className="language-name">English</span>
                <span className="language-level">Advanced</span>
              </div>
              <img src={toefl} className="language-cert" alt="TOEFL certificate" />
            </div>
            <div className="language-item">
              <span className="language-name">Spanish</span>
              <span className="language-level">Advanced</span>
            </div>
            <div className="language-item">
              <span className="language-name">Italian</span>
              <span className="language-level">Basic</span>
            </div>
          </div>
        </div>

      </div>

      <ScrollToTop />
    </>
  )
}

export default Cv


Cv.propTypes = {
  jobs: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  education: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}
