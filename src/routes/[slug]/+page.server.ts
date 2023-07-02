import type { PageServerLoad } from './$types';
import type { Tutorial } from '$lib/model/tutorial';
import { createComment, getCommentsByTutorial } from '$lib/servers/comments';
import { error, type Actions, fail } from '@sveltejs/kit';
import { addView } from '$lib/servers/tutorial';
import { visitedTuto } from '$lib/store/visitedTuto';
import { get } from 'svelte/store';
import { createRating, getRatingUserByTutorial, updateRating } from '$lib/servers/rating';


export const load = (async ({ parent, params}) => {
    const {tutorials, user} = await parent();
    const tutorial: Tutorial | undefined = tutorials.find((t: Tutorial) => t.id === parseInt(params.slug)) ;

    if(!tutorial) { 
        throw error(404, 'Tutorial not found');
    }
    if(user) {
            const viewedTutorials = get(visitedTuto);
            if (!viewedTutorials.includes(tutorial.id)) {
                const view = await addView(tutorial.id, user.accessToken);
    
                // Mark this tutorial as viewed
                visitedTuto.update((tuto) => {
                    tuto.push(tutorial.id);
                    return tuto;
                });
            }
    }

    const comments = await getCommentsByTutorial(tutorial.id);
    const rating = await getRatingUserByTutorial(tutorial.id);
    return {
        user: user,
        tutorial: tutorial,
        comments: comments,
        ratingTuto: rating
    };
}) satisfies PageServerLoad;


export const actions: Actions = {
    create: async ({request}) => {
        const data = await request.formData();
        let commentId: number | null = null;
        if(data.get('id_comment') !== null){
            commentId = parseInt(data.get('id_comment') as string);
        }
        const commentRaw = data.get('comment') as string;
        const tutorialId = parseInt(data.get('tutorialId') as string);

        const commentText = commentRaw.trim();

        if(!commentText || !tutorialId) return fail(400, { missing: 'La réponse ne doit pas être vide' });
        const comment = {
            content: commentText,
            parent_id: commentId !== null ? commentId : undefined,
            id_tutorial: tutorialId
        }
        const response = await createComment(comment);
    },
    addRating: async ({request}) => {
        const data = await request.formData();
        const rating_value = parseInt(data.get('rating_value') as string);
        const tutorialId = parseInt(data.get('tutorialId') as string);
        if(!rating_value || !tutorialId) return fail(400, { missing: 'La réponse ne doit pas être vide' });
        const rat = {
            rating_value: rating_value,
            id_tutorial: tutorialId
        }
        const response = await createRating(rat);
    },
    updateRating: async ({request}) => {
        const data = await request.formData();
        const rating_value = parseInt(data.get('rating_value') as string);
        const id = parseInt(data.get('id') as string);
        if(!rating_value || !id) return fail(400, { missing: 'La réponse ne doit pas être vide' });
     
        const rat = {
            rating_value: rating_value,
        }
        const response = await updateRating(id ,rat);

    }
}