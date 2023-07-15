<script lang="ts">
  import { enhance } from '$app/forms';
  import Tiny from '$lib/components/Tiny.svelte';
import type { PageData } from './$types';
import type {  ActionData } from './$types';
    

	export let form: ActionData;
    
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
    {#if form?.title}
      <p class="error">{form.title}</p>
    {/if}
    <label for="category">Choix de la catégorie</label>
    <select name="category" id="category" required>
      {#each categories as category}
        <option value={category.id}>{category.name}</option>
      {/each}
    </select>
    {#if form?.id_category}
      <p class="error">{form.id_category}</p>
    {/if}
    <label for="durate">Durée</label>
    <input type="number" name="durate" id="durate" min="0" step="1"/>
    {#if form?.durate}
      <p class="error">{form.durate}</p>
    {/if}
    <label for="content">Contenu</label>
    <Tiny  bind:val={value}/>
    {#if form?.content}
      <p class="error">{form.content}</p>
    {/if}
    <input type="hidden" name="content" id="content" value="{value}"/>
    <button>Enregistrer</button>
  </form>
</section>

<style lang="scss">
  section{
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    h1{
      font-size: clamp(2rem, 5vw, 3rem);
      color: var(--c_primary);
    }
    form{
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      label{
        font-size: clamp(1rem, 3vw, 1.5rem);
        color: var(--c_primary);
        margin-top: 0.5rem;
      }
      input, select{
        padding: 0.5rem;
        border: 1px solid var(--c_primary);
        border-radius: 5px;
        font-size: clamp(1rem, 3vw, 1.5rem);
      }
      button{
        padding: 0.5rem;
        border: 1px solid var(--c_primary);
        border-radius: 5px;
        font-size: clamp(1rem, 3vw, 1.5rem);
        color: var(--c_primary);
        background-color: transparent;
        cursor: pointer;
        &:hover{
          background-color: var(--c_primary);
          color: var(--c_white);
        }
      }
    }
    .error {
      color: var(--c_red);
      font-size: clamp(1rem, 3vw, 1.5rem);
      padding: 0.5rem;
    }
  }
</style>
