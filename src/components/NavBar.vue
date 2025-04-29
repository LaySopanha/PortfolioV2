<template>

  <nav class="bg-space-dark/80 backdrop-blur-md shadow-sm transition-colors duration-300 ease-in-out sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <a href="#home" @click.prevent="smoothScroll('#home')" class="text-xl font-bold text-emerald-400 hover:opacity-80 transition-opacity">My Portfolio</a>
      <div class="flex items-center space-x-6">
        <a
          href="#home"
          @click.prevent="smoothScroll('#home')"
          class="px-3 py-1 rounded-md text-gray-300 hover:bg-gray-700 hover:text-emerald-400 transition-all duration-200"
          :class="{ 'text-emerald-400 font-semibold bg-gray-700': activeSection === 'home' }"
        >Home</a>
        <a
          href="#about"
          @click.prevent="smoothScroll('#about')"
          class="px-3 py-1 rounded-md text-gray-300 hover:bg-gray-700 hover:text-emerald-400 transition-all duration-200"
           :class="{ 'text-emerald-400 font-semibold bg-gray-700': activeSection === 'about' }"
        >About</a>
         <a
          href="#achievements"
          @click.prevent="smoothScroll('#achievements')"
          class="px-3 py-1 rounded-md text-gray-300 hover:bg-gray-700 hover:text-emerald-400 transition-all duration-200"
           :class="{ 'text-emerald-400 font-semibold bg-gray-700': activeSection === 'achievements' }"
        >Achievements</a>
        <a
          href="#projects"
          @click.prevent="smoothScroll('#projects')"
          class="px-3 py-1 rounded-md text-gray-300 hover:bg-gray-700 hover:text-emerald-400 transition-all duration-200"
           :class="{ 'text-emerald-400 font-semibold bg-gray-700': activeSection === 'projects' }"
        >Projects</a>
         <!-- Contact link remains removed -->
      </div>
    </div>
  </nav>
</template>

<script setup>
// Restoring IntersectionObserver logic
import { ref, onMounted, onUnmounted } from 'vue'
// import { useDarkMode } from '@/composables/useDarkMode' // Removed import
import { smoothScroll } from '@/utils/helpers'

// const { isDarkMode, toggleDarkMode } = useDarkMode() // Removed dark mode logic
const activeSection = ref('home') // Restore active section tracking

// --- Active Section Highlighting Logic ---
const observer = ref(null)
const sections = ref([])

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeSection.value = entry.target.id
    }
  })
}

onMounted(() => {
  sections.value = document.querySelectorAll('section[id]') // Select sections with IDs
  // Ensure sections exist before observing
  if (sections.value.length > 0) {
      observer.value = new IntersectionObserver(observerCallback, {
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
        threshold: 0,
      })
      sections.value.forEach((section) => observer.value.observe(section))
  } else {
      console.warn("No sections with IDs found to observe for active highlighting.");
  }
})

onUnmounted(() => {
  if (observer.value) {
    sections.value.forEach((section) => {
        if (section) { // Check if section still exists before unobserving
            observer.value.unobserve(section);
        }
    });
  }
})
// --- End Active Section Highlighting Logic ---

</script>

<style scoped>
/* NavBar specific styles */
</style>
