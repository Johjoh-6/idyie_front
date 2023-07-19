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

  <style lang="scss">
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      h1{
        font-size: 3rem;
        color: var(--c_primary);
        margin: 2rem 0;
      }
  }
       form {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 10px;
        margin: 0 auto;
        max-width: 600px;
        gap: 10px;
        label {
            font-weight: bold;
            color: var(--c_primary);
            margin-bottom: 0.3rem;
        }
        input {
            padding: 5px;
            border: 1px solid var(--c_grey);
            border-radius: 5px;
            &:focus {
                outline: none;
                border: 1px solid var(--c_primary);
            }
        }
        select{
            padding: 5px;
            border: 1px solid var(--c_grey);
            border-radius: 5px;
            &:focus {
                outline: none;
                border: 1px solid var(--c_primary);
            }
        }
        textarea{
            padding: 5px;
            border: 1px solid var(--c_grey);
            border-radius: 5px;
            &:focus {
                outline: none;
                border: 1px solid var(--c_primary);
            }
        }
        button{
            padding: 5px;
            border: 1px solid var(--c_grey);
            border-radius: 5px;
            background-color: var(--c_primary);
            color: var(--c_white);
            transition: all 0.3s ease-in-out;
            &:hover{
                cursor: pointer;
                background-color: var(--c_grey);
                color: var(--c_primary);
            }
        }
    }

  </style>