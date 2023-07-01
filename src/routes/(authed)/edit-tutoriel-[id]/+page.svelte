<script lang="ts">
    import Tiny from '$lib/components/Tiny.svelte';
  import type { PageData } from './$types';
  import { enhance } from '$app/forms';
      
      export let data: PageData;
      let value = data.tutorial.content;
      let tuto = data.tutorial;
      let categories = data.catFlat;
  </script>
  
  <svelte:head>
    <title>Éditer son tutoriel</title>
</svelte:head>

  <section>
    <h1>Modifier votre tutoriel</h1>
    <form method="POST" use:enhance >
      <label for="title">Titre</label>
      <input type="text" name="title" id="title" value={tuto.title}/>
      <select name="category" id="category" value={tuto.categorie.id}>
        {#each categories as category}
          <option value={category.id}>{category.name}</option>
        {/each}
      </select>
      <label for="durate">Durée</label>
      <input type="number" name="durate" id="durate" value={tuto.durate}/>
      <label for="content">Contenu</label>
      <Tiny  bind:val={value}/>
      <input type="hidden" name="content" id="content" value="{value}"/>
      <input type="hidden" name="idTuto" id="idTuto" value="{tuto.id}"/>
  
      <button>Sav</button>
    </form>
  </section>