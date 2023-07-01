<script lang="ts">
  import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';

	export let form: ActionData;
</script>

<svelte:head>
    <title>S'inscrire sur Idyie</title>
</svelte:head>

<section>
    <h1>Crée un compte</h1>
    <form method="POST" use:enhance>
        {#if form?.missing}<p class="error">{form.missing}</p>{/if}
        <label for="username">Nom d'utilisateur</label>
        <input name="username" type="text" placeholder="username" />
        <label for="email">Email : </label>
        <input name="email" type="email" placeholder="test@gmail.com"/>
        <label for="password">Mot de passe : </label>
        <input name="password" type="password" />
        <label for="password_confirm">Confirmer le mots de passe : </label>
        <input name="password_confirm" type="password" />
        {#if form?.mismatch}<p class="error">{form.mismatch}</p>{/if}
        <button>S'enregistrer</button>
    </form>
</section>

<style lang="scss">
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        width: 100%;


        h1{
            font-size: 3rem;
            color: var(--c_primary);
        }
        form{
            border-radius: var(--br_sm);
            padding: 15px;
            background-color: var(--box_light);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            width: clamp(300px, 50%, 600px);

            label{
                font-weight: bold;
                color: var(--c_primary);
            }
            input{
                width: 100%;
                padding: 10px;
                border-radius: var(--br_sm);
                border: 1px solid var(--c_primary);
            }

            button{
                width: 100%;
                padding: 10px;
                border-radius: var(--br_sm);
                border: 1px solid var(--c_primary);
                background-color: var(--c_primary);
                color: var(--c_grey);
                font-weight: bold;
                cursor: pointer;
                &:hover{
                    background-color: var(--c_light);
                    color: var(--c_primary);
                }
            }

        }
    }
</style>