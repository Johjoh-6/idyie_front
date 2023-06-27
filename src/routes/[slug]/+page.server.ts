import type { PageServerLoad } from './$types';
import type { Tutorial } from '$lib/model/tutorial';
import { getCommentsByTutorial } from '$lib/servers/comments';
import { error } from '@sveltejs/kit';

export const load = (async ({parent, params}) => {
    const {tutorials} = await parent();
    const tutorial: Tutorial | undefined = tutorials.find((t: Tutorial) => t.id === parseInt(params.slug)) ;

    if(!tutorial) { 
        throw error(404, 'Tutorial not found');
    }
    const comments = await getCommentsByTutorial(tutorial.id);

    return {
        tutorial: tutorial,
        comments: comments
    };
}) satisfies PageServerLoad;