import React from 'react'
import {MoviesP} from '../../interface'
import { Link } from 'react-router-dom'
import './Movies.scss'

interface Props<T> {
    popular: T
}

const Movies:React.FC<Props<MoviesP>> = (props):JSX.Element => {
    console.log(props.popular.name)
  return (
    <div className="movie">
       <Link to='/'>
            <img src={`https://image.tmdb.org/t/p/w500${props.popular.backdrop_path}`} alt="" />
            <div className="movie-info">
                <h2>{props.popular.title || props.popular.name}</h2>
                <p>{props.popular.release_date || props.popular.first_air_date}</p>
            </div>
       </Link>
       
    </div>
  )
}

export default Movies