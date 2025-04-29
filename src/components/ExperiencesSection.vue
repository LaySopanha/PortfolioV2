<template>
  <section
    id="experiences"
    v-intersect
    class="py-24 px-4 transition-colors duration-300" 
  >
    <div class="container mx-auto">
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-white motion-safe:animate-fade-in-down"
      >
        Competitions & Volunteering
      </h2>

      <div class="relative max-w-4xl mx-auto motion-safe:animate-fade-in">
        <div
          class="absolute left-5 md:left-1/2 top-2 h-full w-1 bg-sky-800/50 rounded -translate-x-1/2"
          aria-hidden="true"
        ></div>

        <div class="space-y-16">
          <div
            v-for="(experience, index) in experiences"
            :key="experience.id"
            class="relative flex items-start group"
            :class="[index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row']"
          >
            <div
              class="absolute left-5 md:left-1/2 top-2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-sky-600 shadow-md z-10 ring-4 ring-gray-900"
            >
              <span class="text-white text-xl font-bold">{{
                experience.type === 'Competition' ? '🏆' : '🤝'
              }}</span>
            </div>

            <div
              class="ml-16 md:ml-0 w-full md:w-[calc(50%-3rem)] bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-sky-700"
              :class="[index % 2 === 0 ? 'md:mr-[calc(50%+3rem)]' : 'md:ml-[calc(50%+3rem)]']"
            >
              <div v-if="experience.imageUrl" class="relative h-44 w-full">
                <img
                  :src="experience.imageUrl"
                  :alt="experience.title"
                  class="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div class="p-6">
                <p class="text-xs font-semibold text-sky-400 mb-1.5 uppercase tracking-wider">
                  {{ experience.date }}
                </p>
                <h3 class="flex items-center text-lg font-bold mb-1 text-white">
                  <span>{{ experience.title }}</span>
                  <a
                    v-if="experience.sourceUrl && experience.sourceUrl !== '#'"
                    :href="experience.sourceUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ml-2 text-sky-400 hover:text-sky-300 transition-colors flex-shrink-0"
                    :aria-label="`Link to source for ${experience.title}`"
                  >
                    <LinkIcon class="h-4 w-4" />
                  </a>
                </h3>
                <p
                  v-if="experience.role"
                  class="text-sm font-medium text-gray-400 mb-2 italic"
                >
                  {{ experience.role }}
                </p>
                <p class="text-sm text-gray-300 leading-relaxed">
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
