<template>
    <div class="body">
        <div class="profile-row" :class="$mq">
            <img src="../assets/photo.jpg" class="image" :class="$mq">
            <div class="text" :class="$mq">
                Hi! I'm Ferran Ruiz (Raindrinker on the internet) and I like making small interesting games that matter.
                <br><br>
                I'm always looking for opportunities to meet cool creative people and work on great things.
                <Socials class="socials"/>
            </div>
        </div>
        <div class="content-row">
            <div class="title" :class="$mq">SKILLS</div>

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

            <div class="title" :class="$mq">THINGS I MADE</div>

            <div class="games" :class="$mq">
                <div class="my-thing" :class="$mq" @click="$router.push('/games')">
                    <img src="../assets/games.png" class="my-thing-img" :class="$mq"/>
                    <div class="shadow"></div>
                    <div class="my-thing-text">Games</div>
                </div>
                <div class="my-thing" :class="$mq" @click="$router.push('/art')">
                    <img src="../assets/pixelart.png" class="my-thing-img" :class="$mq"/>
                    <div class="shadow"></div>
                    <div class="my-thing-text">Art</div>
                </div>
                <div class="my-thing" :class="$mq" @click="$router.push('/articles')">
                    <img src="../assets/articles.png" class="my-thing-img" :class="$mq"/>
                    <div class="shadow"></div>
                    <div class="my-thing-text">Articles</div>
                </div>
            </div>

            <div class="title" :class="$mq">THINGS I LIKE</div>

            <div class="things">
                <div v-for="(thing, index) in things" :key="index" class="thing">
                    {{thing}}
                </div>
            </div>

            <div class="title" :class="$mq">SOME OF MY FAVOURITE GAMES</div>

            <div class="games" :class="$mq">
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

    .image.mobile {
        max-width: 80%;
        border-radius: 50%;
    }
    .image.tablet {
        max-width: 60%;
        border-radius: 50%;
    }
    .image.laptop {
        max-width: 80%;
        border-radius: 50%;
    }
    .image.desktop {
        max-width: 70%;
        border-radius: 50%;
    }

    .profile-row.mobile {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        font-family: Nunito, sans-serif;
        justify-content: center;
        margin-top: 48px;
        padding: 2rem;
    }
    .profile-row.tablet {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        font-family: Nunito, sans-serif;
        align-items: center;
        margin-top: 48px;
        width: 80%;
        padding: 3rem;

    }
    .profile-row.laptop {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        font-family: Nunito, sans-serif;
        align-items: center;
        margin-top: 48px;
        width: 80%;
        padding: 3rem;

    }

    .profile-row.desktop {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        font-family: Nunito, sans-serif;
        align-items: center;
        margin-top: 48px;
        width: 80%;
        padding: 3rem;

    }

    .text.mobile {
        font-size: 16px;
        padding: 2rem;
    }
    .text.tablet {
        font-size: 16px;
        padding: 2rem;
    }
    .text.laptop {
        font-size: 100%;
        padding: 2rem;
    }
    .text.desktop {
        font-size: 100%;
        padding: 2rem;
    }

    .body {
        align-items: center;
        height: 100%;
        width: 100%;
        margin: 0px;
        padding: 0px;
        flex-direction: column;
        padding-bottom: 3rem;

        overflow-y: auto;
        overflow-x: auto;
    }

    .socials {
        padding-top: 2rem;
        filter: invert(100%);
    }

    .content-row {
        width: 80%;
        padding: 2rem;
        font-family: Nunito, sans-serif;
    }

    .title.mobile {
        font-size: 18px;
        margin-top: 32px;
        margin-bottom: 16px;
    }
    .title.tablet {
        font-size: 24px;
        margin-top: 32px;
        margin-bottom: 16px;
    }
    .title.laptop {
        font-size: 24px;
        margin-top: 32px;
        margin-bottom: 16px;
    }
    .title.desktop {
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

    .games.mobile {
        display: grid;
        grid-template-columns: 1fr;
    }
    .games.tablet {
        display: grid;
        grid-template-columns: 1fr;
    }
    .games.laptop {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .games.desktop {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .thing {
        width: 30%;
        padding: 1rem;
        flex-basis: 30%;
        flex-shrink: 0;
        flex-grow: 0;
    }

    .game {
        position: relative;
        padding: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
        justify-content: center;
    }

    .game-img {
        max-width: 80%;
        border-radius: 8px;
    }

    .my-thing.mobile {
        display: grid;
        padding: 1rem;
        grid-template-columns: 1fr;
        cursor: pointer;
        grid-auto-flow: row;
    }
    .my-thing.tablet {
        display: grid;
        grid-template-columns: 1fr;
        cursor: pointer;
        grid-auto-flow: row;
    }
    .my-thing.laptop {
        display: grid;
        padding: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        cursor: pointer;
        grid-auto-flow: row;
    }
    .my-thing.desktop {
        display: grid;
        padding: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        cursor: pointer;
        grid-auto-flow: row;
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

    .my-thing-img.mobile {
        max-width: 80%;
        border-radius: 6px;
    }
    .my-thing-img.tablet {
        max-width: 60%;
        border-radius: 6px;
    }
    .my-thing-img.laptop {
        max-width: 80%;
        border-radius: 6px;
    }
    .my-thing-img.desktop {
        max-width: 100%;
        border-radius: 6px;
    }

</style>