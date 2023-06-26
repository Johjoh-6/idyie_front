<script lang="ts">
    import HeaderBoxCategorie from '../components/HeaderBoxCategorie.svelte';
import HeaderBoxUser from '../components/HeaderBoxUser.svelte';
  import SearchBar from '../components/SearchBar.svelte';
import type { LayoutData } from './$types';
    import Logo from '/logo-pf.svg';
    
    export let data: LayoutData;
</script>

<header>
    <div>
        <img id="logo" src="{Logo}" alt="logo">
        <HeaderBoxCategorie />
    </div>
    <SearchBar />
    <div>
        <p class="show_btn">connection</p>
        <HeaderBoxUser />
    </div>
</header>

<slot />

<style>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 2px solid var(--box_light);
        gap: 15px;
    }
    #logo{
        width: 60px;
    }
    div{
        display: flex;
        align-items: center;
        gap: 15px;
    }
    .show_btn {
    background-color: lightblue;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    .show_btn {
      display: none;
    }
  }

</style>