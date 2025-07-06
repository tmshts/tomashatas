import PropTypes from 'prop-types'
import maynooth from '../assets/maynooth.jpg'
import usi from '../assets/usi.jpg'


const Education = ({ education }) => {
    return (
      <>

            {education.map(education => (
                <div className='aptitudes' key={education.ID}>
                    <div className='company line_height'>{education.name}, {education.city}, {education.country}</div>

                        <div className='job line_height'><i>{education.grade}</i></div>
                        <div><i>{education.timeframe}</i></div>

                    <ul className='list_tasks'>
                        {education.courses.map(course => (
                            <li key={course}>{course}</li>
                        ))}
                    </ul>

                    {education.ID == 2 && <img src={maynooth} className='certificate' alt="maynooth"/> }
                    
                    {education.ID == 3 && <img src={usi} className='certificate' alt="usi"/> }

                </div>
            ))

            }

      </>
    )
  }


export default Education


Education.propTypes = {
    education: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ])
}