<script lang="ts">
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>

<svelte:head>
    <title>Administré Idyie</title>
</svelte:head>


<div class="dhasboard">
    <nav>
        <ul>
            <li><a href="/admin-">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 5C13.018 5 13.9852 5.21731 14.8579 5.60806L13.2954 7.16944C12.8822 7.05892 12.448 7 12 7C9.23858 7 7 9.23858 7 12C7 13.3807 7.55964 14.6307 8.46447 15.5355L7.05025 16.9497L6.89445 16.7889C5.71957 15.5368 5 13.8525 5 12C5 8.13401 8.13401 5 12 5ZM18.3924 9.14312C18.7829 10.0155 19 10.9824 19 12C19 13.933 18.2165 15.683 16.9497 16.9497L15.5355 15.5355C16.4404 14.6307 17 13.3807 17 12C17 11.552 16.9411 11.1178 16.8306 10.7046L18.3924 9.14312ZM16.2426 6.34315L17.6569 7.75736L13.9325 11.483C13.9765 11.6479 14 11.8212 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C12.1788 10 12.3521 10.0235 12.517 10.0675L16.2426 6.34315Z"></path></svg>
                <p>Dashboard</p>
            </a></li>
            <li><a href="/admin-users">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5ZM7.52746 17C7.77619 14.75 9.68372 13 12 13C14.3163 13 16.2238 14.75 16.4725 17H7.52746Z"></path></svg>
                <p>Utilisateurs</p>
            </a></li>
            <li><a href="/admin-tutoriels">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>
                <p>Tutoriels</p>    
            </a></li>
            <li><a href="/admin-comments">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"></path></svg>
                <p>Comment</p>
            </a></li>
            <li><a href="/admin-categorie">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0001 8.5L14.1161 13.5875L19.6085 14.0279L15.4239 17.6125L16.7023 22.9721L12.0001 20.1L7.29777 22.9721L8.57625 17.6125L4.3916 14.0279L9.88403 13.5875L12.0001 8.5ZM8.00005 2V11H6.00005V2H8.00005ZM18.0001 2V11H16.0001V2H18.0001ZM13.0001 2V7H11.0001V2H13.0001Z"></path></svg>
                <p>Categorie</p>
            </a></li>
        </ul>
    </nav>
    <section>
        <slot></slot>
    </section>
</div>

<style lang="scss">
    .dhasboard{
        display: grid;
        grid-template-columns: 150px 1fr;
        grid-gap: 1rem;
        padding: 10px;
    
    nav ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        li{
        padding: 0.5rem;
        border-radius: var(--br_m);
        background-color: var(--c_primary);
        &:hover{
            background-color: var(--c_grey);
            p{
                color: var(--c_primary);
            }
            svg{
                fill: var(--c_primary);
            }
        }
        a{
        text-decoration: none;
        color: var(--c_white);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        svg{
            width: 20px;
            height: 20px;
            fill: var(--c_white);
        }
    }
    }
    section{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
    }
}
    }
    @media screen and (max-width: 800px){
        .dhasboard{
            grid-template-columns: 1fr;
            nav ul {
                flex-direction: row;
                justify-content: space-around;
                gap: .5rem;
                padding: 0.5rem;
                p{
                    display: none;
                }
            }
        }
    }

</style>