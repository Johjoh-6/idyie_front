import { error, type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { deleteTutorial, getAllTutorialAdmin } from '$lib/servers/tutorial';
import { deleteCategory } from '$lib/servers/category';
import { deleteComment, getAllComments } from '$lib/servers/comments';
import { deleteUser, getAllUsers } from '$lib/servers/user';

interface Entity {
    [key: string]: string;
}

const entities: Entity = {
    dashboard: "dashboard",
    users: "users",
    tutoriels: "tutoriels",
    categorie: "categorie",
    comments: "comments",
};


export const load = (async ({ params, parent }) => {
    const entityName = params.entity;
    if(!entities[entityName ?? "dashboard"]) {
        throw error(404, 'Not found');
    }
    const entitySelected =  entities[entityName ?? "dashboard"];

    let data: any = [];
    const { catFlat } = await parent();

    switch(entitySelected) {
        case "dashboard":
            data = [];
            break;
        case "users":
            const users = await getAllUsers();
            const usersTable = users.map((user) => {
                return {
                    id: user.id,
                    avatar : user.avatar,
                    pseudo: user.username,
                    email: user.email,
                    role: user.role,
                    ban : user.ban ? "Oui" : "Non",
                    cree: user.created_at,
                    modifie: user.updated_at,
                }
            });
            data = usersTable;
            break;
        case "tutoriels":
            const tutorial = await getAllTutorialAdmin();
            const tutorialTable = tutorial.map((tuto) => {
                return {
                    id: tuto.id,
                    auteur: tuto.user.username,
                    titre: tuto.title,
                    categorie: tuto.categorie.name,
                    date: tuto.created_at,
                    status: tuto.draft ? "Brouillon" : "Publié",
                    vues: tuto.view_count,
                    commentaires: tuto.comment_count,
                    note: tuto.avg_rating,
                }
            });
            data = tutorialTable;
            break;
        case "categorie":
            const category = catFlat.map((cat) => {
                return {
                    id: cat.id,
                    nom : cat.name,
                }
            });
            data = category;
            break;
        case "comments":
            const comments = await getAllComments();
            const commentsTable = comments.map((comment) => {
                return {
                    id: comment.id,
                    tutoriel: comment.tutorial.title,
                    tutorielId: comment.tutorial.id,
                    auteur: comment.user.username,
                    auteurId: comment.user.id,
                    contenu: comment.content,
                    date: comment.date,
                }
            });

            data = commentsTable;
            break;
        default:
            throw error(404, 'Entity not found');
    }

    return {
       entity: entitySelected,
       dataList: data
    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    delete: async ({ request, params}) => {
        const selected = params.entity;
        const data = await request.formData();
        const id = data.get('id') as string;

        let res;
        switch(selected) {
            case "users":
                res = await deleteUser(parseInt(id));
                break;
            case "tutoriels":
                res = await deleteTutorial(parseInt(id));
                break;
            case "categorie":
                res = await deleteCategory(parseInt(id));
                break;
            case "comments":
                res = await deleteComment(parseInt(id));
                break;
            default:
                throw fail(404, { message: 'Entité indisponible' });
        }
    }
};
