import PropTypes from 'prop-types'

import fau from '../assets/fau.jpg'
import develop_1 from '../assets/develop_1.jpg'
import develop_2 from '../assets/develop_2.jpg'
import pactum from '../assets/pactum.jpg'
import trotec_1 from '../assets/trotec_1.jpg'
import trotec_2 from '../assets/trotec_2.jpg'


const Job = ({ jobs }) => {

    return (
      <>
            {jobs.map(job => (
                <div key={job.ID}>

                    <div className="company line_height">{job.company}, {job.city}, {job.country}</div>

                    <div>
                        <div className="job line_height"><i>{job.position}</i></div>
                    </div>

                    <div>
                        <div><i>{job.timeframe}</i></div>
                    </div>

                    <ul className="list_tasks">
                        {job.tasks.map(task => (
                        <li key={task}>{task}</li>
                        ))}
                    </ul>
                    
                    <div className="aptitudes">
                        <b>Aptitudes: </b>{job.aptitudes}
                    </div>

                    {job.ID == 1 && <img src={develop_1} className='certificate' alt="develop_1"/> }
                    {job.ID == 1 && <img src={develop_2} className='certificate' alt="develop_2"/> }

                    {job.ID == 2 && <img src={fau} className='certificate' alt="fau"/> }

                    {job.ID == 3 && <img src={pactum} className='certificate' alt="pactum"/> }

                    {job.ID == 4 && <img src={trotec_1} className='certificate' alt="trotec_1"/> }
                    {job.ID == 4 && <img src={trotec_2} className='certificate' alt="trotec_2"/> }

                </div>

            ))
            }

      </>
    )
  }


export default Job


Job.propTypes = {
    jobs: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ])
}