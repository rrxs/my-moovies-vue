<template>
  <DefaultLayout>
    <div class="p-5 sm:p-10">
      <h2 class="font-medium mb-8">Popular movies</h2>
      <div class="flex flex-wrap gap-8">
        <MovieCard v-for="movie in popularMovies" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MovieCard from '../components/MovieCard.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { getPopularMovies } from '../api/movie.api'
import type { Movie } from '../api/models/movie.models'

const popularMovies = ref<Movie[]>([])

onMounted(async () => {
  try {
    popularMovies.value = await getPopularMovies()
    console.log(popularMovies)
  } catch (error) {
    console.log(error)
  }
})
</script>
