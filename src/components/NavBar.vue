<template>
  <!-- Added transition for background color -->
  <nav class="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300 ease-in-out sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <RouterLink to="/" class="text-xl font-bold text-emerald-600 dark:text-emerald-400 hover:opacity-80 transition-opacity">My Portfolio</RouterLink>
      <!-- Increased spacing and added vertical alignment -->
      <div class="flex items-center space-x-6">
        <!-- Added padding, rounded corners, and transitions to links -->
        <RouterLink
          to="/"
          class="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
          active-class="text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-100 dark:bg-gray-700"
        >Home</RouterLink>
        <RouterLink
          to="/about"
          class="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
          active-class="text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-100 dark:bg-gray-700"
        >About</RouterLink>
        <RouterLink
          to="/projects"
          class="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
          active-class="text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-100 dark:bg-gray-700"
        >Projects</RouterLink>
        <!-- Improved button styling and transition -->
        <button @click="toggleDarkMode" class="ml-4 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200">
          <span v-if="isDarkMode" class="text-xl">☀️</span> <!-- Sun icon -->
          <span v-else class="text-xl">🌙</span> <!-- Moon icon -->
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useDarkMode } from '@/composables/useDarkMode' // Import the composable

const { isDarkMode, toggleDarkMode } = useDarkMode() // Use the composable
</script>

<style scoped>
/* Add specific styles for NavBar if needed */
nav a.router-link-exact-active {
 /* Tailwind's active-class handles this now */
}
</style>
