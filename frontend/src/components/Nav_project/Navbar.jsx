import styled from 'styled-components';

import Burger from './Burger'

// credit to dieudonneAwa (GitHub Account) with the Navbar

const Nav = styled.nav`
    height: auto;
    display: flex;
    justify-content: space-between;
    margin-top: -15px;
    margin-bottom: -15px;
`

const Navbar = ({ about_ref, introduction_ref, implementation_ref, comments_ref }) => {
    return (
        <Nav>

            <Burger about_ref={about_ref} introduction_ref={introduction_ref}
            implementation_ref={implementation_ref} comments_ref={comments_ref} />

        </Nav>
    )
}

export default Navbar