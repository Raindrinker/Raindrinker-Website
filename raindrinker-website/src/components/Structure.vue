<template>
    <div class="structure">
        <div class="menu">
        <RainWrapper>

                <div class="logo-wrapper">
                    <img src="../assets/logo_transparentx10.png" class="logo"/>
                </div>
        </RainWrapper>
            </div>

        <div class="content">
            <Gallery/>
        </div>
    </div>
</template>

<script>
    import Gallery from "./Gallery";
    import RainWrapper from "./RainWrapper";
    export default {
        name: "Structure",
        components: {RainWrapper, Gallery}
    }
</script>

<style scoped>
    .structure {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
    }

    .menu {
        flex-grow: 0;
        overflow: hidden;
        min-width: 300px;
        min-height: 150px;
    }

    .content {
        flex-grow: 1;
        overflow-y: auto;
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
        .menu {
            display: none !important;
        }
    }
</style>