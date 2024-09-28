import { useState } from "react";
import styled from 'styled-components';
import RightNav from './RightNav'


const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 95px;
    right: 25px;
    z-index: 20;
    display: none;


    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
        width: 2rem;
        height: 0.3rem;
        background-color: ${({ open }) => open ? 'white' : 'black'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${ ( {open} ) =>  open ? 'rotate(45deg)' : 'rotate(0)' }
        }

        &:nth-child(2) {
            transform: ${ ( {open} ) =>  open ? 'translateX(0)' : 'translateX(0)' };
            opacity: ${ ( {open} ) =>  open ? '0' : '1' };
        }

        &:nth-child(3) {
            transform: ${ ( {open} ) =>  open ? 'rotate(-45deg)' : 'rotate(0)' }
        }

    }
`;

const Burger = ({ christmas_ref, blog_ref, master_paper_ref, real_estate_ref, gym_ref }) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            
            <RightNav open={open} blog_ref={blog_ref} christmas_ref={christmas_ref} master_paper_ref={master_paper_ref}
            real_estate_ref={real_estate_ref} gym_ref={gym_ref} />
        </>
    )
}

export default Burger