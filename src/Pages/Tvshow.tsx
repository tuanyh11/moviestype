import axios from 'axios'
import React, {useEffect, useState} from 'react'
import MoviesList from '../Components/MoviesList/MoviesList'
import {MoviesP} from '../interface'

const Tvshow = () => {
    const [tvShowList, setTvShowlist] = useState<MoviesP[]>([])

    const getTvShowlist = async() => {
        try {
            const {data} = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=3560d28824a11c2a1a510894bb37c307&language=en-US&page=1')
            setTvShowlist(data.results)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getTvShowlist()
    }, [])
  return (
    <div className=" page tvshowPage ">
        <div className="container">
           <MoviesList
                bodyData={tvShowList}
                limit={10}
            />
        </div>
    </div>
  )
}

export default Tvshow