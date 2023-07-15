<!-- SearchBar.svelte -->
<script lang="ts">
 
    import Icon from './Icon.svelte';
  import { tutorialsList } from '$lib/store/tutorials';
  import { onMount } from 'svelte';
  import type { Tutorial } from '$lib/model/tutorial';
  import { searchTerm } from '$lib/store/searchTerm';
  import { goto } from '$app/navigation';

    export let tutorials: Tutorial[] = [];


onMount(async () => {
    tutorialsList.set(tutorials);
  });

  $: {
    if($searchTerm !== ""){
      goto('/');
    }
  }

  </script>
  
  <div class="search-container">
    <Icon name="search" color={"--c_grey_dark"} />
    <input type="text" placeholder="Rechercher..." class="search-input" bind:value={$searchTerm}/>
  </div>
  
  <style>
    .search-container {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 500px;
      background-color: var(--c_grey);
      border: none;
      border-radius: 25px;
      overflow: hidden;
      padding: 1px 9px;
    }
  
    .search-input {
      width: 100%;
      height: 40px;
      border: none;
      outline: none;
      background-color: transparent;
      padding-left: 10px;
      color: var(--c_grey_dark);
    }
  
    @media (max-width: 768px) {
      .search-container {
        max-width: 100%;
      }
    }
  </style>
  