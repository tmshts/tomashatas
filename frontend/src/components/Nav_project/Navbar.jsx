import Burger from './Burger'


const Navbar = ({ about_ref, introduction_ref, implementation_ref, comments_ref }) => {
  return (
    <nav style={{ display: 'flex', alignItems: 'center' }}>
      <Burger
        about_ref={about_ref}
        introduction_ref={introduction_ref}
        implementation_ref={implementation_ref}
        comments_ref={comments_ref}
      />
    </nav>
  )
}

export default Navbar
