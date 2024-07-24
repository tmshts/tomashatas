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

const RightNav = ({ open, blog_ref, christmas_ref, master_paper_ref, real_estate_ref, gym_ref }) => {


    return (
            <Ul open={open}>

                <div className='link_section_cv' onClick={() => blog_ref.current.scrollIntoView({
                    behavior: 'smooth',
                })}>
                    <b>Blog App</b>
                </div>

                <div className='link_section_cv' onClick={() => master_paper_ref.current.scrollIntoView({
                    behavior: 'smooth',
                })}>
                    <b>TDP Generator</b>
                </div>

                <div className='link_section_cv' onClick={() => real_estate_ref.current.scrollIntoView({
                    behavior: 'smooth',
                })}>
                    <b>Real Estate App</b>
                </div>

                <div className='link_section_cv' onClick={() => gym_ref.current.scrollIntoView({
                    behavior: 'smooth'
                })}>
                    <b>Gym App</b>
                </div>

                <div className='link_section_cv' onClick={() => christmas_ref.current.scrollIntoView({
                    behavior: 'smooth',
                })}>
                    <b>Christmas Sweet</b>
                </div>

            </Ul>
    )
}

export default RightNav