import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { API_URL } from '$env/static/private';
import { closeHeader } from '$lib/store/header';

export const load: PageServerLoad = ({ locals }) => {
	if (!locals.user) throw redirect(302, '/login');
	return {
		user: locals.user
	};
};

export const actions: Actions = {
    update: async ({ request, locals }) => {
        const data = await request.formData();
        console.log(data);
    },
	logout: async ({ cookies, locals }) => {
        const res = await fetch( API_URL +'api/logout', {
            method: 'POST',
            headers: {
                'control-allows-origin': '*',
            },
            credentials: 'include'
        });
        cookies.delete('authToken', { path: '/' });
        locals.user = undefined;
        closeHeader();
        throw redirect(307, '/');
        
	}
};