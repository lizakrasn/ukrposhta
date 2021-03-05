import { PostalServices } from './components/postalServices/postalServices'
import './services.sass'

export const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <PostalServices />
      </div>
    </div>
  )
}