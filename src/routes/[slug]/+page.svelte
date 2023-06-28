<script lang="ts">
  import { goto } from '$app/navigation';
    import CommentTree from '$lib/components/CommentTree.svelte';
  import Dialog from '$lib/components/Dialog.svelte';
  import { transformDate } from '$lib/utils/transformDate';
import type { PageData } from './$types';
    
    export let data: PageData;
    const tuto = data.tutorial;
    const comments = data.comments;
    const userId = data.user?.id ?? 0;
    let { date, time} = transformDate(tuto.created_at);
    $: showDialog = false;

</script>

<section class="main">
<div class="head_tuto">
    <h1>{tuto.title}</h1>
    <div class="user_tuto">
        {#if tuto.user.avatar}
        <img src="{tuto.user.avatar}" alt="photo {tuto.user.username}">
        {:else}
        <div class="no_avatar">
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>
        </div>
        {/if}
        <div>
            <p class="username">{tuto.user.username}</p>
            <p class="date">Le {date} à {time}</p>
        </div>
        <p class="category">{tuto.categorie.name}</p>
    </div>
</div>
<section class="tutorial_content">
    {@html tuto.content}
</section>
<div class="display_info">
    <div>
        <p>{comments.length}</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"></path></svg>
    </div>
    <div>
        <p>{tuto.view_count}</p>
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>
    </div>
    <div>
        <p>{tuto.avg_rating} / 5</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
    </div>
</div>
<button class="add_comment" on:click={
    () => {
        if(data.user == null) {
            goto('/login');
        }
        showDialog = true;
    }
}>
+ Ajouter un commentaire
</button>
<section class="comment_section">
    <ul>
    {#each comments as comment}
       <CommentTree {comment} {userId}/>
    {:else}
        <li>No comments yet</li>
    {/each}
    </ul>
        <Dialog bind:show={showDialog}>
            <div class="header_dialog" slot="header">
                <h3>Ajouter un commentaire</h3>
            </div>
            <div slot="body">
                <form class="form_comment" action="?/create" method="POST" >
                    <input type="hidden" name="tutorialId" value="{tuto.id}">
                    <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Répondre" minlength="3" maxlength="255" required></textarea>
                    <button type="submit">
                        Ajouter
                    </button>
                </form>
            </div>
            <div class="footer_dialog" slot="footer">
                <button on:click={() => showDialog = false}>
                    Fermer
                </button>
            </div>
        </Dialog>
</section>
</section>

<style lang="scss">
.main{
    width: var(--width);
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;

.head_tuto{
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px 0;
        margin-bottom: 10px;
        border-bottom: 3px solid var(--c_grey);
        h1{
            text-transform: capitalize;
        }
        .user_tuto{
            display: grid;
            align-items: center;
            gap: 10px;
            grid-template-columns: 35px 2fr 1fr;
            div{
                display: flex;
                flex-direction: column;
                gap: 5px;
                flex-grow: 2;
                .username{
                    font-weight: bold;
                }
                .date{
                    font-size: 0.8rem;
                }
            }
        
        img{
                        width: 35px;
                        height: 35px;
                        border-radius: var(--br_round);
                    }
                    .no_avatar{
                        position: relative;
                        width: 35px;
                        height: 35px;
                        border-radius: var(--br_round);
                        background-color: var(--c_grey);
                            svg{
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 25px;
                            height: 25px;
                            border-radius: var(--br_round);
                            fill: var(--c_primary);
                            z-index: 1;
                            }
                    }
                    .category{
                        padding: 10px;
                        border-radius: var(--br_sm);
                        background-color: var(--c_primary);
                        color: var(--c_white);
                    }
                }
        
    }
    .tutorial_content{
        padding: 10px;
        img{
            width: 100%;
            height: auto;
        }
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .display_info{
        display: flex;
        justify-content: space-between;
        gap: 10px;
        padding: 10px;
        border-bottom: 3px solid var(--c_grey);
        div{
            display: flex;
            gap: 5px;
            align-items: center;
            svg{
                width: 30px;
                height: 30px;
                fill: var(--c_primary);
            }
            p{
                font-weight: bold;
                font-size: 1.2rem;
            }
        }
    }
    .add_comment{
        border: 2px solid var(--text_light);
        border-radius: var(--br_sm);
        padding: 10px;
        background-color: transparent;
        font-size: 1.2rem;
    }
    .comment_section{
        padding: 10px;
        

    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: 10px;
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
}
}
</style>