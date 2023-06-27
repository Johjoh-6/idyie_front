<script lang="ts">
  import type { Category } from "$lib/model/categorie";

  export let categorie: Category;
</script>

<a href="/categorie/{categorie.id}"><li>{categorie.name}</li></a>
{#if categorie.sub && categorie.sub.length > 0}
  <ul>
    {#each categorie.sub as subCat}
      {#if subCat.sub && subCat.sub.length > 0}
        <svelte:self {subCat} />
      {:else}
        <a href="/categorie/{subCat.id}"
          ><li><span class="jump"> └ </span> {subCat.name}</li></a
        >
      {/if}
    {/each}
  </ul>
{/if}

<style lang="scss">
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  a {
    text-decoration: none;
    color: var(--text_light);
    & {
      border-bottom: solid 1px var(--box_light);
    }
    &:hover {
      background-color: var(--c_primary);
      color: var(--c_grey);
    }
    li {
      cursor: pointer;
      padding: 10px;
    }
  }
  .jump {
    color: var(--c_primary);
    margin-right: 5px;
  }
</style>
