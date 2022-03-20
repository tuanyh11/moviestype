import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {MoviesP, Genre} from '../interface'
import MoviesList from '../Components/MoviesList/MoviesList'
import Dropdown from '../Components/Dropdown/Dropdown'


interface Data {
    page: number, results: Array<any>, total_pages: number,  total_results: number
}



const Home:React.FC = ():JSX.Element => {

    const initGenre:Genre = {id: 9999999, name: 'All'}

    const [moviesList, setMoviesList] = useState<MoviesP[]>([])
    const [showmovies, setShowMovies] = useState<MoviesP[]>([])
    const [genreList, setGenreList] = useState<Genre[]>([])
    const [currGenre, setCurrGenre] = useState<Genre| undefined>(initGenre)
    const [isActive, setIsActive] = useState<boolean>(false)

    const getMoviesList = async () => {
        try {
            const {data}:{data: Data} = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3560d28824a11c2a1a510894bb37c307&language=en-US')
            setMoviesList(data.results)
            setShowMovies(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    const getGenreList = async () => {
        try {
            const {data} = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=3560d28824a11c2a1a510894bb37c307&language=en-US')
            setGenreList(data.genres);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getGenreList()
        getMoviesList()
    }, [])
    
    const selectValue = (id: number , name: string) => {
        setCurrGenre(genreList.find(value => value.id === id))
        setIsActive(false)
        setShowMovies([...moviesList.filter((movie, index) => movie.genre_ids.includes(id))])
        if(name === 'all' && id === 9999999) {
            setShowMovies(moviesList)
            setCurrGenre(initGenre)
            setIsActive(false)
          }
      } 
    

  return (
    <div className="homePage page">
        <div className="container">
            <div className=" homePage-head">
                <Dropdown
                    bodyData={genreList}
                    width={12}
                    currValue={currGenre}
                    isActive={isActive}
                    setIsActive={setIsActive}
                    selectValue={selectValue}
                />
            </div>
            <MoviesList 
                bodyData={showmovies}
                limit={12}
            />
            
        </div>
    </div>
  )
}

export default Home