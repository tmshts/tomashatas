import PropTypes from 'prop-types'

const Job = ({ jobs }) => {

    return (
      <>
            {jobs.map(job => (
                <div key={job.ID}>
                    <div className="company">{job.company}, {job.city}, {job.country}</div>

                    <div>
                        <div className="job"><i>{job.position}</i></div>
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