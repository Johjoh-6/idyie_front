import { getAllCategory } from '$lib/servers/category';
import { getAllTutorial } from '$lib/servers/tutorial';
import type { LayoutServerLoad } from './$types';

export const load = (async ({locals}) => {
    const tutorials = await getAllTutorial();
    const categories = await getAllCategory();

    return {
        user: locals.user,
        tutorials: tutorials,
        categories: categories,
    };
}) satisfies LayoutServerLoad;

