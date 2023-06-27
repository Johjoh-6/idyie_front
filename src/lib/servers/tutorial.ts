import { API_URL } from "$env/static/private";
import type { Error, Success } from "$lib/model/api";
import type { Tutorial, TutorialEdit, TutorialResponse } from "$lib/model/tutorial";


const getAllTutorial = async (): Promise<Tutorial[]> => {
    const response = await fetch(API_URL + 'api/tutorial', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const tutorials: Tutorial[] = await response.json();
    return tutorials;
}

const getTutorial = async (id: number): Promise<Tutorial> => {
    const response = await fetch(API_URL + 'api/tutorial/' + id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const tutorial: Tutorial = await response.json();
    return tutorial;
}

/**
 * Add a view to a tutorial
 * @param id of the tutorial
 * @returns {Success | Error} if the view is added
 */
const addView = async (id: number): Promise<Success | Error> => {
    const response = await fetch(API_URL + 'api/tutorial/' + id + '/view', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    });
    const tutorial: Success | Error = await response.json();
    return tutorial;
}

/**
 * Return the list of tutorial by category
 * @param cat from category
 * @returns {Tutorial[]} he list of tutorial by category
 */
const getTutorialByCategory = async (cat: number): Promise<Tutorial[]> => {
    const response = await fetch(API_URL + 'api/tutorial/category/' + cat, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const tutorials: Tutorial[] = await response.json();
    return tutorials;
}

const createTutorial = async (tutoCreate: TutorialEdit): Promise<TutorialResponse> => {
    const response = await fetch(API_URL + 'api/tutorial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tutoCreate),
        credentials: 'include'
    });
    const tutorial: TutorialResponse = await response.json();
    return tutorial;
}

const updateTutorial = async (id: number, tutoUpdate: TutorialEdit): Promise<TutorialResponse> => {
    const response = await fetch(API_URL + 'api/tutorial/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tutoUpdate),
        credentials: 'include'
    });
    const tutorial: TutorialResponse = await response.json();
    return tutorial;
}

const deleteTutorial = async (id: number): Promise<Success | Error> => {
    const response = await fetch(API_URL + 'api/tutorial/' + id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    });
    const tutorial = await response.json();
    return tutorial;
}

export { getAllTutorial, getTutorial, addView, getTutorialByCategory, createTutorial, updateTutorial, deleteTutorial };