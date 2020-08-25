import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: 'f3341ae37fe392613293736e7f266ef5',
        language: "ko-KR"
    }
});

export const movieApi = {
     popular: () => api.get("movie/popular"),

}

export const tvApi = {
    popular: () => api.get('tv/popular')
}

export const trendApi = {
    trending: () => api.get('trending/all/day')
}

export const ratingApi = {
    rating: ()=> api.get('movie/top_rated')
}

export const ratingTvApi = {
    TvRating: ()=> api.get('tv/top_rated')
}

export const personApi = {
    People: ()=> api.get('person/popular')
}


