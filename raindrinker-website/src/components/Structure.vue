<template>
    <div class="structure">
        <div class="sidebar">
        <RainWrapper class="rain-wrap">

            <div class="logo-wrapper">
                <img src="../assets/logo_transparentx10.png" class="logo"/>
            </div>

            <div class="menu">
                <div class="menu-option">
                    <router-link to="/about" class="menu-option-text">
                        ABOUT
                    </router-link>
                </div>
                <div class="menu-option">
                    <router-link to="/resume" class="menu-option-text">
                        RESUME
                    </router-link>
                </div>
                <div class="hline"></div>
                <div class="menu-option">
                    <router-link to="/games" class="menu-option-text">
                        GAMES
                    </router-link>
                </div>
                <div class="menu-option">
                    <router-link to="/art" class="menu-option-text">
                        ART
                    </router-link>
                </div>
                <div class="menu-option">
                    <router-link to="/articles" class="menu-option-text">
                        ARTICLES
                    </router-link>
                </div>


            </div>

            <Socials class="socials"/>


        </RainWrapper>
            </div>

        <div class="content">
            <transition name="transition" mode="out-in">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
    import RainWrapper from "./RainWrapper";
    import Socials from "./Socials";
    export default {
        name: "Structure",
        components: {Socials, RainWrapper}
    }
</script>

<style scoped>
    .structure {
        display: flex;
        flex-direction: row;
        overflow-x: hidden;
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: 100%;
    }

    .sidebar {
        flex-grow: 0;
        overflow: hidden;
        width: 300px;
        min-width: 300px;
        min-height: 150px;
    }

    .content {
        flex-grow: 1;
        overflow-y: hidden;
        background-color: #EEEEEE;
        overflow-x: hidden;
        display: flex;
        margin: 0px;
        flex-direction: column;
        height: 100vh;
    }

    .logo-wrapper {
        padding: 32px;
        display: flex;
        justify-content: center;
    }

    .logo {
        width: 240px;
        image-rendering: pixelated;
    }

    @media only screen and (max-width: 1000px) {
        .sidebar {
            display: none !important;
        }
    }

    .menu {
        padding: 16px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .menu-option {
        margin-top: 32px;
        font-family: Nunito,sans-serif;

    }

    .menu-option-text {
        color: #EEEEEE;
        text-decoration: none;
        font-size: 24px;
        font-weight: bold;
        opacity: 0.4;
        transition: 0.2s;
    }

    .menu-option-text.router-link-active {
        opacity: 0.8;
    }

    .transition-enter-active,
    .transition-leave-active {
        transition: opacity 0.3s, transform 0.3s;
        opacity: 1;
    }

    .transition-leave-to {
        opacity: 0;
        transform: translateY(-100px);
    }

    .transition-enter {
        opacity: 0;
        transform: translateY(100px);
    }

    .hline {
        border-bottom: 3px solid gray;
        opacity: 0.5;
        width: 100px;
        margin-top: 48px;
        margin-bottom: 16px;
    }

    .socials {
        margin-top: auto;
        margin-bottom: 32px;
    }

    .rain-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>