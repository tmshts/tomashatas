import { useState } from 'react'
import styled from 'styled-components'
import RightNav from './RightNav'


const StyledBurger = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  position: fixed;
  top: 82px;
  right: 1.5rem;
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 1.75rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ffffff' : '#1e293b'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`


const Burger = ({ christmas_ref, blog_ref, master_paper_ref, real_estate_ref, gym_ref, speak_ref }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav
        open={open}
        blog_ref={blog_ref}
        christmas_ref={christmas_ref}
        master_paper_ref={master_paper_ref}
        real_estate_ref={real_estate_ref}
        gym_ref={gym_ref}
        speak_ref={speak_ref}
      />
    </>
  )
}

export default Burger
