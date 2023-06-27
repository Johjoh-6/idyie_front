import type { PageServerLoad } from './$types';
import { API_URL } from '$env/static/private';
import type { Tutorial } from '$lib/model/tutorial';
import type { CommentGet } from '$lib/model/comments';

export const load = (async ({parent, params}) => {
    const {tutorials} = await parent();
    const tutorial: Tutorial = tutorials.find((t: Tutorial) => t.id === parseInt(params.slug));

    const response = await fetch(API_URL + 'api/comment/tutorial/' + tutorial.id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const comments: CommentGet[] = await response.json();
    return {
        tutorial: tutorial,
        comments: comments
    };
}) satisfies PageServerLoad;