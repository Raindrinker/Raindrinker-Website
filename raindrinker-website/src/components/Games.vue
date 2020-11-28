<template>
    <div class="body">
        <div class="title">
            GAMES
        </div>

        <div class="card" v-for="(game, index) in gamesData" :key="index" @click="onClickGame(game)">
            <div class="img-wrap">
                <img :src="getImgUrl(game.image)" class="game-img">
            </div>
            <div class="game-body">
                <div class="game-body-1">
                    <div class="game-title">
                        {{game.title}}
                    </div>
                    <div class="game-genre">
                        {{game.genre}}
                    </div>
                    <div class="game-date">
                        {{game.date}}
                    </div>
                    <div class="game-team">
                        <b>Team:</b> {{game.team}}
                    </div>
                    <div class="game-role" v-if="game.team !== 'Solo'">
                        <b>Role:</b> {{game.role}}
                    </div>
                    <div class="game-tools">
                        <b>Tools:</b> {{game.tools}}
                    </div>
                </div>
                <div class="game-body-2" v-html="game.description">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import GamesData from "../data/games";
    export default {
        name: "Games",
        data() {
            return {
                data: [
                    '<div class="example-slide">Slide 1</div>',
                    '<div class="example-slide">Slide 2</div>',
                    '<div class="example-slide">Slide 3</div>',
                ],
            };
        },
        computed: {
            gamesData() {
                return GamesData.sort((a, b) => {
                    if (a.date < b.date) {
                        return 1;
                    }
                    if (a.date > b.date) {
                        return -1;
                    }
                    return 0;
                });
            }
        },
        methods: {
            getImages(game) {
                return game.screenshots.map((s) => {
                    return '<div><img src="' + this.getImgUrl(s) + '"/></div>';
                });
            },
            getImgUrl(file) {
                let images = require.context('../assets/screenshots', false);
                return images('./' + file)
            },
            onClickGame(game) {
                console.log(game.link);
                window.location.href = game.link;
            }
        }
    }
</script>

<style scoped>
    .body {
        padding: 32px;
        display: flex;
        flex-direction: column;
    }

    .card {
        background-color: white;
        height: 200px;
        -webkit-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);

        display: flex;

        overflow: hidden;
        border-radius: 8px;
        margin-bottom: 32px;

        cursor: pointer;
    }

    .example-slide {
        align-items: center;
        background-color: #666;
        color: #999;
        display: flex;
        font-size: 1.5rem;
        justify-content: center;
        min-height: 10rem;
    }

    .img-wrap {
        overflow: hidden;
        position: relative;
        width: 250px;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-shrink: 0;
    }

    .game-img {
        height: 100%;
    }

    .game-body {
        padding: 8px;
        padding-left: 16px;
        font-family: Nunito, sans-serif;
        display: flex;
        flex-grow: 1;
    }

    .game-body-1 {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    .game-body-2 {
        flex-grow: 2;
        padding: 16px;
        border-left: 2px solid lightgrey;
    }

    .game-body-1, .game-body-2 {

        flex-shrink: 0;
        flex-basis: 0;
    }

    .game-title {
        font-size: 32px;
    }

    .game-genre {
        color: #666666;
    }
    .game-date {
        color: #666666;
        margin-bottom: 16px;
    }

    .game-team {
        margin-top: auto;
    }

    .title {
        font-family: Nunito, sans-serif;
        padding-bottom: 32px;
        font-size: 32px;

    }


</style>