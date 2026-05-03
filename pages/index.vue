<template>
    <main>
        <Carousel :items="carouselItems" />

        <section class="content-section">
            <div class="section-header">
                <h3>
                    {{ title }}
                </h3>
            </div>

            <div class="card-container">
                <div v-for="item in displayList" :key="item.id" class="poster">
                    <img
                        :src="$utils.getImageUrl(item.poster_path, 500)"
                        :alt="item.title || item.name"
                    />
                    <span class="badge">{{
                        item.vote_average.toFixed(2)
                    }}</span>
                    <div class="card-content">
                        <nuxt-link
                            v-if="activeFilter === 'movie'"
                            :to="{ name: 'movie', query: { id: item.id } }"
                        >
                            <p>{{ item.title }}</p>
                        </nuxt-link>
                        <p v-else>{{ item.name || item.original_name }}</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
/**
 * @typedef {import('../types/tmdb').Movie} Movie
 * @typedef {import('../types/tmdb').TVSeries} TVSeries
 * @typedef {import('../types/tmdb').MediaItem} MediaItem
 */

export default {
    name: 'IndexPage',

    watch: {
        '$route.query.type': {
            immediate: true,
            handler(type) {
                const resolved = type === 'tv' ? 'tv' : 'movie'
                this.$store.commit('setType', resolved)

                if (resolved === 'movie' && this.moviesList.length === 0) {
                    this.$store.dispatch('movies/fetchList')
                } else if (resolved === 'tv' && this.seriesList.length === 0) {
                    this.$store.dispatch('series/fetchList')
                }
            }
        }
    },

    computed: {
        activeFilter() {
            return this.$route.query.type === 'tv' ? 'tv' : 'movie'
        },
        /** @returns {Movie[]} */
        moviesList() {
            return this.$store.getters['movies/getTrendingList']
        },

        /** @returns {TVSeries[]} */
        seriesList() {
            return this.$store.getters['series/getTrendingList']
        },

        /** @returns {MediaItem[]} */
        carouselItems() {
            return this.activeFilter === 'movie'
                ? this.moviesList
                : this.seriesList
        },

        /** @returns {MediaItem[]} */
        displayList() {
            return this.activeFilter === 'movie'
                ? this.moviesList
                : this.seriesList
        },

        title() {
            return this.activeFilter === 'movie'
                ? 'Popular Movies'
                : 'Popular TV Shows'
        }
    },

    methods: {}
}
</script>

<style lang="scss" scoped>
main {
    height: 100%;
    background-color: $secondary-background-color;
}

.content-section {
    width: 100%;
    padding-bottom: 2rem;
}

.section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1.5rem 0.75rem;

    h3 {
        color: $text-color-white;
        font-size: 1.5rem;
        font-weight: 400;
    }
}

.card-container {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 1.5rem;
}

.poster {
    width: 15rem;
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
</style>
