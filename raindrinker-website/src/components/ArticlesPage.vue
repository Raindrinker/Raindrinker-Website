<template>
    <div class="body">
        <div class="title">
            ARTICLES
        </div>

        <div class="cards">
            <div class="card" :class="$mq" v-for="(article, index) in articlesData" :key="index" @click="onClickArticle(article)">
                <div class="article-body">
                    <div class="article-genre">
                        {{article.genre}}
                    </div>
                    <div class="article-title">
                        {{article.title}}
                    </div>
                    <div class="article-date">
                        {{article.date}}
                    </div>
                </div>
                <div class="img-wrap">
                    <img :src="article.image" class="article-img">
                </div>
                <div class="article-body">
                    <div v-html="article.description">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ArticlesData from "../data/articles";
    export default {
        name: "ArticlesPage",
        computed: {
            articlesData() {
                return ArticlesData.sort((a, b) => {
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
            onClickArticle(article) {
                window.location.href = article.link;
            }
        }
    }
</script>

<style scoped>

    .body {
        padding: 32px;
        display: flex;
        flex-direction: column;

        overflow-y: auto;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
    }

    .card.mobile {
        width: 100%;
        margin: 16px;
        background-color: white;
        border-radius: 8px;

        -webkit-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);

        overflow: hidden;

        cursor: pointer;
    }
    .card.tablet {
        width: 40%;
        margin: 16px;
        background-color: white;
        border-radius: 8px;

        -webkit-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);

        overflow: hidden;

        cursor: pointer;
    }
    .card.laptop {
        width: 40%;
        margin: 16px;
        background-color: white;
        border-radius: 8px;

        -webkit-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);

        overflow: hidden;

        cursor: pointer;
    }
    .card.desktop {
        width: 25%;
        margin: 16px;
        background-color: white;
        border-radius: 8px;

        -webkit-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);

        overflow: hidden;

        cursor: pointer;
    }

    .img-wrap {
        overflow: hidden;
        height: 300px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .article-body {
        font-family: Nunito, sans-serif;

        padding: 16px;
    }

    .article-title {
        font-size: 24px;
    }

    .title {
        font-family: Nunito, sans-serif;
        padding-bottom: 32px;
        font-size: 32px;

    }

    .article-genre {
        color: #888888;
    }

</style>