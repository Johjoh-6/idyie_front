<script lang="ts">
    import Table from '$lib/components/Table.svelte';
import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h1>{data.entity}</h1>

{#if data.entity !== "dashboard"}
    <Table data={data.dataList}  actionDelete={"?/delete"} watch={`admin-${data.entity}/see-`} edit={`admin-${data.entity}/edit-`}/>
{:else}
    <p>test</p>
{/if}

<style lang="scss">
    h1 {
        text-align: center;
        text-transform: capitalize;
        font-size: 2rem;
        color: var(--c_primary);
        margin-bottom: 1rem;
    }
</style>