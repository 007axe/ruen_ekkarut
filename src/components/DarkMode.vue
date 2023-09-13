<script setup>
import { useDark,useToggle } from '@vueuse/core';

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
    <!-- <p>isDark: {{ isDark }}</p> -->
    <button @click="toggleDark()" class="px-4 py-2 text-black dark:text-white   rounded">
        <i :class="[isDark ? 'fa-regular fa-sun' : 'fa-regular fa-moon']"></i>
    </button>
</template>

