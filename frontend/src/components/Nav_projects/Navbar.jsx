import styled from 'styled-components';

import Burger from './Burger'

// credit to dieudonneAwa (GitHub Account) with the Navbar


const Nav = styled.nav`
    height: auto;
    display: flex;
    justify-content: space-between;
    background-color: #eee0b9;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
`

const Navbar = ({ blog_ref, christmas_ref, master_paper_ref, real_estate_ref, gym_ref }) => {
    return (
        <Nav>

            <Burger blog_ref={blog_ref} christmas_ref={christmas_ref} master_paper_ref={master_paper_ref}
            real_estate_ref={real_estate_ref} gym_ref={gym_ref} />

        </Nav>
    )
}

export default Navbar