import PropTypes from 'prop-types'

import fau from '../assets/fau.jpg'
import develop_1 from '../assets/develop_1.jpg'
import develop_2 from '../assets/develop_2.jpg'
import pactum from '../assets/pactum.jpg'
import trotec_1 from '../assets/trotec_1.jpg'
import trotec_2 from '../assets/trotec_2.jpg'


const Job = ({ jobs }) => {
  return (
    <div className="timeline">
      {[...jobs]
        .sort((a, b) => a.ID - b.ID)
        .map(job => (
          <div key={job.ID} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-header">
                <span className="timeline-position">{job.position}</span>
                <span className="timeline-date-badge">{job.timeframe}</span>
              </div>
              <p className="timeline-company">{job.company} · {job.city}, {job.country}</p>
              <ul className="timeline-tasks">
                {job.tasks.map(task => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
              {job.ID === 3 && <img src={develop_1} className="timeline-cert-img" alt="development certificate" />}
              {job.ID === 3 && <img src={develop_2} className="timeline-cert-img" alt="development certificate" />}
              {job.ID === 4 && <img src={fau} className="timeline-cert-img" alt="FAU certificate" />}
              {job.ID === 5 && <img src={pactum} className="timeline-cert-img" alt="Pactum certificate" />}
              {job.ID === 6 && <img src={trotec_1} className="timeline-cert-img" alt="Trotec certificate" />}
              {job.ID === 6 && <img src={trotec_2} className="timeline-cert-img" alt="Trotec certificate" />}
            </div>
          </div>
        ))}
    </div>
  )
}

export default Job


Job.propTypes = {
  jobs: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}
