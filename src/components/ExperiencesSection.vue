<template>
  <section id="experiences" class="py-24 px-4 bg-sky-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-gray-800 dark:text-white motion-safe:animate-fade-in-down">
        Competitions & Volunteering
      </h2>

      <!-- Responsive Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 motion-safe:animate-fade-in">
        <div
          v-for="experience in experiences"
          :key="experience.id"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105"
        >
          <!-- Image Section -->
          <div class="relative h-48 sm:h-56 w-full">
            <img
              v-if="experience.imageUrl"
              :src="experience.imageUrl"
              :alt="experience.title"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <!-- Fallback Background -->
            <div v-else class="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-400 to-sky-500 dark:from-sky-700 dark:to-sky-600 flex items-center justify-center">
              <!-- Optional: Icon for fallback -->
              <span class="text-sky-100/50 text-4xl font-bold">{{ experience.type === 'Competition' ? '🏆' : '🤝' }}</span>
            </div>
             <!-- Type Badge -->
             <span class="absolute top-2 left-2 inline-block bg-sky-600/90 text-white text-xs font-semibold px-2 py-1 rounded uppercase tracking-wider">{{ experience.type }}</span>
          </div>

          <!-- Text Content Section -->
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="flex items-center text-xl font-semibold mb-1 text-gray-900 dark:text-white">
              <span>{{ experience.title }}</span>
              <a
                v-if="experience.sourceUrl && experience.sourceUrl !== '#'"
                :href="experience.sourceUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-2 text-sky-500 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors"
                :aria-label="`Link to source for ${experience.title}`"
              >
                <LinkIcon class="h-5 w-5" />
              </a>
            </h3>
            <p v-if="experience.role" class="text-md font-medium text-gray-600 dark:text-gray-400 mb-2">{{ experience.role }}</p>
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-3 flex-grow">{{ experience.description }}</p>
            <p class="text-xs font-medium text-sky-600 dark:text-sky-400 mt-auto">{{ experience.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experiences } from '@/data/experiences.js';
// Import Heroicons for link icon
import { LinkIcon } from '@heroicons/vue/24/outline';

// Swiper imports are no longer needed
</script>

<style>
/* Remove Swiper-specific styles */
/* Add any component-specific styles if needed, or rely on Tailwind */

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
