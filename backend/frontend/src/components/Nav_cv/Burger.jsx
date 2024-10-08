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

const Burger = ({ personal_details_ref, portfolio_ref, certificates_ref, work_experience_ref,
    education_ref, it_aptitudes_ref, languages_ref }) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            
            <RightNav open={open} personal_details_ref={personal_details_ref} portfolio_ref={portfolio_ref}
            certificates_ref={certificates_ref} work_experience_ref={work_experience_ref}
            education_ref={education_ref} it_aptitudes_ref={it_aptitudes_ref}
            languages_ref={languages_ref} />
        </>
    )
}

export default Burger