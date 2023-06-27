<script lang="ts">
    import ItemNavCategorie from '$lib/components/ItemNavCategorie.svelte';
import type { PageData } from './$types';
    
    export let data: PageData;
    const categorie = data.categories;
</script>

<h1>Categorie</h1>

<ul>
    {#each categorie as cat}
        <ItemNavCategorie categorie={cat}/>
    {/each}
</ul>


<style lang="scss">
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
    }
</style>