<template>
  <!-- Added padding, gradient background, and adjusted text sizes/colors -->
  <div class="flex flex-col items-center justify-center text-center py-20 px-4 min-h-[calc(100vh-120px)]"> {/* Adjust min-height based on nav/footer */}
    <div class="bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-10 rounded-xl shadow-lg max-w-4xl">
      <h1 class="text-4xl md:text-6xl font-bold mb-4 text-emerald-700 dark:text-emerald-300">Welcome to My Portfolio</h1>
      <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Hi, I'm <span class="font-semibold">[Your Name]</span>, a passionate developer/engineer/scientist. Explore my work and get to know more about my skills and projects.
      </p>
      <RouterLink
        to="/projects"
        class="inline-block bg-emerald-600 hover:bg-emerald-700 dark:hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
      >
        View My Projects
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
// No specific script needed for this simple homepage yet
</script>

<style scoped>
/* Add specific styles for HomeView if needed */
/* Example: Ensure gradient background covers the area */
/* Adjust 120px based on actual combined height of your NavBar and FooterBar */
.min-h-\[calc\(100vh-120px\)\] {
  min-height: calc(100vh - 120px);
}
</style>
