<script lang="ts">
    import { enhance } from '$app/forms';
  import ReturnBtn from '$lib/components/ReturnBtn.svelte';
  import type { ActionData, PageData } from './$types';
      
      export let data: PageData;
      export let form: ActionData;


  </script>
  
  <ReturnBtn />
  <!-- get all field and value and prepare a form -->
  <form method="POST" use:enhance>
    <label for="name">Nom</label>
    <input type="text" name="name" id="name" value="">
    {#if form?.name}
        <p class="error">{form?.name}</p>
    {/if}
    <label for="parent">Catégorie parent</label>
    <select name="parent" id="parent" value="">
        <option value="">Aucun</option>
        {#each data.catFlat as category}
            <option value={category.id}>{category.name}</option>
        {/each}
    </select>
    
         
      <button type="submit">Save</button>
  </form>
  
  <style lang="scss">
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
      .error{
          color: var(--c_red);
      }
  
  </style>