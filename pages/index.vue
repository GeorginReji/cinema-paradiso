<template>
    <main>
        <section class="hero"></section>
        <section class="list-section">
            <h3>Trending Movies</h3>
            <div class="card-container">
                <div v-for="movie in movies" :key="movie.id" class="card">
                    <img
                        :src="$utils.getImageUrl(movie.poster_path, 500)"
                        alt=""
                    />
                    <span class="badge">{{
                        movie.vote_average.toFixed(2)
                    }}</span>
                    <div class="card-content">
                        <nuxt-link
                            :to="{ name: 'movie', query: { id: movie.id } }"
                        >
                            <p>{{ movie.title }}</p>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </section>
        <section class="list-section">
            <h3>Trending Series</h3>
            <div class="card-container">
                <div v-for="series in series" :key="series.id" class="card">
                    <img
                        :src="$utils.getImageUrl(series.poster_path, 500)"
                        alt=""
                    />
                    <span class="badge">{{
                        series.vote_average.toFixed(2)
                    }}</span>
                    <div class="card-content">
                        <p>{{ series.original_name }}</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'IndexPage',
    mounted() {
        this.$store.dispatch('movies/fetchList')
        this.$store.dispatch('series/fetchList')
    },
    computed: {
        ...mapGetters({
            movies: 'movies/getList',
            series: 'series/getList'
        })
    }
}
</script>
<style lang="scss">
main {
    height: 100%;
    background-color: $secondary-background-color;

    .list-section {
        width: 100%;

        h3 {
            margin: 1rem;
            color: $text-color-white;
            font-size: 1.5rem;
            font-weight: 400;
        }

        .card-container {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
            flex-direction: row;
            padding: 1.5rem;

            .card {
                width: 15rem;
                overflow: hidden;

                img {
                    width: 100%;
                    height: auto;
                }

                .badge {
                    position: relative;
                    z-index: 1;
                    top: -45px;
                    left: 190px;
                    background-color: $primary-background-color;
                    color: $text-color-white;
                    padding: 5px 8px;
                    border-radius: 10px;
                    font-size: 1rem;
                }

                .card-content {
                    margin-top: -1.5rem;
                    a {
                        text-decoration: none;
                    }
                    p {
                        font-size: 18px;
                        font-weight: 400;
                        color: $text-color-grey;
                    }
                }
            }
        }
    }
}
</style>
