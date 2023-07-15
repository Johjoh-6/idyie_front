<script lang="ts">
    import BoxTutorial from '$lib/components/BoxTutorial.svelte';
import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h1>{data.category.name}</h1>
<section>
    {#each data.tutorials as tuto}
    <BoxTutorial {tuto} />
    {/each}
</section>
    
<style>
h1{
        text-align: center;
        font-size: 2rem;
        color: var(--c_primary);
        margin-bottom: 1rem;
    }
     section{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 1rem;
        padding: 10px;
    }
</style>