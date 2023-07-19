import { error, type Actions, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getTutorial, updateTutorial } from '$lib/servers/tutorial';
import { getCategory, updateCategory } from '$lib/servers/category';
import { getComment, updateComment } from '$lib/servers/comments';
import { getUser, updateUser } from '$lib/servers/user';

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

export const actions: Actions = {
    default: async ({ request, params}) => {
        const selected = params.entity;
        const data = await request.formData();
        const id = data.get('id') as string;
        let res;
        switch(selected) {
            case "users":
                const l_name = data.get('l_name') as string;
                const f_name = data.get('f_name') as string;
                const email = data.get('email') as string;
                const username = data.get('username') as string;
                const avatar = data.get('avatar') as string;
                const role = data.get('role') as string;
                const ban = Boolean(data.get('ban'));

                const user = {
                    id: parseInt(id),
                    l_name,
                    f_name,
                    email,
                    username,
                    avatar,
                    role,
                    ban,
                };
                res = await updateUser(user, true);
                console.log(res);
                break;
            case "tutoriels":
                const title = data.get('title') as string;
                const contentTutorial = data.get('content') as string;
                const draft = data.get('draft') as string;
                const durate = data.get('durate') as string;
                const id_category = data.get('id_category') as string;

                const translateCategorie = parseInt(id_category);
                const translateDraft = draft === "true" ? true : false;
                const translateDurate = parseInt(durate);
                const tutorial = {
                    title,
                    content: contentTutorial,
                    id_category: translateCategorie,
                    draft: translateDraft,
                    durate: translateDurate,
                };
                res = await updateTutorial(parseInt(id), tutorial);
                break;
            case "categorie":
                const name = data.get('name') as string;
                res = await updateCategory(parseInt(id), name);
                break;
            case "comments":
                const contentComment = data.get('content') as string;
                const comment = {
                    content: contentComment,
                }
                res = await updateComment(parseInt(id), comment);
                break;
            default:
                throw fail(404, { message: 'Entité indisponible' });
        }
        throw redirect(303, `/admin-${selected}`);
    },
};