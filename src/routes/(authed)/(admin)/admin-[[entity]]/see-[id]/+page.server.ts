import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getTutorial } from '$lib/servers/tutorial';
import { getCategory } from '$lib/servers/category';
import { getComment } from '$lib/servers/comments';
import { getUser } from '$lib/servers/user';

export const load = (async ({params}) => {
    const { entity, id } = params;
    if(!entity) {
        throw error(404, 'Entité non trouvée');
    }
    if(!id) {
        throw error(404, 'ID non trouvé');
    }

    let selected;
    switch(entity) {
        case "users":
            const user = await getUser(parseInt(id));
            console.log(user);
            selected = await getUser(parseInt(id));
            break;
        case "tutoriels":
            selected = await getTutorial(parseInt(id));
            break;
        case "categorie":
            selected = await getCategory(parseInt(id));
            break;
        case "comments":
            selected = await getComment(parseInt(id));
            break;
        default:
            throw error(404, 'Entité non trouvée');
    }

    return {
        selected,
    };
}) satisfies PageServerLoad;