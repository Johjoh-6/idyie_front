<script lang="ts">
    import Table from '$lib/components/Table.svelte';
  import { tutorialsList } from '$lib/store/tutorials';
import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h1>{data.entity}</h1>

{#if data.entity !== "dashboard"}
    <div class="info">
        <div class="entity_info">
            <p>Nombre de {data.entity} : </p>
            <p>{data.dataList.length}</p>
        </div>
        {#if data.entity === "categorie"}
        <div class="add">
            <a href={`admin-${data.entity}/add`} class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>
                <p>Ajouter</p>
            </a>
        </div>
        {/if}
    </div>
    <Table data={data.dataList}  actionDelete={"?/delete"} watch={`admin-${data.entity}/see-`} edit={`admin-${data.entity}/edit-`}/>
{:else}
<section>

    <div>
        <p class="title">Nombre de tutoriels publié</p>
        <p class="nb">{$tutorialsList.length}</p>
    </div>
    <div>
        <p class="title">Nombre de categorie</p>
        <p class="nb">{data.catFlat.length}</p>
    </div>
</section>
{/if}

<style lang="scss">
    h1 {
        text-align: center;
        text-transform: capitalize;
        font-size: 2rem;
        color: var(--c_primary);
        margin-bottom: 1rem;
    }
    .info{
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        align-items: center;
        .entity_info{
            display: flex;
            gap: 1rem;
            font-size: 1.2rem;
            p:last-child{
                font-weight: bold;
                color: var(--c_primary);
            }
        }
    
    .add{
        display: flex;
        a{
            text-decoration: none;
            color: var(--c_primary);
            border: 1px solid var(--c_primary);
            padding: 0.5rem 1rem;
            border-radius: var(--br_sm);
            transition: all 0.3s ease;
            display: flex;
            gap: 0.5rem;
            align-items: center;
            transition: all 0.3s ease;
            svg{
                width: 1.4rem;
                height: 1.4rem;
                fill: var(--c_primary);
            }
            &:hover{
                background-color: var(--c_primary);
                color: var(--c_white);
                svg{
                    fill: var(--c_white);
                }
            }
        }
    }}
    section{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
        justify-content: stretch;
        div{
            border: 1px solid var(--c_primary);
            padding: 1rem;
            margin-bottom: 1rem;
            border-radius: var(--br_sm);
            box-shadow: var(--drop_shadow);
            display: flex;
            flex-direction: column;
            gap: 1rem;
            text-align: center;
            .title {
                font-weight: bold;
                text-transform: capitalize;
            }
            .nb {
                font-size: 2rem;
                color: var(--c_primary);
            }
        }
    }
</style>