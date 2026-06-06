import styled from 'styled-components'


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  gap: 0.125rem;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: flex-start;
    background-color: #0f172a;
    position: fixed;
    margin-top: 0;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 220px;
    z-index: 9;
    padding: 5rem 1.25rem 2rem;
    transition: transform 0.3s ease-in-out;
    gap: 0.25rem;
  }
`

const Item = styled.div`
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  cursor: pointer;
  color: #64748b;
  transition: all 0.2s ease;
  user-select: none;

  &:hover {
    background: #dbeafe;
    color: #2563eb;
  }

  @media (max-width: 768px) {
    color: rgba(255,255,255,0.75);
    width: 100%;
    border-radius: 8px;
    padding: 0.625rem 1rem;

    &:hover {
      background: rgba(255,255,255,0.1);
      color: #ffffff;
    }
  }
`


const RightNav = ({ open, gym_ref, speak_ref, real_estate_ref, blog_ref, christmas_ref, master_paper_ref }) => {
  const scrollTo = ref => ref.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <Ul open={open}>
      <Item onClick={() => scrollTo(gym_ref)}>Gym App</Item>
      <Item onClick={() => scrollTo(speak_ref)}>Offer Language Lessons</Item>
      <Item onClick={() => scrollTo(real_estate_ref)}>Real Estate App</Item>
      <Item onClick={() => scrollTo(blog_ref)}>Blog App</Item>
      <Item onClick={() => scrollTo(christmas_ref)}>Christmas Sweet</Item>
      <Item onClick={() => scrollTo(master_paper_ref)}>TDP Generator</Item>
    </Ul>
  )
}

export default RightNav
