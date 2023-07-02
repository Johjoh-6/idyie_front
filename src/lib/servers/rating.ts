import { API_URL } from "$env/static/private";
import type { RatingCreate, UpdateRating } from "$lib/model/rating";
import { userToken } from "$lib/store/userToken";
import { get } from "svelte/store";


const getRatingUserByTutorial = async (id: number) => {
    const token = get(userToken);
    const response = await fetch(API_URL + 'api/rating/me/'+ id , {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` },
        credentials: 'include'
    });
    const rating = await response.json();
    return rating;
}

const createRating = async (rating: RatingCreate) => {
    const token = get(userToken);
    const response = await fetch(API_URL + 'api/rating', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` },
        body: JSON.stringify(rating),
        credentials: 'include'
    });
    const ratingResponse = await response.json();
    return ratingResponse;
};

const updateRating = async (id: number, rating: UpdateRating) => {
    const token = get(userToken);
    const response = await fetch(API_URL + 'api/rating/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` },
        body: JSON.stringify(rating),
        credentials: 'include'
    });
    const ratingResponse = await response.json();
    return ratingResponse;
}

export { getRatingUserByTutorial, createRating, updateRating };