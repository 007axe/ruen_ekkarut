<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';

</script>

<template>
  
  <div class="font-Kanit h-screen bg-gray-200 text-[#232F2F] dark:bg-black dark:text-[#FFB000]">
    <header class="">
    <NavBar/>
  </header>

    <RouterView />
  
  </div>
</template>

<style scoped>

</style>
