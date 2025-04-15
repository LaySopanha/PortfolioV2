<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue' // Import FooterBar
</script>

<template>
  <div id="app-container" class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
    <NavBar />
    <!-- Added flex-grow to make main content take available space -->
    <main class="container mx-auto px-4 py-8 flex-grow">
      <RouterView />
    </main>
    <FooterBar /> <!-- Use FooterBar -->
  </div>
</template>

<style scoped>
/* Scoped styles for App.vue if needed */
</style>
