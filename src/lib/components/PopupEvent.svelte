<!-- Popup.svelte -->
<script>
    import { onMount } from 'svelte';
  
    export let message = '';
    export let delay = 2000; // Default delay of 2 seconds
  
    let showPopup = true;
  
    onMount(() => {
      setTimeout(() => {
        showPopup = false;
      }, delay);
    });
  </script>
  
  {#if showPopup}
    <div class="popup">
      <p>{message}</p>
    </div>
  {/if}
  
  <style>
    .popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--c_white);
      padding: 1rem;
      border: 1px solid var(--box_light);
      border-radius: var(--br_sm);
      box-shadow: var(--box_shadow);
    }
  </style>
  