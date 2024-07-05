import styled from 'styled-components';

import Burger from './Burger'

// credit to dieudonneAwa (GitHub Account) with the Navbar


const Nav = styled.nav`
    height: auto;
    display: flex;
    justify-content: space-between;
    background-color: #00A693;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    color: white;    
`

const Navbar = ({ personal_details_ref, portfolio_ref, certificates_ref, work_experience_ref,
    education_ref, it_aptitudes_ref, languages_ref }) => {
    return (
        <Nav>

            <Burger personal_details_ref={personal_details_ref} portfolio_ref={portfolio_ref}
            certificates_ref={certificates_ref} work_experience_ref={work_experience_ref}
            education_ref={education_ref} it_aptitudes_ref={it_aptitudes_ref}
            languages_ref={languages_ref} />

        </Nav>
    )
}

export default Navbar