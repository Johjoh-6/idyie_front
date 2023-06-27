<script lang="ts">
    import BoxTutorial from "$lib/components/BoxTutorial.svelte";
import type { PageData } from "./$types";

    export let data: PageData;
</script>
<h1>Home</h1>

{#each data.tutorials as tuto}
    <BoxTutorial {tuto} />
{/each}