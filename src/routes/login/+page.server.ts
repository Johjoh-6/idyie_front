import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { API_URL } from '$env/static/private';



export const load: PageServerLoad = ({ locals }) => {
	if (locals.user) throw redirect(302, '/profile');
};

export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email') as string;
        const password = data.get('password') as string;

        if(!email || !password) return fail(400, { email, password, missing: 'Email or password are missing.' });

        const response = await fetch(API_URL + 'api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });
        
        const authToken = response.headers.get('set-cookie');
        if(!authToken) throw new Error('Login failed');
        const cookieName = authToken.substring(0, authToken.indexOf('='));
        const cookieValue = authToken.substring(authToken.indexOf('=') + 1, authToken.indexOf(';'));
    
         cookies.set(cookieName, cookieValue, { path: '/', httpOnly: true});

        throw redirect(307, '/profile');
    }
};