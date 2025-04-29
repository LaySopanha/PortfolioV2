<template>
  <section
    id="highlights"
    v-intersect
    class="py-24 px-4 bg-gray-800/70 transition-colors duration-300" 
  >
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white motion-safe:animate-fade-in-down"> 
        Experience & Highlights
      </h2>

      <!-- Tab Navigation -->
      <div class="flex justify-center mb-12 space-x-4 md:space-x-6 motion-safe:animate-fade-in">
        <button
          @click="activeTab = 'achievements'"
          :class="[
            'px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800', 
            activeTab === 'achievements'
              ? 'bg-emerald-600 text-white shadow-md scale-105 focus:ring-emerald-500'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600 focus:ring-gray-500' 
          ]"
        >
          Achievements
        </button>
        <button
          @click="activeTab = 'competitions'"
          :class="[
            'px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800', 
            activeTab === 'competitions'
              ? 'bg-sky-600 text-white shadow-md scale-105 focus:ring-sky-500'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600 focus:ring-gray-500' 
          ]"
        >
          Competitions
        </button>
        <button
          @click="activeTab = 'volunteering'"
          :class="[
            'px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800', 
            activeTab === 'volunteering'
              ? 'bg-indigo-600 text-white shadow-md scale-105 focus:ring-indigo-500'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600 focus:ring-gray-500' 
          ]"
        >
          Volunteering
        </button>
      </div>

      <!-- Content Area -->
      <div class="content-area">
        <!-- Achievements Slider (Placeholder) -->
        <div v-if="activeTab === 'achievements'" key="achievements-content">
          <p class="text-center text-gray-300">Achievements Slider will go here.</p> 
          <!-- Actual Achievements Slider component/markup will be inserted later -->
        </div>

        <!-- Competitions Grid (Placeholder) -->
        <div v-if="activeTab === 'competitions'" key="competitions-content">
           <p class="text-center text-gray-300">Competitions Grid will go here.</p> 
          <!-- Actual Competitions Grid markup will be inserted later -->
        </div>

        <!-- Volunteering Grid (Placeholder) -->
        <div v-if="activeTab === 'volunteering'" key="volunteering-content">
           <p class="text-center text-gray-300">Volunteering Grid will go here.</p> 
          <!-- Actual Volunteering Grid markup will be inserted later -->
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('achievements'); // Default tab

// Data imports and component logic will be added later
</script>

<style scoped>
/* Add transition effects for content switching if desired */
.content-area > div {
  animation: fade-in 0.5s ease-out;
}

/* Ensure animations are defined if not globally available */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}
@keyframes fade-in-down {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out forwards;
}
</style>
