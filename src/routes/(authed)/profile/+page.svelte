<script lang="ts">
  import { enhance } from '$app/forms';
  import { transformDate } from '$lib/utils/transformDate';
	import type { PageData, ActionData } from './$types';

	export let data: PageData;
    export let form: ActionData;

    const dateChange = (created : string ) => {
        const {date, time } =transformDate(created);
        return `Le ${date} à ${time}`;
    }

</script>

<svelte:head>
    <title>Mon profil</title>
</svelte:head>

<h1>Bienvenue {data.userApi?.username ?? 'Inconnue'}</h1>

<section class="update_profile">
    <h2>Mettre a jour votre profile</h2>
    {#if form?.message}
        <p class="error">{form.message}</p>
    {/if}
    
    <form  action="?/update" method="POST" use:enhance>
        <label for="l_name">Nom</label>
        <input name="l_name" type="text" value={data.userApi?.l_name ?? 'Inconnue'} />

        <label for="f_name">Prénom</label>
        <input name="f_name" type="text" value={data.userApi?.f_name ?? 'Inconnue'} />

        <label for="username">Username</label>
        <input name="username" type="text" value={data.userApi?.username ?? 'Inconnue'} />   
    
        <label for="email">Email</label>
        <input name="email" type="email" placeholder="email" value="{data.userApi?.email}" />

        <label for="password">Mot de passe</label>
        <input name="password" type="password" placeholder="password" />

        <label for="passwordConfirm">Confirmer le mot de passe</label>
        <input name="passwordConfirm" type="password" placeholder="password" />

        <img src="{data.userApi?.avatar}" alt="avatar">
        <label for="avatar">Avatar</label>
        <input name="avatar" type="url" value={data.userApi?.avatar}/>



        <button class="btn btn-outline-primary">Update</button>
    </form>
</section>

{#if data.user?.role !== "user" }
<section class="tutorials">
    {#if data.tutoUser.length > 0}
        <h2>Vos tutoriels</h2>
        <table>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Catégorie</th>
                    <th>Durée</th>
                    <th>Date</th>
                    <th>Voir</th>
                    <th>Éditer</th>
                    <th>Supprimer</th>
                </tr>
            </thead>
            <tbody>
                {#each data.tutoUser as tutoriel}
                    <tr>
                        <td data-cell="titre">{tutoriel.title}</td>
                        <td data-cell="Catégorie">{tutoriel.categorie.name}</td>
                        <td data-cell="Durée">{tutoriel.durate} min</td>
                        <td data-cell="Date">{dateChange(tutoriel.created_at)}</td>
                        <td data-cell="Voir"><a href="/{tutoriel.id}">Voir</a></td>
                        <td data-cell="Éditer"><a href="/edit-tutoriel-{tutoriel.id}">Editer</a></td>
                        <td data-cell="Supprimer"><form action="/profile?/delete" method="POST" use:enhance>
                            <input type="hidden" name="id" value={tutoriel.id} />
                            <button class="btn btn-outline-danger">Supprimer</button>
                        </form></td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {:else}
        <h2>Vous n'avez pas encore de tutoriel</h2>
    {/if}
</section>
{/if}

<style lang="scss">

h1{
    margin-bottom: 1rem;
    padding: 1rem;
    text-align: center;
    color: var(--c_primary);
    border-bottom: var(--c_primary) 3px solid;
}
.update_profile{
    padding: 2rem 0;
    border-bottom: var(--c_primary) 3px solid;
    h2{
        margin-bottom: 1rem;
        text-align: center;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        label{
            margin-bottom: 0.5rem;
            color: var(--c_primary);
        }
        input{
            margin-bottom: 1rem;
            padding: 0.5rem 1rem;
            border-radius: var(--br_m);
            border: 1px solid var(--c_primary);
        }
        button{
            border: none;
            padding: 0.5rem 1rem;
            border-radius: var(--br_m);
            cursor: pointer;
            background-color: var(--c_primary);
            color: var(--c_white);
        }
        img{
            width: 100px;
            height: 100px;
            border-radius: var(--br_round);
            margin-bottom: 1rem;

        }
    }
}

.tutorials{
    padding: 1rem 0 ;
    h2{
        margin-bottom: 1rem;
        text-align: center;
        color: var(--c_primary);
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        padding: 0.3rem;
        form{
            display: inline-block;
        }
        button{
        border: none;
        padding: 0.5rem 1rem;
        border-radius: var(--br_m);
        cursor: pointer;
        background-color: var(--c_red);
        color: var(--c_white);
    }
    }
    th{
        background-color: var(--c_primary);
        color: var(--c_white);
    }
    td{
        text-align: center;
    }
    td::before{
        display: none;
    }

    tr:nth-child(even) {
        background-color: var(--box_light);
    }
    
    @media screen and (max-width: 600px) {
        td::before{
            display: inline-block;
            content: attr(data-cell) " : ";
            text-transform: capitalize;
            font-weight: bold;
            margin-right: 5px;
            color: var(--c_primary);
        }
        td{
            text-align: left;
            display: block;
            padding: 0.5rem 1rem;
        }
        th{
            display: none;
        }
        td:first-child{
            border-top-left-radius: var(--br_sm);
            border-top-right-radius: var(--br_sm);
            padding-top: 2rem;
        }
        td:last-child{
            border-bottom-left-radius: var(--br_sm);
            border-bottom-right-radius: var(--br_sm);
            padding-bottom: 2rem;
        }
        tr{
            border: 1px solid var(--box_light);
        }
        tr:nth-child(even) {
            background-color: var(--box_light);
        }
    }
}
</style>