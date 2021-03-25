import './legal-link.sass'

interface LegalLinkProps {
  title: string
  additionalClass?: string
}

export const LegalLink = ({title, additionalClass}: LegalLinkProps) => {
  return (
    <a href="#" className={`legal-link ${additionalClass}`}>
      {title}
    </a>
  )
}