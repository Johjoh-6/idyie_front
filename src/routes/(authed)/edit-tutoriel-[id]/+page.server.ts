import { error, type Actions, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getTutorial, updateTutorial } from '$lib/servers/tutorial';

export const load = (async ({locals, params}) => {
    if(!locals.user) throw error(403, "Vous n'avez pas les droits pour accéder à cette page.");
    // if(locals.user?.role == "USER") throw error(403, "Vous n'avez pas les droits pour accéder à cette page.");
    const idTutoriel = params.id;
    const res = await getTutorial(parseInt(idTutoriel));
    if('error' in res) throw error(404, "Ce tutoriel n'existe pas.");
    if(!res.user) throw error(404, "Ce tutoriel n'existe pas.");
    if(res.user.id !== locals.user?.id) throw error(403, "Vous n'avez pas les droits de modifier ce tutoriel.");
    
    return {
        user: locals.user,
        tutorial: res

    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ request, params }) => {
        const data = await request.formData();
        const title = data.get('title') as string;
        const content = data.get('content') as string;
        const id_category = data.get('category') as string;
        const durate = data.get('durate') as string;
        const idTuto = data.get('idTuto') as string;
        if(!title || !content || !id_category || !durate) {
            return fail(400, { missing: 'Tous les champs sont obligatoires' });
        }
        const tuto = {
            title: title,
            content: content,
            id_category: parseInt(id_category),
            durate: parseInt(durate)
        };
        const res = await updateTutorial(parseInt(idTuto) ,tuto);
        throw redirect(303, '/profile');
    }
}