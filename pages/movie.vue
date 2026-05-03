<template>
    <main v-if="movie">
        <div class="backdrop-overlay">
            <div class="backdrop">
                <img
                    :src="$utils.getImageUrl(movie.backdrop_path, 1280)"
                    alt="movie backdrop"
                />
                <div class="poster-details">
                    <div class="poster-container">
                        <img
                            class="poster"
                            :src="$utils.getImageUrl(movie.poster_path, 500)"
                            alt="movie poster"
                        />
                        <span class="rating">{{
                            movie.vote_average.toFixed(2)
                        }}</span>
                    </div>
                    <div class="details">
                        <h1>{{ movie.title }}</h1>
                        <div class="genre">
                            <span
                                v-for="(genre, index) in movie.genres"
                                :key="index"
                            >
                                {{ genre.name }}
                            </span>
                        </div>
                        <p>{{ movie.overview }}</p>
                        <div class="btn-container">
                            <button class="btn primary">
                                <i class="ri-add-line"></i>
                                Watch List
                            </button>
                            <button class="btn secondary">
                                <i class="ri-play-line"></i>
                                Play Trailer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cast-details">
            <div class="detail">
                <span>Director</span>
                <span> name</span>
            </div>
            <div class="detail">
                <span>Producer</span>
                <span> name</span>
            </div>
            <div class="detail">
                <span>Actor</span>
                <span> name</span>
            </div>
            <div class="detail">
                <span>Actress</span>
                <span> name</span>
            </div>
            <div class="detail">
                <span>Assistant Director</span>
                <span> name</span>
            </div>
        </div>
    </main>
</template>

<script>
/** @typedef {import('../types/tmdb').MovieDetail} MovieDetail */

export default {
    name: 'MoviePage',
    layout: 'customLayout',

    computed: {
        /** @returns {MovieDetail} */
        movie() {
            return this.$store.getters['movies/getData']
        }
    },

    mounted() {
        const movieId = parseInt(this.$route.query.id)
        this.$store.dispatch('movies/fetchData', movieId)
        this.$store.dispatch('movies/fetchCast', movieId)
    }
}
</script>

<style lang="scss" scoped>
main {
    color: $text-color-white;
    min-height: 100vh;
}
.backdrop-overlay {
    display: flex;
    align-items: center;
    justify-content: center;

    .backdrop {
        position: relative;
        width: 100%;
        height: 60vh;

        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        &::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0.4)
            );
        }
    }

    .poster-details {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        padding: 2rem;
        margin: 0 5%;
    }

    .poster-container {
        position: relative;
        max-height: calc(60vh - 4rem);
    }

    .poster {
        display: block;
        max-height: calc(60vh - 4rem);
        max-width: 250px;
        object-fit: cover;
        border-radius: 4px;
    }

    .rating {
        position: absolute;
        right: 2px;
        bottom: 2px;
        font-size: 1.2rem;
        color: $rating-color;
        background: rgba(0, 0, 0, 0.5);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        white-space: nowrap;
    }

    .details {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;

        h1 {
            font-size: 2.5rem;
            color: $text-color-white;
            font-weight: 600;
        }

        > p {
            font-size: 0.75em;
            color: $text-color-grey;
            max-width: 70%;
        }
    }
}
.genre {
    display: flex;
    gap: 0.5rem;

    span {
        font-size: 1rem;
        color: $text-color-grey;
        background: $primary-background-color;
        padding: 0.5rem 1rem;
        border-radius: 20px;
    }
}
.btn-container {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;

    button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
    }
}
</style>
