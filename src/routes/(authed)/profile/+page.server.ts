import { error, fail, json } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { deleteTutorial, getTutorialByUser } from '$lib/servers/tutorial';
import { getUserById, updateUser } from '$lib/servers/user';

export const load: PageServerLoad = async ({ locals }) => {
    if(!locals.user) throw error(403, "Vous n'avez pas les droits pour accéder à cette page.");
    const id = locals.user.id;
    const tutorial = await getTutorialByUser(id);
    const fullUser = await getUserById();
    
	return {
        user: locals.user,
		userApi: fullUser,
        tutoUser: tutorial
	};
};

export const actions: Actions = {
    update: async ({ request, locals }) => {
        const data = await request.formData();
        const l_name = data.get('l_name') as string;
        const f_name = data.get('f_name') as string;
        const email = data.get('email') as string;
        const password = data.get('password') as string;
        const passwordConfirm = data.get('passwordConfirm') as string;
        const username = data.get('username') as string;
        const avatar = data.get('avatar') as string;

        let passwordVerify = "";
        if(password !== passwordConfirm) {
            return fail(400, { message: "Les mots de passe ne correspondent pas." });
        }else{
            if(password.length > 0 && password.length < 8) { 
                return fail(400, { message: "Le mots de passe doit contenir au moins 8 caractères." });
            } else {
                passwordVerify = password;
            }
        }


        const user = {
            l_name: l_name,
            f_name: f_name,
            email: email,
            password: passwordVerify,
            username: username,
            avatar: avatar
        };

        const res = await updateUser(user);
        if (res.username){
            return json({success: "Votre compte a bien été modifié"});
        } 

    },
    delete: async ({ request}) => {
        const data = await request.formData();
        const id = data.get('id') as string;
        const res = await deleteTutorial(parseInt(id));
    }
};