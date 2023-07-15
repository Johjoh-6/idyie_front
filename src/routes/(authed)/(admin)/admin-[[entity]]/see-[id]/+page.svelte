<script lang="ts">
  import { goto } from '$app/navigation';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>


<section>
{#each Object.entries(data.selected) as [key, value]}
{#if key !== "password" && key !== "created_at" && key !== "updated_at" && key !== "date" && key !== "avg_rating" && key !== "user" && key !== "id_category_parent" && key !== "tutorial"}
            {#if key === "role" }
                <p><span class="title"> Role : </span>{value}</p>
            {:else if key === "ban"}
                <p><span class="title">Ban : </span>{value ? "Vrai" : "faux"}</p>
            {:else if key === "email"}
               <p><span class="title">Email : </span><a href="mailto:{value}">{value}</a></p>
            {:else if key === "avatar"}
                <img src="{value}" alt="avatar">
            {:else if key === "content"}
                <p><span class="title">Contenue : </span></p>
                {@html value}
            {:else if key === "view_count"}
                <p><span class="title">Nombre de vue :</span> {value}</p>
            {:else if key ==="durate"}
                <p><span class="title">Durée : </span>{value}</p>
            {:else if key === "categorie"}
                <p><span class="title">Catégorie : </span>{value.name}</p>
            {:else if key === "draft"}
                <p><span class="title">Publiée :</span> {value ? "Publié": "Brouillon"}</p>
            {:else}
                <p><span class="title">{key} :</span> {value}</p>
            {/if}
        {/if}
{/each}
<button on:click={() => {
    if ('id' in data.selected) {
        goto(`edit-${data.selected.id}`);
    }
}}>Modifier</button>
</section>

<style lang="scss">

    section{
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    span{
        font-size: clamp(1rem, 2vw, 1.5rem);
        color: var(--c_primary);
        font-weight: bold;
    }
    img{
        width: 150px;
        height: auto;
        border-radius: var(--br_round);
    }
    }
    button{
        padding: 10px;
        border-radius: var(--br_sm);
        color: var(--text_light);
        background-color: var(--c_grey);
        border: none;
        font-weight: bold;
        font-size: clamp(1rem, 2vw, 1.5rem);
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover{
            background-color: var(--c_primary);
            color: var(--c_grey);
        }
    }
</style>