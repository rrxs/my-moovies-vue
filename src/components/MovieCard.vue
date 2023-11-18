<template>
  <div class="w-52">
    <div class="group relative cursor-pointer" @click="handleMovieClick">
      <img :src="`${consts.POSTER_BASE_URL}${props.movie.posterUrl}`" class="mb-1" />
      <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-60"
      ></div>
      <div v-if="props.movie.isWatched">
        <div
          class="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex flex-col justify-center items-center text-white absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-transparent"
        >
          <v-icon name="pr-minus-circle" scale="2" />
          <span>Remove watched</span>
        </div>
      </div>
      <div v-else>
        <div
          class="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex flex-col justify-center items-center text-white absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-transparent"
        >
          <v-icon name="pr-plus-circle" scale="2" />
          <span>Mark as watched</span>
        </div>
      </div>
      <div v-if="props.movie.isWatched" class="absolute top-0 right-0">
        <img src="/src/assets/watched-flag.svg" alt="" />
      </div>
    </div>
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

const handleMovieClick = () => {
  console.log(props.movie)
}
</script>
