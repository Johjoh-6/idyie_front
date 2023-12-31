import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { login } from '$lib/servers/user';



export const load: PageServerLoad = ({ locals }) => {
	if (locals.user) throw redirect(302, '/profile');
};

export const actions: Actions = {
    default: async ({ cookies, request, url }) => {
        const data = await request.formData();
        const email = data.get('email') as string;
        const password = data.get('password') as string;

        if(!email || !password) return fail(400, { email, password, missing: 'Email ou password sont manquant.' });

       const response = await login(email, password);
        console.log(response);
        const json = await response.json();
        console.log(json);
        const authToken = response.headers.get('set-cookie');
        if(!authToken) return fail (400, {error: 'Connection échoué'});
        const cookieName = authToken.substring(0, authToken.indexOf('='));
        const cookieValue = authToken.substring(authToken.indexOf('=') + 1, authToken.indexOf(';'));
    
         cookies.set(cookieName, cookieValue, { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 * 30});
 
        throw redirect(303, url.searchParams.get('redirectTo') ?? '/profile');
    }
};