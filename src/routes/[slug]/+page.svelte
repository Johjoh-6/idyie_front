<script lang="ts">
    import CommentTree from '$lib/components/CommentTree.svelte';
import type { PageData } from './$types';
    
    export let data: PageData;
    const tuto = data.tutorial;
    const comments = data.comments;
</script>

<h1>{tuto.title}</h1>

<div>
    <p>{tuto.user.username}</p>
    <p>{tuto.categorie.name}</p>
    <p>{tuto.view_count}</p>
    <p>{tuto.avg_rating}</p>
    <p>{tuto.date}</p>
</div>
<section>
    {@html tuto.content}
</section>
<section>
    <h2>Comments</h2>
    <ul>
    {#each comments as comment}
       <CommentTree {comment} />
    {:else}
        <li>No comments yet</li>
    {/each}
    </ul>
</section>