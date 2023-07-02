import { error, type Actions, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { createCategory } from '$lib/servers/category';

export const load = (async ({params}) => {
    const {entity} = params;
    if(!entity) {
        throw error(404, 'Schéma non trouvée');
    }
    if(entity !== "categorie") {
        throw error(404, 'Page non disponible');
    }

    return {};
}) satisfies PageServerLoad;


export const actions: Actions = {
    default: async ({ request, params}) => {
        const selected = params.entity;
        const data = await request.formData();
        const parent = data.get('parent') as string;
        const name = data.get('name') as string;

        if(!name) return fail(400, {name:"Le nom est obligatoire"});
        if(name.length < 3) return fail(400, {name:"Le nom doit faire au moins 3 caractères"});
        if(name.length > 255) return fail(400, {name:"Le nom doit faire au plus 255 caractères"});

        const res = await createCategory(name, parseInt(parent));
        throw redirect(303, `/admin-${selected}`);
    },
};