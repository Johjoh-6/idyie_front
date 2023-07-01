import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { closeHeader } from '$lib/store/header';
import { logout } from '$lib/servers/user';


export const actions: Actions = {
default: async ({ cookies, locals }) => {
    const log = await logout();
    cookies.delete('authToken', { path: '/' });
    locals.user = undefined;
    closeHeader();
    throw redirect(307, '/');
    
}
}