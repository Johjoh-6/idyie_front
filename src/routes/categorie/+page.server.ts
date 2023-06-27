import type { PageServerLoad } from './$types';

export const load = (async ({parent}) => {
    const {categories} = await parent();
    return {
        categories: categories
    };
}) satisfies PageServerLoad;