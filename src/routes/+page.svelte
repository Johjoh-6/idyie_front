<script lang="ts">
    import BoxTutorial from "$lib/components/BoxTutorial.svelte";
  import { filteredTutorials } from "$lib/store/tutorials";

</script>

<svelte:head>
    <title>Idyie</title>
</svelte:head>


<h1>Tous les tutoriels</h1>
<section>
    {#each $filteredTutorials as tuto}
        <BoxTutorial {tuto} />
    {/each}
</section>

<style lang="scss">
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