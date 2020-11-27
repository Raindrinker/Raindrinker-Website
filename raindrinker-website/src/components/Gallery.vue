<template>
    <div class="wrap">
        <div v-masonry transition-duration="0.2s" item-selector=".item" class="gallery" id="masonryId">
            <div v-masonry-tile class="item" v-for="(item, index) in bestArtData" :key="index">
                <div class="block">
                    <div class="img-wrap">
                        <img :src="getImgUrl(item.path)" class="image" @click="onClickImage(item)"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay" v-if="showOverlay" @click="onClickOverlay">
            <template v-if="selectedItem !== null">

                <div class="overlay-container">

                    <div class="overlay-footer">
                        <div class="title-group">
                            <div class="title">{{selectedItem.title}}</div>
                            <div> {{selectedItem.date}} </div>
                        </div>

                        <div class="description" v-if="selectedItem.description">
                            {{selectedItem.description}}
                        </div>
                    </div>

                    <img :src="getImgUrl(selectedItem.path)" class="overlay-img">

                </div>

            </template>
        </div>
    </div>
</template>

<script>
    import ArtData from "../data/art";

    export default {
        name: "Gallery",
        data() {
            return {
                artData: [],
                selectedItem: null,
                showOverlay: false
            }
        },
        mounted() {
            this.artData = ArtData;

            this.$redrawVueMasonry("masonryId");
        },
        computed: {
            bestArtData() {
                return this.artData.filter((d) => {
                    return d.best;
                })
            }
        },
        methods: {
            getImgUrl(file) {
                let images = require.context('../assets/art', false);
                return images('./' + file)
            },
            onClickImage(item) {
                this.selectedItem = item;
                this.showOverlay = true;
            },
            onClickOverlay() {
                this.showOverlay = false;
            }
        }
    }
</script>

<style scoped>

    .gallery {
        margin: 16px;
        display: flex;
    }

    .block {
        padding: 16px;
    }

    .image {
        width: 480px;
        image-rendering: auto;
        background-color: #333333;
        -webkit-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);

        cursor: pointer;

        transition: 0.2s;
    }

    .img-wrap:hover .image{
        transform: translateY(-8px);
        -webkit-box-shadow: 0px 12px 2px 0px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0px 12px 2px 0px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 12px 2px 0px rgba(0, 0, 0, 0.1);
    }

    .overlay {
        position: absolute;
        height: 100vh;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        width: 100vw;
    }

    .overlay-img {
        max-height: 90vh;
        max-width: calc(100vw - 316px);

        display: flex;
    }

    .overlay-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;


        margin-left: 300px;

        background-color: #EEEEEE;
    }

    .overlay-footer {
        font-size: 18px;

        display: flex;

        width: 100%;

        font-family: Nunito,sans-serif;

    }

    .description {
        margin-left: auto;
        white-space: pre-wrap;
        text-wrap: normal;

        width: auto;

        padding: 16px;
        padding-left: 64px;
    }

    .title-group {
        display: flex;
        flex-direction: column;

        padding: 16px;

        text-transform: uppercase;
    }

    .title {
        font-weight: bold;
        padding-bottom: 12px;
    }

    @media only screen and (max-width: 1000px) {
        .overlay-container {
            margin-left: 0px;
        }

        .image {
            width: 260px;
        }
    }
</style>