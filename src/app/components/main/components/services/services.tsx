import { ExtraNews } from './components/extraNews/extraNews'
import { FinancialService } from './components/financialService/financialService'
import { PostalServices } from './components/postalServices/postalServices'
import './services.sass'

export const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <PostalServices />
        <ExtraNews />
        <FinancialService />
      </div>
    </div>
  )
}