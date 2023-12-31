import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { API_URL } from '$env/static/private';



export const load: PageServerLoad = ({ locals }) => {
	if (locals.user) throw redirect(302, '/profile');
};

export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const username = data.get('username') as string;
        const email = data.get('email') as string;
        const password = data.get('password') as string;
        const confirm = data.get('password_confirm') as string;
        const cgu = data.get('cgu') as string;
        if(cgu !== "on") return fail(400, { cgu: 'Vous devez accepter les CGU.' });
        if(password !== confirm) return fail(400, { password, confirm, mismatch: 'Les mots de passe ne corresponde pas.' });

        if(!email || !password) return fail(400, { email, password, missing: 'Email ou mots de passe sont obligatoire.' });

        const response = await fetch(API_URL + 'api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, username }),
          });
        const json = await response.json();
        if('error' in json) return fail(400, { i: json.error });
        const authToken = response.headers.get('set-cookie');
        if(!authToken) return fail (400, {i :'Inscription échoué'});
        const cookieName = authToken.substring(0, authToken.indexOf('='));
        const cookieValue = authToken.substring(authToken.indexOf('=') + 1, authToken.indexOf(';'));
    
         cookies.set(cookieName, cookieValue, { path: '/', httpOnly: true});

        throw redirect(307, '/profile');
    }
};