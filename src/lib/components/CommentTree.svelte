<script lang="ts">
  import type { CommentGet } from "$lib/model/comments";
  import Comment from "./Comment.svelte";
  
    export let comment: CommentGet;
    export let userId: number;
  </script>
  
<li>
   <Comment {comment} {userId}/>
</li>
  {#if comment.res && comment.res.length > 0}
    <ul>
      {#each comment.res as com}
        {#if com.res && com.res.length > 0}
          <svelte:self {com} />
        {:else}
          <li>
            <p class="icons">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.00014 13.9999L5 5.00003L7 5L7.00011 11.9999L14.5862 12V6.58581L21.0004 13L14.5862 19.4142L14.5862 14L5.00014 13.9999Z"></path></svg>
            </p>
                <Comment comment={com} {userId}/>
        </li>
        {/if}
      {/each}
    </ul>
  {/if}
  
  <style lang="scss">
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      @media screen and (min-width: 768px) {
        gap: 10px;
      }
    }
      li {
          cursor: pointer; 
          padding: 10px;
            border-bottom: var(--c_grey) solid 1px;
            display: flex;
            flex-direction: row;
            gap: 5px;
            align-items: center;
            @media screen and (min-width: 768px) {
              width: 80%;
              margin-inline: auto;
              border: solid 1px var(--box_light);
              border-radius: var(--br_sm);
              background-color: var(--box_light);
              box-shadow: var(--drop_shadow);
            }
      }
    .icons {
          svg{
            width: 1.8rem;
            height: 1.8rem;
            fill: var(--c_primary);
          }
    }
  </style>
  