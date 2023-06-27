import { getCategory } from '$lib/servers/category';
import { getTutorialByCategory } from '$lib/servers/tutorial';
import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {
    const {id} = params;
    
    const selected = await getCategory(parseInt(id));
    const tutorials = await getTutorialByCategory(parseInt(id));
    return {
        category: selected,
        tutorials: tutorials
    };
}) satisfies PageServerLoad;