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
            color: black;
            cursor: pointer;
            padding: 20px 20px 0 0;
        }
    }
`

const RightNav = ({ open, about_ref, introduction_ref, implementation_ref, comments_ref }) => {


    return (
            <Ul open={open}>

                <div className='link_section_cv' onClick={() => about_ref.current.scrollIntoView({
                    behavior: 'smooth',
                })}>
                    <b>About</b>
                </div>

                <div className='link_section_cv' onClick={() => introduction_ref.current.scrollIntoView({
                    behavior: 'smooth',
                })}>
                    <b>Introduction</b>
                </div>

                <div className='link_section_cv' onClick={() => implementation_ref.current.scrollIntoView({
                    behavior: 'smooth',
                })}>
                    <b>Implementation</b>
                </div>

                <div className='link_section_cv' onClick={() => comments_ref.current.scrollIntoView({
                    behavior: 'smooth',
                })}>
                    <b>Comments</b>
                </div>

            </Ul>
    )
}

export default RightNav