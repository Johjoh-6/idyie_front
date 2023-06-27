<script lang='ts'>
  import type { Tutorial } from "$lib/model/tutorial";


    export let tuto : Tutorial;
</script>

<a href="/{tuto.id}">
<div class="box">
    <div class="user_info">
        <img src="{tuto.user.avatar ?? ""}" alt="user">
        <div class="user_name">
            <p>{tuto.user.username}</p>
        </div>
        <div class="info_tuto">
            <div class="categorie">
                {tuto.categorie.name}
            </div>
            <div class="rating">{tuto.avg_rating}</div>
            <div class="comment"></div>
        </div>
        <div class="tutorial">
                <h2>{tuto.title}</h2>
           
            <div class="content">
                <p>{@html tuto.content}</p>
            </div>
            <p class="date">{tuto.date}</p>
        </div>
    </div>
    
</div>
</a>

<style>
    .box{
        background: #FFFFFF;
        border: 1px solid var(--box_light);
        box-shadow: var(--box_shadow);
        padding: 10px;
        display: grid;
    }

</style>