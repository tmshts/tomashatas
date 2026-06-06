import Burger from './Burger'


const Navbar = ({
  personal_details_ref, portfolio_ref, certificates_ref,
  work_experience_ref, education_ref, aptitudes_ref, languages_ref,
}) => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'flex-end',
      background: 'var(--bg-alt)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-sm)',
      padding: '0.375rem 0.75rem',
      margin: '1rem 0 0.5rem',
    }}>
      <Burger
        personal_details_ref={personal_details_ref}
        portfolio_ref={portfolio_ref}
        certificates_ref={certificates_ref}
        work_experience_ref={work_experience_ref}
        education_ref={education_ref}
        aptitudes_ref={aptitudes_ref}
        languages_ref={languages_ref}
      />
    </nav>
  )
}

export default Navbar
