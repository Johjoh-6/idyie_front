<script lang='ts'>
    import Icon from './Icon.svelte';
    
    

</script>

<!-- svelte-ignore a11y-autofocus -->
<div autofocus>
    <Icon name={"medal"} color={"--text_light"}/>
    <Icon name={"arrow"} color={"--text_light"}/>
</div>

<style>
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        border-radius: var(--br_sm);
        background-color: transparent;
        border: 1px solid var(--box_light);
        height: 45px;
        width: 60px;
        max-width: 60px;
        gap: 2px;
    }
</style>