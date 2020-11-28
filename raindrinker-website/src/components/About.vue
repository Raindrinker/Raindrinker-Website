<template>
    <div class="body">
        <div class="profile-row">
            <img src="../assets/photo.jpg" class="image">
            <div class="text">
                Hi! I'm Ferran Ruiz (Raindrinker on the internet) and I like making small interesting games that matter.
                <br><br>
                I'm always looking for opportunities to meet cool people and work on great things.
                <Socials class="socials"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Socials from "./Socials";
    export default {
        name: "About",
        components: {Socials}
    }
</script>

<style scoped>

    .image {
        width: 350px;
        height: 350px;
        border-radius: 1000px;
    }

    .profile-row {
        display: flex;
        font-family: Nunito, sans-serif;

        align-items: center;

        width: 80%;
    }

    .text {
        font-size: 24px;
        padding: 48px;
    }

    .body {
        display: flex;
        justify-content: center;
        padding: 32px;
    }

    .socials {
        padding-top: 32px;
        filter: invert(100%);
    }

</style>