<script lang="ts">
  import type { CommentGet } from "$lib/model/comments";
  import { transformDate } from "$lib/utils/transformDate";
  
    export let comment: CommentGet;
  </script>
  
  <li>
    <div class="user_comment">
        <img src="{comment.user.avatar}" alt="photo {comment.user.username}">
        <p class="name_user">
            {comment.user.username}
        </p>
        <p class="date_comment">
            {transformDate(comment.date)}
        </p>
    </div>
    <p class="comment_content">
        {comment.content}
    </p>
</li>
  {#if comment.res && comment.res.length > 0}
    <ul>
      {#each comment.res as com}
        {#if com.res && com.res.length > 0}
          <svelte:self {com} />
        {:else}
          <li>
            <p class="icons">
                └
            </p>
            <div class="jump">
                <div class="user_comment">
                    <img src="{comment.user.avatar}" alt="photo {comment.user.username}">
                    <p class="name_user">
                        {comment.user.username}
                    </p>
                    <p class="date_comment">
                        {transformDate(comment.date)}
                    </p>
                </div>
                <p class="comment_content">
                    {comment.content}
                </p>
            </div>
        </li>
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
      li , .jump {
          cursor: pointer; 
          padding: 10px;
            border-bottom: var(--c_grey) solid 1px;
            display: flex;
            flex-direction: column;
            gap: 5px;
          .user_comment{
                display: flex;
                width: 100%;
                align-items: center;
                gap: 5px;
                img{
                    width: 25px;
                    height: 25px;
                    border-radius: var(--br_round);
                    margin-right: 10px;
                }
                .name_user{
                    font-weight: bold;
                    flex-grow: 2;
                }
                .date_comment{
                    font-weight: normal;
                    font-size: 0.8rem;
                    justify-self: flex-end;
                }
          }
          .comment_content{
                width: 100%;
                padding: 0 5px;
          }
      }
    .icons {
          font-size: 1.8rem;
          padding: 5px;
        margin-right: 5px;
          color: var(--c_primary);
    }
  </style>
  