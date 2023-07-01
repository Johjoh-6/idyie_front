<script lang="ts">
    import BoxTutorial from "$lib/components/BoxTutorial.svelte";
import type { PageData } from "./$types";

    export let data: PageData;

</script>

<svelte:head>
    <title>Idyie</title>
</svelte:head>


<h1>Tous les tutoriels</h1>
<section>
    {#each data.tutorials as tuto}
        <BoxTutorial {tuto} />
    {/each}
</section>

<style lang="scss">
    section{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 1rem;
    }
</style>