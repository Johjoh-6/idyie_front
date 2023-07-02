<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    let adminMail = "moderateur@idyie.com";
</script>

<svelte:head>
    <title>Idyie - About</title>
</svelte:head>


<section>
    <h1>Bienvenue sur Idyie !</h1>
    <p>Nous sommes ravis de vous accueillir sur notre plateforme de partage de connaissances. Chez Idyie, notre objectif est de créer une communauté dynamique et collaborative où les utilisateurs peuvent partager, apprendre et grandir ensemble à travers l'échange de tutoriels, de guides et d'informations pertinentes.</p>

    <p>Idyie a été créé dans le but de faciliter l'accès à l'information et de permettre à chacun d'apprendre de manière autonome. Nous croyons fermement que le partage des connaissances est essentiel pour favoriser le progrès et l'épanouissement personnel. Notre plateforme offre un espace où les passionnés, les experts et les curieux peuvent se rassembler pour partager leurs compétences, leurs expériences et leur savoir-faire.</p>

    <p>Que vous soyez à la recherche d'un tutoriel pour maîtriser une nouvelle compétence, d'un guide détaillé pour résoudre un problème technique, ou simplement d'une source d'inspiration, Idyie est l'endroit idéal pour trouver des ressources précieuses. Notre communauté diversifiée offre une multitude de sujets couvrant des domaines tels que la programmation, la cuisine, le bricolage, l'art, la musique, les voyages, et bien plus encore.</p>

    <p>Chez Idyie, nous valorisons la qualité du contenu et l'expérience des utilisateurs. Chaque guide et tutoriel proposé est soigneusement examiné par notre équipe avant d'être publié sur la plateforme. Nous encourageons également les utilisateurs à interagir, à poser des questions et à offrir des commentaires constructifs pour favoriser un environnement d'apprentissage collaboratif.</p>

    <p>Nous sommes déterminés à maintenir un espace sûr et respectueux pour tous nos utilisateurs. Si vous rencontrez un guide ou un tutoriel inapproprié, nous vous encourageons vivement à nous le signaler. Pour signaler un contenu inapproprié, veuillez envoyer le lien du guide concerné ainsi qu'une description détaillée du problème à notre adresse e-mail dédiée à cet effet : <a href="mailto:{adminMail}">{adminMail}</a>. Notre équipe examinera rapidement votre signalement et prendra les mesures nécessaires pour résoudre la situation.</p>

    <p>Nous espérons que vous trouverez Idyie enrichissant et inspirant. Rejoignez-nous dès aujourd'hui et contribuez à notre communauté florissante de partage de connaissances. Ensemble, nous pouvons repousser les frontières de l'apprentissage et réaliser des merveilles !</p>

    <p class="team">L'équipe Idyie</p>


</section>

<style lang="scss">
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        width: 100%;
        padding: 15px;
        h1{
            font-size: 3rem;
            color: var(--c_primary);
        }
        a{
            color: var(--c_primary);
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }
        }
        .team{
            font-weight: bold;
            font-style: italic;
            color: var(--c_primary);
        }
    }

</style>