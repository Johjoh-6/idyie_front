<script lang="ts">
  import type { Tutorial } from "$lib/model/tutorial";
  import { transformDate } from "$lib/utils/transformDate";

  export let tuto: Tutorial;
let { date, time} = transformDate(tuto.created_at);
  
</script>

<a href="/{tuto.id}">
  <div class="box">
    <div class="avatar">
        {#if tuto.user.avatar}
        <img src="{tuto.user.avatar}" alt="photo {tuto.user.username}">
        {:else}
        <div class="no_avatar">
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>
        </div>
        {/if}
    </div>
    <div class="user_name">
      <p>{tuto.user.username}</p>
    </div>

    <div class="categorie">
      {tuto.categorie.name}
    </div>
    <div class="rating"><p>{tuto.avg_rating} / 5</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
    </div>
    <div class="comment">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        ><path
          d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"
        /></svg
      >
      <p>{tuto.comment_count}</p>
    </div>

    <p class="title">{tuto.title}</p>

    <div class="content">
      <p>{@html tuto.content}</p>
    </div>
    <p class="date">Le {date} à {time}</p>
  </div>
</a>

<style lang="scss">
    a{
        text-decoration: none;
        color: var(--text_light);
    }
  .box {
    background: var(--bg_light);
    border: 1px solid var(--box_light);
    box-shadow: var(--box_shadow);
    padding: 10px;
    display: grid;
    grid-template-columns: 35px 2fr 1fr;
    gap: 5px;
    grid-template-areas:
      "avatar username rating"
      "title title categorie"
      "date date comment";
      box-shadow: var(--drop_shadow);
      @media screen and (min-width: 768px) {
        grid-template-columns: 35px 2fr 1fr;
        grid-template-areas:
          "avatar username rating"
          "title title categorie"
          "content content content"
          "date date comment";
          border-radius: var(--br_sm);
      }

    .avatar {
      grid-area: avatar;
      width: 35px;
      height: 35px;
      border-radius: var(--br_round);
      display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 35px;
            height: 35px;
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
    }
    .user_name {
      grid-area: username;
      display: flex;
    align-self: center;
      p {
        margin: 0;
        padding: 0;
        font-weight: 600;
      }
    }
    .rating {
      grid-area: rating;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: var(--c_primary);
      svg{
        width: 15px;
        height: 15px;
        margin-left: 5px;
        fill: var(--c_primary);
      }
    }
    .categorie {
      grid-area: categorie;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--fs_m);
      font-weight: 600;
      color: var(--c_white);
      background-color: var(--c_primary);
      padding: 0.5rem;
      border-radius: var(--br_m);
    }
    .comment {
      grid-area: comment;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: var(--c_primary);
      svg {
        width: 15px;
        height: 15px;
        margin-right: 5px;
        fill: var(--c_primary);
      }
    }
    .title {
      grid-area: title;
      font-weight: 600;
      font-size: clamp(1.2rem, 1.5vw, 1.8rem);
    }
    .content {
      grid-area: content;
      font-weight: 400;
      display: none;
      height: 220px;
      max-height: 220px;
      overflow: hidden;
      position: relative;
      &::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(transparent, var(--bg_light));
      }
      @media screen and (min-width: 768px) {
        display: block;
      }
    }
    .date {
      grid-area: date;
      font-weight: 400;
      font-size: clamp(0.8rem, 1.5vw, 1rem);  
    }

  }
</style>
