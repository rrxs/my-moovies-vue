<template>
  <div class="w-52">
    <img :src="`${consts.POSTER_BASE_URL}${props.movie.posterUrl}`" class="mb-1" />
    <div class="">{{ props.movie.title }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '../api/models/movie.models'
import consts from '../utils/consts'

type MovieCardProps = {
  movie: Movie
}

const props = defineProps<MovieCardProps>()
</script>
