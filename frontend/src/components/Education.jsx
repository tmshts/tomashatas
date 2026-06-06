import PropTypes from 'prop-types'
import maynooth from '../assets/maynooth.jpg'
import usi from '../assets/usi.jpg'
import fau_urkunde from '../assets/fau_urkunde.jpg'


const Education = ({ education }) => {
  return (
    <div className="timeline">
      {education.map(edu => (
        <div key={edu.ID} className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <div className="timeline-header">
              <span className="timeline-position">{edu.grade}</span>
              <span className="timeline-date-badge">{edu.timeframe}</span>
            </div>
            <p className="timeline-company">{edu.name} · {edu.city}, {edu.country}</p>
            <ul className="timeline-tasks">
              {edu.courses.map(course => (
                <li key={course}>{course}</li>
              ))}
            </ul>
            {edu.ID === 1 && <img src={fau_urkunde} className="timeline-cert-img" alt="FAU diploma" />}
            {edu.ID === 2 && <img src={maynooth} className="timeline-cert-img" alt="Maynooth diploma" />}
            {edu.ID === 3 && <img src={usi} className="timeline-cert-img" alt="USI diploma" />}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Education


Education.propTypes = {
  education: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}
