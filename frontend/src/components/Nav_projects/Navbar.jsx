import Burger from './Burger'


const Navbar = ({ blog_ref, christmas_ref, master_paper_ref, real_estate_ref, gym_ref, speak_ref }) => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'flex-end',
      background: 'var(--bg-alt)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-sm)',
      padding: '0.375rem 0.75rem',
      margin: '0 0 1.5rem',
    }}>
      <Burger
        blog_ref={blog_ref}
        christmas_ref={christmas_ref}
        master_paper_ref={master_paper_ref}
        real_estate_ref={real_estate_ref}
        gym_ref={gym_ref}
        speak_ref={speak_ref}
      />
    </nav>
  )
}

export default Navbar
