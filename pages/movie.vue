<template>
  <div class="main">
    <div
      v-if="movie"
      class="movie-view"
      :style="{backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`}"
    >
      <div class="poster">
        <img
          :src='`https://image.tmdb.org/t/p/w500${movie.poster_path}`'
          alt="movie poster"
        />
      </div>
      <div class="movie-details">
            <h1>{{ movie.title }}</h1>
            <span>{{ movie.vote_average }}</span>
        <div class="btn-and-details">
          <div class="genre">
            <p v-for="(genre, index) in movie.genres" :key="index">{{genre.name}}</p>
          </div>
          <div class="btn-container">
            <button>watch list</button>
            <button>watch trailer</button>
          </div>
        </div>
        <div class="more-description">
          <p>{{ movie.overview }}</p>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  layout: "customLayout",
  mounted() {
    this.$store.dispatch('movies/fetchData', parseInt(this.$route.query.id))
    this.$store.dispatch('movies/fetchCast', parseInt(this.$route.query.id))
  },
  computed: {
    ...mapGetters({
      movie: 'movies/getData'
    })
  }
};
</script>

<style lang="scss" scoped>
/* colors */
$primary-background-color     : #0f1115;
$secondary-background-color: #19181f;
$accent-color         : #222128;

/* text color */
$text-color-white : #ffffff;
$text-color-grey : #57585b; 
.main {
  height: calc(100vh - 8%);
  .movie-view {
    height: 60vh;
    background-size: cover;
    background-position: center;
    color: $text-color-white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .poster {
      margin-top: 13%;
      margin-left: 2%;
      width: 24rem;
      img {
        height: auto;
        width: 100%;
      }
    }
    .movie-details {
        margin-top: 15%;
        span {
        padding: 1rem;
    }
        .btn-and-details {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .genre {
                display: flex;
                p{
                    padding: 1rem;
                }
            }
            .btn-container {
                button {
                    margin: 1rem;
                    padding: 0.5rem;
                    border-radius: 4px;
                    border: none;
                    color: $text-color-white;
                }
                button:nth-child(1) {
                    background-color: #2ecc71;
                }
                button:nth-child(2) {
                    background-color: #3498db;
                }
            }
        }
        .more-description {
            p {
                width: 70%;
                padding: 1rem;
            }
            .cast-details {
                display: flex;
                .detail {
                    display: flex;
                    flex-direction: column;
                    padding: 1rem;
                    span {
                        padding: 0%;
                    }
                }
            }
        }
      }
  }
}
</style>
