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
    
        let errors: any = {};
        
        if(!title)  errors.title = "Un titre est obligatoire";
        if(title.length < 3)  errors.title = "Le titre doit faire au moins 3 caractères";
        if(title.length > 255)  errors.title = "Le titre doit faire au plus 255 caractères";
        if(content.length < 3)  errors.content = "Le contenu doit faire au moins 3 caractères";
        if(!content)  errors.content = "Un contenu est obligatoire";
        if(!durate)  errors.durate = "La durée est obligatoire";
        if(!id_category)  errors.id_category = "La catégorie est obligatoire";
        
        if(Object.keys(errors).length > 0) {
            return fail(400, errors);
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