<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="h-screen bg-gray-200 text-[#004225] dark:bg-black dark:text-[#FFB000]">
    <header class="">
    <NavBar/>
  </header>
    <RouterView />
  
  </div>
</template>

<style scoped>

</style>
