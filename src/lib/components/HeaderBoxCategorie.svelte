<script lang="ts">
  import Icon from "./Icon.svelte";
  import { header } from "$lib/store/header";
  import DialogHeader from "./DialogHeader.svelte";
  import { page } from "$app/stores";
  import ItemNavCategorie from "./ItemNavCategorie.svelte";

  $: show = $header.categories;

  const openBox = () => {
    header.update((state) => {
      return {
        ...state,
        categories: !state.categories,
      };
    });
  };

  let categories = $page.data.categories;
</script>

<!-- svelte-ignore a11y-autofocus -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="btn_cat" autofocus on:click={() => openBox()}>
  <Icon name={"medal"} color={"--text_light"} />
  <Icon
    name={"arrow"}
    color={"--text_light"}
    effect={show ? "transform: rotate(180deg);" : ""}
  />
</div>
<DialogHeader bind:show>
  <div class="show_menu">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <ul on:click={openBox}>
      {#each categories as cat}
        <ItemNavCategorie categorie={cat} />
      {/each}
    </ul>
  </div>
</DialogHeader>

<style lang="scss">
  .btn_cat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-radius: var(--br_sm);
    background-color: transparent;
    border: 1px solid var(--box_light);
    height: 45px;
    width: 60px;
    max-width: 60px;
    gap: 2px;
    cursor: pointer;
  }
  .show_menu {
    background-color: var(--bg_light);
    border: 1px solid var(--box_light);
    border-radius: var(--br_sm);
    width: 100%;
    height: 100%;
    box-shadow: var(--drop_shadow);
    overflow: hidden;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
    }
  }
</style>
