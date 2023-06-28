<script lang='ts'>
      let dialog: HTMLDialogElement;
  
      export let show: boolean;
  
      $: if (dialog && show) dialog.showModal();
      $: if (dialog && !show) dialog.close();
  
      const handleMenuItemClick = () => {
          show = false;
      }
      
      
  </script>
  
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <dialog 
          bind:this={dialog}
          on:close={()=> handleMenuItemClick()}
          on:click|self={()=> handleMenuItemClick()}
      >
      <div>
          <slot name="header"/>
          <slot name="body"/>
            <slot name="footer"/>
      </div>
      </dialog>
  
  <style lang="scss">
       dialog{
              background-color: var(--bg_light);
              border: 1px solid var(--box_light);
              border-radius: var(--br_sm);
              box-shadow: var(--drop_shadow);
              overflow: hidden;
              width: max(300px, 40vw);
              max-width: 600px;
              max-height: 600px;
              margin: auto;
          }
        dialog[open] {
            animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes zoom {
            from {
                transform: scale(0.95);
            }
            to {
                transform: scale(1);
            }
        }
        dialog[open]::backdrop {
            animation: fade 0.2s ease-out;
        }
        @keyframes fade {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        div{
            display: flex;
            flex-direction: column;
            gap: 5px;
            padding: 10px;
        }
  </style>