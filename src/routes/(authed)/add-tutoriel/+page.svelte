<script lang="ts">
  import { enhance } from '$app/forms';
  import Tiny from '$lib/components/Tiny.svelte';
import type { PageData } from './$types';
    
    export let data: PageData;
    let categories = data.catFlat;
    let value = "";
</script>
<svelte:head>
    <title>Ajouter un tutoriel</title>
</svelte:head>
<section>
  <h1>Crée un tutoriel</h1>
  <form method="POST" use:enhance >
    <label for="title">Titre</label>
    <input type="text" name="title" id="title" />
    <select name="category" id="category">
      {#each categories as category}
        <option value={category.id}>{category.name}</option>
      {/each}
    </select>
    <label for="durate">Durée</label>
    <input type="number" name="durate" id="durate" />
    <label for="content">Contenu</label>
    <Tiny  bind:val={value}/>
    <input type="hidden" name="content" id="content" value="{value}"/>

    <button>Sav</button>
  </form>
</section>


