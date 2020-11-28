<template>
    <div class="socials-row">
        <div class="socials-item">
            <a href="https://twitter.com/Raindrinker_dev">
                <img src="../assets/icons/twitter.png" class="socials-img"/>
            </a>
            <a href="https://raindrinker.itch.io">
                <img src="../assets/icons/itch.png" class="socials-img"/>
            </a>
            <a href="https://www.linkedin.com/in/ferran-ruiz-sala-210130111/">
                <img src="../assets/icons/linkedin.png" class="socials-img"/>
            </a>
            <a href="mailto:iamtheraindrinker@gmail.com">
                <img src="../assets/icons/email.png" class="socials-img"/>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Socials"
    }
</script>

<style scoped>
    .socials-row {
        display: flex;
    }
    .socials-img {
        width: 40px;
        margin-left: 6px;
        margin-right: 6px;
        opacity: 0.5;

        transform: 0.1s;
    }

    .socials-img:hover {
        opacity: 0.7;
        transform: scale(1.1, 1.1);
    }
</style>