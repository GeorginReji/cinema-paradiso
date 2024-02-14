<template>
  <div class="index">
   <div class="top-movie-section">
    <div class="top-movie-header">
      <h3>Trending Movies</h3>
      <!-- <span>See Move</span> -->
    </div>
    <div class="card-container">
      <div v-for="movie in movies" :key="movie.id" class="card">
        <img :src="getMoviePosterUrl(movie.poster_path)" alt="">
        <div class="card-content">
          <nuxt-link :to="{name: 'movie', query: { id: movie.id }}">
            <p>{{ movie.title }}</p>
          </nuxt-link>
          <p>{{ movie.vote_average }}</p>
        </div>
      </div>
    </div>
   </div>
   <div class="top-movie-section">
    <div class="top-movie-header">
      <h3>Trending Series</h3>
      <!-- <span>See Move</span> -->
    </div>
    <div class="card-container">
      <div v-for="series in series" :key="series.id" class="card">
        <img :src="getMoviePosterUrl(series.poster_path)" alt="">
        <div class="card-content">
          <p>{{ series.original_name }}</p>
          <p>{{ series.vote_average }}</p>
        </div>
      </div>
    </div>
   </div>
  </div>
 </template>
 
 <script>
 import { mapGetters } from 'vuex'

 export default {
   name: 'IndexPage',
   mounted() {
    this.$store.dispatch('movies/fetchList')
    this.$store.dispatch('series/fetchList')
   },
   methods: {
    getMoviePosterUrl(poster_path) {
      const baseUrl = 'https://image.tmdb.org/t/p/w500'
      return `${baseUrl}${poster_path}`
    }
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
 /* colors */
$primary-background-color     : #0f1115;
$secondary-background-color: #19181f;
$accent-color         : #222128;

/* text color */
$text-color-white : #ffffff;
$text-color-grey : #57585b; 
 .index {
   height: 100%;
   margin-top: 8%;
   .top-movie-section {
    width: 100%;
     .top-movie-header {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      color: $text-color-white;
     }
     .card-container{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: row;
      padding: 20px;
      .card {
        width: 11rem;
        overflow: hidden;
        img {
          width: 100%;
          height: auto;
        }
        .card-content {
            padding: 10px;
            p{
              font-size: 18px;
              font-weight: 400;
              color: $text-color-white;
            }
          }
      }
     }

   }
   
 }
 </style>
 