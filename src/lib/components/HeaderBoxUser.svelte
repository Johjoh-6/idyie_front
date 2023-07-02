<script lang='ts'>
  import { enhance } from '$app/forms';
  import { page } from '$app/stores';
    import Icon from './Icon.svelte';
    import { header } from '$lib/store/header';
  import DialogHeader from './DialogHeader.svelte';

   
    const openBox = () => {
        header.update((state) => {
            return {
                ...state,
                user: !state.user
            }
        })
    }

    const handleMenuItemClick = () => {
        header.update((state) => {
            return {
                ...state,
                user: false
            }
        })
    }

     $: show = $header.user;
    
</script>

<!-- svelte-ignore a11y-autofocus -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<section>
    <div class="user" autofocus on:click={()=> openBox()} >
        <Icon name={"user"} color={"--box_light"}/>
        <Icon name={"arrow"} color={"--box_light"} effect={show ? "transform: rotate(180deg);" : ""}/>
    </div>
    {#if show}
    <DialogHeader bind:show={show}>
        <div class="show_menu" >
           <ul>
               <a href="/" on:click={handleMenuItemClick}><li>Accueil</li></a>
               <a href="/about" on:click={handleMenuItemClick}><li>A propos</li></a>
               {#if $page.data.user}
                    {#if $page.data.user.role !== "USER"}
                        <a href="/add-tutoriel" on:click={handleMenuItemClick}><li>Crée un tutoriel</li></a>
                    {/if}
                <a href="/profile" on:click={handleMenuItemClick}><li>Profil</li></a>
               {#if $page.data.user.role == "ADMIN" || $page.data.user.role == "MODERATOR"}
                <a href="/admin-" on:click={handleMenuItemClick}><li>Dashboard</li></a>
                {/if}
               <form class="logout" method="POST" action="/logout" use:enhance={handleMenuItemClick}><button type="submit">Déconection</button></form>
               {:else}
               <a href="/login" on:click={handleMenuItemClick}><li>Se connecter</li></a>
               <a href="/register" on:click={handleMenuItemClick}><li>S'inscrire</li></a>
               {/if}
           </ul>
       </div>
    </DialogHeader>
    {/if}
</section>

<style lang="scss">
    section{
        position: relative;     
        .user{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px;
            border-radius: var(--br_sm);
            background-color: transparent;
            border: 1px solid var(--box_light);
            height: 45px;
            width: 60px;
            max-width: 60px;
            gap: 2px;
            cursor: pointer;

        }
        .show_menu{
            background-color: var(--bg_light);
            border: 1px solid var(--box_light);
            border-radius: var(--br_sm);
            width: 100%;
            height: 100%;
            box-shadow: var(--drop_shadow);
            overflow: hidden;
            ul{
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                a{
                    text-decoration: none;
                    color: var(--text_light);
                    &:not(:last-child){
                        border-bottom: solid 1px var(--box_light);
                    }
                    &:hover{
                        background-color: var(--c_primary);
                        color: var(--c_grey);
                    }
                    li{
                        cursor: pointer;
                        padding: 10px;
                    }
                }
                .logout{
                    cursor: pointer;
                    padding: 10px;
                    &:hover{
                        background-color: var(--c_primary);
                        color: var(--c_grey);
                        & > * {
                            color: var(--c_grey);
                        }
                    }
                    button {
                        background-color: transparent;
                        border: none;
                        color: var(--text_light);
                        cursor: pointer;
                        font-size: 16px;
                        &:hover{
                            color: var(--c_grey);
                        }
                    }
                }
            }
        }
    }
</style>