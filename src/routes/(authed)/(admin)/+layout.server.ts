import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({locals}) => {
    if(!locals.user) {
        throw error(403, 'Forbidden');
    }
    if(locals.user.role !== 'ADMIN' && locals.user.role !== 'MODERATOR') {
        throw error(403, 'Forbidden');
    }

    return {
        
    };
}) satisfies LayoutServerLoad;