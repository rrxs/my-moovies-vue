<template>
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>
  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto border-r-gray-200 border-r">
      <div>
        <img src="../assets/logo.png" class="mx-auto my-7 w-44" />
      </div>
      <div class="mb-8">
        <input type="text" class="input-field" placeholder="Search" />
      </div>
      <ul class="font-medium">
        <li class="border-y">
          <router-link
            :to="{ name: 'home' }"
            class="flex items-center p-2 py-4 hover:bg-slate-50 group"
          >
            <span class="">Discover</span>
          </router-link>
        </li>
        <li class="border-b">
          <router-link
            :to="{ name: 'movies' }"
            href="#"
            class="flex items-center p-2 py-4 hover:bg-slate-50 group"
          >
            <span class="">My movies</span>
          </router-link>
        </li>
        <li class="border-b">
          <a href="#" @click="logout" class="flex items-center p-2 py-4 hover:bg-slate-50 group">
            <span class="">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
  <div class="sm:pl-64">
    <slot />
  </div>
</template>

<script setup lang="ts">
import router from '../router'
import { clearUserData } from '../api/auth.api'

const logout = () => {
  clearUserData()
  router.replace({ name: 'signin' })
}
</script>
