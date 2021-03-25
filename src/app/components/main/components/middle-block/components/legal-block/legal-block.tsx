import './legal-block.sass'
import { LegalLink } from './legal-link/legal-link'

export const LegalBlock = () => {
  return (
    <div className="legal-block">
      <h2 className="title">Для юридичних осіб</h2>

      <div className="legal-block__links">
        <LegalLink title="Відправлення по Україні" additionalClass="legal-block__link"/>
        <LegalLink title="Експорт" additionalClass="legal-block__link"/>
        <LegalLink title="Програмне забезпечення" additionalClass="legal-block__link"/>
        <LegalLink title="Укласти договір" additionalClass="legal-block__link"/>
        <LegalLink title="Інтеграція API" additionalClass="legal-block__link"/>
        <LegalLink title="Особистий кабінет" additionalClass="legal-block__link"/>
      </div>
    </div>
  )
}