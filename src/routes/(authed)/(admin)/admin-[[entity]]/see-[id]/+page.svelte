<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<!-- render all key and value in the data.selected -->
{#each Object.entries(data.selected) as [key, value]}
    <!-- Check if value is an object -->
    {#if typeof value === "object"}
    <div>
        <!-- render all key and value in the value -->
        {#each Object.entries(value) as [key, v]}
            <p>{key} : {v}</p>
        {/each}
    </div>
    {:else}
    <p>{key} : {value}</p>
    {/if}
{/each}


<style lang="scss">
    div{
        border: 1px solid var(--c_primary);
        padding: 1rem;
        margin-bottom: 1rem;
    }
    p{
        margin-bottom: 0.5rem;
        text-transform: capitalize;
    }
</style>