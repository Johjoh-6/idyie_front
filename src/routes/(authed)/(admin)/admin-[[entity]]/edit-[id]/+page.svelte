<script lang="ts">
  import { enhance } from '$app/forms';
    import Tiny from '$lib/components/Tiny.svelte';
  import type { Tutorial } from '$lib/model/tutorial';
import type { PageData } from './$types';
    
    export let data: PageData;
    let content = "";

    if ("content" in data.selected) {
    content = data.selected.content;
  }

  function isTutorial(obj: any): obj is Tutorial {

    return "title" in obj;
  }
</script>

<!-- get all field and value and prepare a form -->
<form method="POST" use:enhance>
    {#each Object.entries(data.selected) as [key, value]}
    {#if key !== "password" && key !== "created_at" && key !== "updated_at" && key !== "date" && key !== "avg_rating" && key !== "user" && key !== "id_category_parent" && key !== "tutorial"}
            {#if key === "role" }
                <label for={key}>{key}</label>
                <select name={key}>
                    <option value="USER" selected={value === "USER"}>USER</option>
                    <option value="REDACTOR" selected={value === "REDACTOR"}>REDACTOR</option>
                    <option value="MODERATOR" selected={value === "MODERATOR"}>MODERATOR</option>
                </select>
            {:else if key === "ban"}
                <label for={key}>{key}</label>
                <select name={key}>
                    <option value="false" selected={value === "false"}>false</option>
                    <option value="true" selected={value === "true"}>true</option>
                </select>
            {:else if key === "email"}
                <label for="email">email</label>
                <input type="email" name="email" value={value} />
            {:else if key === "content"}
                {#if isTutorial(data.selected)}
                    <label for="content">Contenu</label>
                    <Tiny  bind:val={content}/>
                    <input type="hidden" name="content" id="content" value="{content}"/>
                {:else}
                <label for="content">Contenu</label>
                <textarea name="content" id="content" cols="30" rows="10">{value}</textarea>
                {/if}
            {:else if key === "id"}
                <input type="hidden" name="id" id="id" value="{value}">
            {:else if key === "view_count" || key === "durate"}
                <label for={key}>{key}</label>
                <input type="number" name={key} value={value} />
            {:else if key === "categorie"}
                <select name="id_category" id="id_category" value={value.id}>
                    {#each data.catFlat as category}
                      <option value={category.id}>{category.name}</option>
                    {/each}
                  </select>
            {:else if key === "draft"}
                <label for={key}>Status</label>
                <select name={key} id="{key}" value={value}>
                    <option value="{false}" >Publié</option>
                    <option value="{true}" >Brouillon</option>
                </select>
            {:else}
                <label for={key}>{key}</label>
                <input type="text" name={key} value={value} />
            {/if}
        {/if}
    {/each}
    <button type="submit">Enregistrer</button>
</form>

<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 10px;
        margin: 0 auto;
        max-width: 600px;
        gap: 10px;
        label {
            font-weight: bold;
            color: var(--c_primary);
            margin-bottom: 0.3rem;
        }
        input {
            padding: 5px;
            border: 1px solid var(--c_grey);
            border-radius: 5px;
            &:focus {
                outline: none;
                border: 1px solid var(--c_primary);
            }
        }
        select{
            padding: 5px;
            border: 1px solid var(--c_grey);
            border-radius: 5px;
            &:focus {
                outline: none;
                border: 1px solid var(--c_primary);
            }
        }
        textarea{
            padding: 5px;
            border: 1px solid var(--c_grey);
            border-radius: 5px;
            &:focus {
                outline: none;
                border: 1px solid var(--c_primary);
            }
        }
        button{
            padding: 5px;
            border: 1px solid var(--c_grey);
            border-radius: 5px;
            background-color: var(--c_primary);
            color: var(--c_white);
            transition: all 0.3s ease-in-out;
            &:hover{
                cursor: pointer;
                background-color: var(--c_grey);
                color: var(--c_primary);
            }
        }
    }

</style>