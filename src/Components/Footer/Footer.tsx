import React from 'react'
import './Footer.scss'

interface Footer {
  title: string,
  info: string[]
}


const data:Footer[] = [  
  {title: 'technology', info:['react js', 'scss', 'aixos', 'nodejs && express']}, 
  {title: 'contact', info:['+84 398527047', 'vantuanxyz741@gmail.com', 'leotuan19@gmail.com', 'dtc20h4802010010@ictu.edu.vn']},
  {title: 'features', info: ['watch movies', 'search movies', 'order food', 'more...']},
  {title: 'future features', info: ['comments', 'play game', 'more...']}
]


const Footer:React.FC = ():JSX.Element => {
  return (
    <div className="footer">
      <div className="container">
          <div className="grid footer-list">
              {
                data.length > 0 ? data.map((item, index) => (
                  <div className="footer-box">
                    <h2>{item.title}</h2>
                    {item.info.length > 0 ? (
                      <ul>
                        {
                          item.info.map((info) => (
                            <li>{info}</li>
                          ))
                        }
                      </ul>
                    ): ''}
                  </div>
                )): ''
              }
          </div>
      </div>
    </div>
  )
}

export default Footer