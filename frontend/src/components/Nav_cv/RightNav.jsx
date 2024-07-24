import styled from 'styled-components'


const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        color: white;
        cursor: pointer;
        padding: 0px 30px;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #eee0b9;
        position: fixed;
        margin-top: 0px;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 200px;
        z-index: 9;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        .link_section_cv {
            cursor: pointer;
            padding: 20px 20px 0 0;
        }
    }
`

const RightNav = ({ open, personal_details_ref, portfolio_ref, certificates_ref, work_experience_ref,
    education_ref, it_aptitudes_ref, languages_ref }) => {


    return (
            <Ul open={open}>

                <div className='link_section_cv' onClick={() => personal_details_ref.current.scrollIntoView({
                    behavior: 'smooth'
                })}>
                    <b>Personal Details</b>
                </div>

                <div className='link_section_cv' onClick={() => portfolio_ref.current.scrollIntoView({
                    behavior: 'smooth',
                })}>
                    <b>Portfolio</b>
                </div>

                <div className='link_section_cv' onClick={() => certificates_ref.current.scrollIntoView({
                    behavior: 'smooth',
                })}>
                    <b>Certificates</b>
                </div>

                <div className='link_section_cv' onClick={() => work_experience_ref.current.scrollIntoView({
                    behavior: 'smooth'
                })}>
                    <b>Work Experience</b>
                </div>

                <div className='link_section_cv' onClick={() => education_ref.current.scrollIntoView({
                    behavior: 'smooth'
                })}>
                    <b>Education</b>
                </div>

                <div className='link_section_cv' onClick={() => it_aptitudes_ref.current.scrollIntoView({
                    behavior: 'smooth'
                })}>
                    <b>IT Aptitudes</b>
                </div>

                <div className='link_section_cv' onClick={() => languages_ref.current.scrollIntoView({
                    behavior: 'smooth'
                })}>
                    <b>Languages</b>
                </div>

            </Ul>
    )
}

export default RightNav