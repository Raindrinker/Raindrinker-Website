<template>
    <div class="socials-row" :class="$mq">
        <div class="socials-item">
            <a href="https://twitter.com/Raindrinker_dev">
                <img src="../assets/icons/twitter.png" class="socials-img" :class="$mq"/>
            </a>
            <a href="https://raindrinker.itch.io">
                <img src="../assets/icons/itch.png" class="socials-img" :class="$mq"/>
            </a>
            <a href="https://www.linkedin.com/in/ferran-ruiz-sala-210130111/">
                <img src="../assets/icons/linkedin.png" class="socials-img" :class="$mq"/>
            </a>
            <a href="mailto:iamtheraindrinker@gmail.com">
                <img src="../assets/icons/email.png" class="socials-img" :class="$mq"/>
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
    .socials-row.mobile {
        display: grid;
        grid-template-rows: 1fr;
    }
    .socials-row.tablet {
        display: flex;
    }
    .socials-row.desktop {
        display: flex;
    }
    .socials-row.laptop {
        display: flex;
    }
    .socials-img.mobile {
        width: 30px;
        margin-left: 6px;
        margin-right: 6px;
        opacity: 0.5;
        transform: 0.1s;
    }
    .socials-img.tablet {
        width: 40px;
        margin-right: 8px;
        opacity: 0.5;
        transform: 0.1s;
    }
    .socials-img.laptop {
        width: 40px;
        margin-left: 6px;
        margin-right: 6px;
        opacity: 0.5;
        transform: 0.1s;
    }
    .socials-img.desktop {
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