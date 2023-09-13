<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="h-screen bg-gray-200 text-black dark:bg-black dark:text-white">
    <header>
    <NavBar/>
  </header>
    <RouterView />
  
  </div>
</template>

<style scoped>

</style>
