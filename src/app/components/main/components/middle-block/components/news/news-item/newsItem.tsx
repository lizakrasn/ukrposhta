import './newsItem.sass'

interface NewsItemProps {
  title: string
  date: string
  text : string
  imgUrl: string
  additionalClass?: string
  id: number
}

export const NewsItem = ({title, date, text, imgUrl, additionalClass}: NewsItemProps) => {
  return (
    <a className={`news-item ${additionalClass}`} href="#">
      <div className="news-item__info">
        <img className="news-item__img" src={imgUrl} alt=""/>
        <div className="news-item__title-block">
          <p className="news-item__date">{date}</p>
          <p className="news-item__title">{title}</p>
        </div>
      </div>
      <p className="news-item__text">{text}</p>
    </a>
  )
}