import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import type { Category } from '$lib/model/categorie';

export const load = (async ({cookies, url, locals, parent}) => {
    if (!cookies.get('authToken')) {
		throw redirect(303, `/login?redirectTo=${url.pathname}`);
	}
    const { categories } = await parent();
    const cat = flatCategories(categories);

    return {
        user: locals.user,
        catFlat: cat
    };
}) satisfies LayoutServerLoad;

const flatCategories = (categories: Category[]) => {
    const flat: Category[] = [];
    categories.forEach(category => {
        flat.push(category);
        if (category.sub) {
            flat.push(...flatCategories(category.sub));
        }
    });
    return flat;
};