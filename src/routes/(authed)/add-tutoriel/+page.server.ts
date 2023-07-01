import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { createTutorial } from '$lib/servers/tutorial';

export const load = (async ({locals}) => {
  
    // if(locals.user?.role == "USER") throw error(403, "Vous n'avez pas les droits pour accéder à cette page.");
    
    
    return {
        user: locals.user,

    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const title = data.get('title') as string;
        const content = data.get('content') as string;
        const id_category = data.get('category') as string;
        const durate = data.get('durate') as string;
        if(!title || !content || !id_category || !durate) {
            return fail(400, { missing: 'Tous les champs sont obligatoires' });
        }
        const tuto = {
            title: title,
            content: content,
            id_category: parseInt(id_category),
            durate: parseInt(durate)
        };
        const res = await createTutorial(tuto);
        throw redirect(303, '/profile');
    }
};