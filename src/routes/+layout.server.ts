import type { LayoutServerLoad } from './$types';
import { API_URL } from '$env/static/private';

export const load = (async ({locals}) => {
    const response = await fetch(API_URL + 'api/tutorial', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const tutorials = await response.json();
    locals.tutorials = tutorials;


    return {
        user: locals.user,
        tutorials: tutorials
    };
}) satisfies LayoutServerLoad;

