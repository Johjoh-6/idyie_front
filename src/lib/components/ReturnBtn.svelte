<script lang="ts">
    function goBack() {
      window.history.back();
    }
  </script>
  
  <button on:click={goBack}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
    <p>Retour</p>
</button>
  
    <style lang="scss">
        button {
        background-color: var(--c_primary);
        color: var(--c_grey);
        padding: 10px;
        border-radius: var(--br_m);
        border: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 5px;
        svg {
            width: 20px;
            height: 20px;
            fill: var(--c_grey);
            transition: all 0.3s ease-in-out;
        }
        &:hover {
            background-color: var(--c_grey);
            color: var(--c_primary);
            svg{
                fill: var(--c_primary);
            }
        }
        }
    </style>