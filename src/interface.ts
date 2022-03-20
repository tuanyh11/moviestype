export interface Location {
    pathname: string,
    search: string,
    hash: string,
    state: string,
    key: string
}

export interface MoviesP{
    id: string,
    adult: boolean,
    backdrop_path: string,
    genre_ids: Array<number>,
    title: string,
    poster_path: string,
    release_date: string,
    popularity: number,
    overview: string,
    original_language: string,
    original_title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    name: string,
    first_air_date: string,
}


export interface Genre {
    id: number , 
    name: string,
}

