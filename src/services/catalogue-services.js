import axios from 'axios'
import {BACKEND_API_URL} from './api'
import { store } from '../redux';

export const getAnimeByGenre = async (genre, n_animes) => {
    let result = await axios.get(BACKEND_API_URL + '/anime-by-genre', {
        params: {
            genre: genre,
            limit: n_animes
        }
    });
    // console.log(result.data)
    return result.data
}

export const getTopAnimeByGenre = async (genre, n_animes) => {
    let result = await axios.get(BACKEND_API_URL + '/anime-top', {
        params: {
            genre: genre,
            limit: n_animes
        }
    });
    // console.log(result.data)
    return result.data
}

export const getAnimeById = async (id) => {
    let result = await axios.get(BACKEND_API_URL + '/anime', {
        params: {
            id: id
        }
    });
    // console.log(result.data)
    return result.data
}