import axios from 'axios'
import {BACKEND_API_URL} from './api'
import { store } from '../redux';

export const createRating = async (user_id, anime_id, rating) => {
    let formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('anime_id', anime_id);
    formData.append('rating', rating);

    let result = await axios.post(BACKEND_API_URL + '/create-rating', formData , {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // console.log(result.data)
    return result.status == 200 ? true : false
}

export const getAllRatings = async () => {
    let result = await axios.get(BACKEND_API_URL + '/get-rating');
    // console.log(result.data)
    return result.data
}

export const getAllRatingsByUserId = async (user_id) => {
    console.log("user_id: " + user_id)
    let result = await axios.get(BACKEND_API_URL + '/get-ratings-by-user' , {
        params: {
            user_id: user_id,
        }
    });
    return result.data
}

export const getRatingByIds = async (user_id, anime_id) => {
    let result = await axios.get(BACKEND_API_URL + '/get-rating-by-ids' , {
        params: {
            user_id: user_id,
            anime_id: anime_id
        }
    });
    // console.log("is rated: ")
    // console.log(result.data)
    return result.data
}