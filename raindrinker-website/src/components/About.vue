<template>
    <div class="body">
        <div class="profile-row">
            <img src="../assets/photo.jpg" class="image">
            <div class="text">
                Hi! I'm Ferran Ruiz (Raindrinker on the internet) and I like making small interesting games that matter.
                <br><br>
                I'm always looking for opportunities to meet cool creative people and work on great things.
                <Socials class="socials"/>
            </div>
        </div>
        <div class="content-row">
            <div class="title">SKILLS</div>

            <div class="things">

            <div class="thing">
                Game Design & prototyping
            </div>
                <div class="thing">
                Game Development in Unity, Godot, UE4
            </div>
                <div class="thing">
                Visual design, UI and UX
            </div>
                <div class="thing">
                Web development, mainly frontend
            </div>
                <div class="thing">
                Digital art & pixel art
            </div>

            </div>

            <div class="title">THINGS I MADE</div>

            <div class="things">
                <div class="my-thing" @click="$router.push('/games')">
                    <img src="../assets/games.png" class="my-thing-img"/>
                    <div class="shadow"></div>
                    <div class="my-thing-text">Games</div>
                </div>
                <div class="my-thing" @click="$router.push('/art')">
                    <img src="../assets/pixelart.png" class="my-thing-img"/>
                    <div class="shadow"></div>
                    <div class="my-thing-text">Art</div>
                </div>
                <div class="my-thing" @click="$router.push('/articles')">
                    <img src="../assets/articles.png" class="my-thing-img"/>
                    <div class="shadow"></div>
                    <div class="my-thing-text">Articles</div>
                </div>
            </div>

            <div class="title">THINGS I LIKE</div>

            <div class="things">
                <div v-for="(thing, index) in things" :key="index" class="thing">
                    {{thing}}
                </div>
            </div>

            <div class="title">SOME OF MY FAVOURITE GAMES</div>

            <div class="things">
                <div class="game">
                    <img src="../assets/celeste.jpg" class="game-img"/>
                </div>
                <div class="game">
                    <img src="../assets/hollow.jpg" class="game-img"/>
                </div>
                <div class="game">
                    <img src="../assets/outerwilds.jpg" class="game-img"/>
                </div>
                <div class="game">
                    <img src="../assets/pyre.jpg" class="game-img"/>
                </div>
                <div class="game">
                    <img src="../assets/tbg.jpg" class="game-img"/>
                </div>
                <div class="game">
                    <img src="../assets/baba.jpg" class="game-img"/>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import Socials from "./Socials";
    export default {
        name: "About",
        components: {Socials},
        data() {
            return {
                things: ["Games made with care",
                    "Bold, innovative game design",
                    "Indie songs, especially in catalan & spanish",
                    "Playing the ukulele terribly",
                    "Critical Role, The Magnus Archives",
                    "Following the development of indie games on twitter",
                    "Drawing, digital art and pixel art",
                    "Wholesome communities and cool friends",
                    "Thinking about a more just, better world"]
            }
        }
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

        margin-top: 48px;

        width: 80%;
    }

    .text {
        font-size: 24px;
        padding: 48px;
    }

    .body {
        display: flex;
        align-items: center;
        padding: 32px;
        flex-direction: column;
        padding-bottom: 128px;

        overflow-y: auto;
    }

    .socials {
        padding-top: 32px;
        filter: invert(100%);
    }

    .content-row {
        width: 80%;
        font-family: Nunito, sans-serif;
    }

    .title {
        font-size: 24px;
        margin-top: 32px;
        margin-bottom: 16px;
    }

    .line {
        margin-bottom: 8px;
    }

    .things {
        display: flex;
        flex-wrap: wrap;
    }

    .thing {
        width: 30%;
        padding: 16px;
        flex-basis: 30%;
        flex-shrink: 0;
        flex-grow: 0;
    }

    .game {
        width: 30%;
        position: relative;
        padding: 12px;
        display: flex;
        justify-content: center;
    }

    .game-img {
        height: 200px;
        width: 100%;
        border-radius: 8px;
    }

    .my-thing {
        width: 30%;
        margin: 16px;
        flex-basis: 30%;
        flex-shrink: 0;
        flex-grow: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;

        flex-direction: column;
    }

    .my-thing-text {
        pointer-events: none;
        transition: 0.2s;
        font-size: 24px;
        margin-top: 8px;
        margin-bottom: 8px;
    }

    .shadow {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0;
        transition: 0.2s;
    }

    .shadow:hover {
        opacity: 0.1;
    }

    .my-thing:hover .my-thing-text {
        opacity: 1;
    }

    .my-thing-img {
        width: 100%;
        border-radius: 8px;
    }

</style>