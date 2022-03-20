import React, {useState, useEffect } from 'react'
import './MoviesList.scss'
import Pagination  from '../Pagiantion/Pagination'
import Movies from '../Movies/Movies'
import {MoviesP} from '../../interface'


interface Props {
    bodyData: MoviesP[],
    limit: number
}

const MoviesList:React.FC<Props> = ({bodyData, limit}):JSX.Element => {
    const initData:MoviesP[] = limit ? bodyData.slice(0, limit): bodyData
    const [showData, setShowData] = useState<MoviesP[]>(initData)

    useEffect(() => {
        if(limit && bodyData.length > 0) return setShowData(initData) 
    }, [bodyData, limit])


    let pages:number = 1
    let rage:number[] = []


    if(limit) {
        let page = Math.floor(bodyData.length / limit)
        pages = bodyData.length % limit === 0 ? page : page + 1
        rage = [...Array(pages).keys()]
    }   

    const [currPage, setCurrPage] = useState<number>(0)

    const selectPage = (page:number):void => {
        const start:number = limit * page
        const end:number = start + limit
        setShowData(bodyData.slice(start, end))
        setCurrPage(page)
    }

  return (
    <div>
        <div className="grid">
                {
                    showData.length > 0 ? showData.map((movie: MoviesP, index: number) => (
                        <Movies
                            key={index}
                            popular={movie}
                        />
                    )): ''
                }
            </div>
            {
                pages > 1 ? (
                    <div className="pagination">
                        {rage.map((item: number, index: number) => (
                            <Pagination key={index} dataBody={index} selectPage={selectPage} currPage={currPage}/>
                        ))}
                    </div>
                ): null
            }
    </div>
  )
}

export default MoviesList