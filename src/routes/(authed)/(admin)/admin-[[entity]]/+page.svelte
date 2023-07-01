<script lang="ts">
    import Table from '$lib/components/Table.svelte';
import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h1>{data.entity}</h1>

<Table data={data.dataList}  />