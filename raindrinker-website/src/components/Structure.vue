<template>
    <div class="structure">
        <div class="sidebar">
        <RainWrapper>

            <div class="logo-wrapper">
                <img src="../assets/logo_transparentx10.png" class="logo"/>
            </div>

            <div class="menu">
                <div class="menu-option">
                    <router-link to="/main" class="menu-option-text">
                        MAIN
                    </router-link>
                </div>
                <div class="menu-option">
                    <router-link to="/games" class="menu-option-text">
                        GAMES
                    </router-link>
                </div>
                <div class="menu-option">
                    <router-link to="/gallery" class="menu-option-text">
                        ART
                    </router-link>
                </div>
            </div>
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
    export default {
        name: "Structure",
        components: {RainWrapper}
    }
</script>

<style scoped>
    .structure {
        display: flex;
        flex-direction: row;
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
        overflow-y: scroll;
        background-color: #EEEEEE;
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


</style>