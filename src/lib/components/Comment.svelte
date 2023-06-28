<script lang='ts'>
    import type { CommentGet } from "$lib/model/comments";
  import { transformDate } from "$lib/utils/transformDate";
  import { page } from '$app/stores';
  import Dialog from "./Dialog.svelte";
  import { enhance } from "$app/forms";

    export let comment: CommentGet;
    export let userId: number;

    let { date, time } = transformDate(comment.date);
    let url = $page.url.href;

    $: respondComment = false;
    $:info = "Copie du lien";

</script>

<div class="user_comment">
    {#if comment.user.avatar}
    <img src="{comment.user.avatar}" alt="photo {comment.user.username}">
    {:else}
    <div class="no_avatar">
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>
    </div>
    {/if}
    <p class="name_user">
        {comment.user.username}
    </p>
    <p class="date_comment">
        Le {date} à {time}
    </p>
    <p class="comment_content">
        {comment.content}
    </p>
    <div class="comment_action">
        {#if userId && userId !== comment.user.id}
        <button on:click={()=> {
            respondComment = true;
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"></path></svg>
            <p>Répondre</p>
        </button>
        {/if}
        <button data-info={info} class="copy" on:click={() => {
            navigator.clipboard.writeText(url);
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.5759 17.2714L8.46576 14.484C7.83312 15.112 6.96187 15.5 6 15.5C4.067 15.5 2.5 13.933 2.5 12C2.5 10.067 4.067 8.5 6 8.5C6.96181 8.5 7.83301 8.88796 8.46564 9.51593L13.5759 6.72855C13.5262 6.49354 13.5 6.24983 13.5 6C13.5 4.067 15.067 2.5 17 2.5C18.933 2.5 20.5 4.067 20.5 6C20.5 7.933 18.933 9.5 17 9.5C16.0381 9.5 15.1669 9.11201 14.5343 8.48399L9.42404 11.2713C9.47382 11.5064 9.5 11.7501 9.5 12C9.5 12.2498 9.47383 12.4935 9.42408 12.7285L14.5343 15.516C15.167 14.888 16.0382 14.5 17 14.5C18.933 14.5 20.5 16.067 20.5 18C20.5 19.933 18.933 21.5 17 21.5C15.067 21.5 13.5 19.933 13.5 18C13.5 17.7502 13.5262 17.5064 13.5759 17.2714Z"></path></svg>
            <p>
                Partager
            </p>
        </button>
    </div>
    <Dialog bind:show={respondComment}>
        <div class="header_dialog" slot="header">
            <h3>Répondre a {comment.user.username}</h3>
        </div>
        <div slot="body">
            <form class="form_comment" action="/[slug]?/create" method="POST" use:enhance>
                <input type="hidden" name="id_comment" value="{comment.id}">
                <input type="hidden" name="tutorialId" value="{$page.params.slug}">
                <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Répondre" minlength="3" maxlength="255" required></textarea>
                <button type="submit">
                    Répondre
                </button>
            </form>
        </div>
        <div class="footer_dialog" slot="footer">
            <button on:click={() => respondComment = false}>
                Fermer
            </button>
        </div>
    </Dialog>
</div>

<style lang="scss">
    .user_comment{
                display: grid;
                grid-template-columns: 30px 2fr 1fr;
                grid-template-rows: 1fr 2fr 1fr;
                width: 100%;
                align-items: center;
                gap: 5px;
                img{
                    width: 25px;
                    height: 25px;
                    border-radius: var(--br_round);
                }
                .no_avatar{
                    position: relative;
                    width: 25px;
                    height: 25px;
                    border-radius: var(--br_round);
                    background-color: var(--c_grey);
                        svg{
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 20px;
                        height: 20px;
                        border-radius: var(--br_round);
                        fill: var(--c_primary);
                        z-index: 1;
                        }
                }
                .name_user{
                    font-weight: bold;
                }
                .date_comment{
                    font-weight: normal;
                    font-size: 0.625rem;
                    justify-self: flex-end;
                    opacity: 0.7;
                    white-space: nowrap;
                }
                .comment_content{
                    grid-column: 1/4;
                      width: 100%;
                      padding: 0 5px;
                      align-self: stretch;
                }
                .comment_action{
                    display: flex;
                    grid-column: 1/4;
                    width: 100%;
                    gap: 10px;
                    button{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 5px;
                        background-color: transparent;
                        border: none;
                        cursor: pointer;
                        outline: none;
                        svg{
                            width: 15px;
                            height: 15px;
                            fill: var(--color_text);
                        }
                        p{
                            font-size: 0.8rem;
                            font-weight: bold;
                            color: var(--color_text);
                        }
                    }
                    .copy{
                        position: relative;
                        &::after{
                        content: attr(data-info);
                        position: absolute;
                        bottom: 125%;
                        padding: 5px;
                        background-color: var(--c_grey);
                        opacity: 0;
                        transition: opacity 0.3s ease-in-out;
                        font-size: 0.8rem;
                        border-radius: var(--br_sm);
                        color: var(--c_primary);
                        white-space: nowrap;
                        }
                        &:hover::after{
                            opacity: 1;
                        }
                    }
                }
          }
          .header_dialog{
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
            color: var(--c_primary);
          }
          .form_comment{
                display: flex;
                flex-direction: column;
                gap: 10px;
                textarea{
                    resize: none;
                    border: 1px solid var(--c_grey);
                    border-radius: var(--br_sm);
                    padding: 5px;
                    outline: none;
                    font-size: 0.8rem;
                }
                button{
                    align-self: flex-end;
                    padding: 5px 10px;
                    border-radius: var(--br_sm);
                    background-color: var(--c_primary);
                    color: var(--c_white);
                    border: none;
                    cursor: pointer;
                    outline: none;
                    transition: background-color 0.3s ease-in-out;
                    &:hover{
                        background-color: var(--c_green);
                    }
                }
          }
          .footer_dialog{
            button{
                padding: 5px 10px;
                border-radius: var(--br_sm);
                background-color: var(--c_primary);
                color: var(--c_white);
                border: none;
                cursor: pointer;
                outline: none;
                transition: background-color 0.3s ease-in-out;
                &:hover{
                    background-color: var(--c_red);
                }
            }
          }
      
</style>