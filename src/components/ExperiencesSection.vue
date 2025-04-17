<template>
  <section
    id="experiences"
    v-intersect
    class="py-24 px-4 transition-colors duration-300" 
  >
    <div class="container mx-auto">
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-gray-800 dark:text-white motion-safe:animate-fade-in-down"
      >
        Competitions & Volunteering
      </h2>

      <!-- Vertical Timeline Layout -->
      <div class="relative max-w-4xl mx-auto motion-safe:animate-fade-in">
        <!-- Timeline Line -->
        <div
          class="absolute left-5 md:left-1/2 top-2 h-full w-1 bg-sky-200 dark:bg-sky-800/50 rounded -translate-x-1/2"
          aria-hidden="true"
        ></div>

        <!-- Timeline Items -->
        <div class="space-y-16">
          <!-- Increased spacing -->
          <div
            v-for="(experience, index) in experiences"
            :key="experience.id"
            class="relative flex items-start group"
            :class="[index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row']"
          >
            <!-- Timeline Dot & Icon -->
            <div
              class="absolute left-5 md:left-1/2 top-2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-sky-500 dark:bg-sky-600 shadow-md z-10 ring-4 ring-sky-50 dark:ring-gray-900"
            >
              <span class="text-white text-xl font-bold">{{
                experience.type === 'Competition' ? '🏆' : '🤝'
              }}</span>
            </div>

            <!-- Content Card -->
            <div
              class="ml-16 md:ml-0 w-full md:w-[calc(50%-3rem)] bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 dark:border-gray-700/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-700"
              :class="[index % 2 === 0 ? 'md:mr-[calc(50%+3rem)]' : 'md:ml-[calc(50%+3rem)]']"
            >
              <!-- Image Section (Optional) -->
              <div v-if="experience.imageUrl" class="relative h-44 w-full">
                <img
                  :src="experience.imageUrl"
                  :alt="experience.title"
                  class="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <!-- Text Content Section -->
              <div class="p-6">
                <p class="text-xs font-semibold text-sky-600 dark:text-sky-400 mb-1.5 uppercase tracking-wider">
                  {{ experience.date }}
                </p>
                <h3 class="flex items-center text-lg font-bold mb-1 text-gray-900 dark:text-white">
                  <span>{{ experience.title }}</span>
                  <a
                    v-if="experience.sourceUrl && experience.sourceUrl !== '#'"
                    :href="experience.sourceUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ml-2 text-sky-500 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors flex-shrink-0"
                    :aria-label="`Link to source for ${experience.title}`"
                  >
                    <LinkIcon class="h-4 w-4" />
                  </a>
                </h3>
                <p
                  v-if="experience.role"
                  class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 italic"
                >
                  {{ experience.role }}
                </p>
                <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {{ experience.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experiences } from '@/data/experiences.js'
// Import Heroicons for link icon
import { LinkIcon } from '@heroicons/vue/24/outline'
</script>

<style>
/* Component-specific styles if needed, or rely on Tailwind */

/* Ensure animations are defined if not globally available */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out forwards;
}
</style>
