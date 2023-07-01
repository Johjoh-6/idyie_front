<script lang="ts">
  import { enhance } from "$app/forms";
  import { transformDate } from "$lib/utils/transformDate";

    export let watch: string = "";
    export let edit: string = "";
    export let actionDelete: string = "";
    export let data: DataRow[] = [];

    interface DataRow {
        id: number;
        [key: string]: string | number;
    }

    const limitTo500Char = (str: string) => {
        if (str.length > 250) {
            return str.slice(0, 250) + "...";
        }
        return str;
    };

const changeDate = (raw: string)=> {
    const { date, time } = transformDate(raw);
    return `Le ${date} à ${time}`;
}
$: headers = Object.keys(data[0] ?? {});
$: length = headers.length;

</script>

<table>
    <thead>
        <tr>
            {#each headers as head}
                <th>{head}</th>
            {/each}
            <th>Voir</th>
            <th>Éditer</th>
            <th>Supprimer</th>
        </tr>
    </thead>
    <tbody>
        {#each data as row (row.id)} 
            <tr>
                {#each Object.entries(row) as [key, value]}
                    {#if key === "created_at" || key === "updated_at" || key == "date" || key == "cree" || key == "modifie"}
                        <td data-cell={key}>{changeDate(value.toString())}</td>
                    {:else if key === "content"}
                        <td data-cell={key}>{limitTo500Char(value.toString())}</td>
                    {:else if key === "avatar"}
                        <td data-cell={key}>
                            {#if value === null}
                                <div class="no_avatar">
                                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>
                                </div>
                            {:else}
                                <img src={value.toString()} alt="avatar" />
                            {/if}
                        </td>
                    {:else if key === 'email'}
                    <td data-cell={key}><a href="mailto:{value.toString()}">{value}</a></td>
                    {:else}
                        <td data-cell={key}>{value}</td>
                    {/if}
                {/each}
                <td data-cell="Voir"><a href="/{watch}{row.id}">Voir</a></td>
                <td data-cell="Éditer"><a href="{edit}{row.id}">Editer</a></td>
                <td data-cell="Supprimer"><form action="{actionDelete}" method="POST" use:enhance>
                    <input type="hidden" name="id" value={row.id} />
                    <button class="btn btn-outline-danger">Supprimer</button>
                </form></td>
            </tr>
        {/each}
    </tbody>
</table>

<style lang="scss">
     table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        padding: 0.3rem;
        form{
            display: inline-block;
        }
        button{
        border: none;
        padding: 0.5rem 1rem;
        border-radius: var(--br_m);
        cursor: pointer;
        background-color: var(--c_red);
        color: var(--c_white);
    }
    }
    th{
        background-color: var(--c_primary);
        color: var(--c_white);
        text-transform: capitalize;
    }
    td{
        text-align: center;
        word-break: break-all;
    }
    td::before{
        display: none;
    }

    tr:nth-child(even) {
        background-color: var(--box_light);
    }
    img{
        width: 25px;
        height: 25px;
        border-radius: var(--br_round);
    }
    .no_avatar{
        display: inline-flex;
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
    
    @media screen and (max-width: 800px) {
        td::before{
            display: inline-block;
            content: attr(data-cell) " : ";
            text-transform: capitalize;
            font-weight: bold;
            margin-right: 5px;
            color: var(--c_primary);
        }
        td{
            text-align: left;
            display: block;
            padding: 0.5rem 1rem;
        }
        th{
            display: none;
        }
        td:first-child{
            border-top-left-radius: var(--br_sm);
            border-top-right-radius: var(--br_sm);
            padding-top: 2rem;
        }
        td:last-child{
            border-bottom-left-radius: var(--br_sm);
            border-bottom-right-radius: var(--br_sm);
            padding-bottom: 2rem;
        }
        tr{
            border: 1px solid var(--box_light);
        }
        tr:nth-child(even) {
            background-color: var(--box_light);
        }
    }
</style>