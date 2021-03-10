import './news.sass'
import { news } from '../../../../../../../data/data'
import { NewsItem } from './news-item/newsItem'

export const News = () => {
  return (
    <div className="news">
      <h2 className="title">Новини</h2>
      <div className="news__wrapper">
        {news.map(item => {
          return (
            <NewsItem
              date={item.date}
              title={item.title}
              text={item.text}
              imgUrl={item.imgUrl}
              id={item.id}
            />
          )
        })}
      </div>
    </div>
  )
}