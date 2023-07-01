<script lang="ts">
    import { page } from '$app/stores';
</script>

<div>
    <h1>{$page.status}</h1>
    <p>{$page.error?.message}</p>
</div>


<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    h1{
        font-size: 5rem;
        color: var(--c_primary);
    }
    p{
        font-size: 2rem;
        color: var(--c_primary);
    }
</style>

