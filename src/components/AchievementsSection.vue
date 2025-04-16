<template>
  <section
    id="achievements"
    class="py-24 px-4 bg-emerald-50 dark:bg-gray-800/50 transition-colors duration-300 overflow-hidden"
  >
    <!-- Increased py padding -->
    <div class="container mx-auto">
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-gray-800 dark:text-white motion-safe:animate-fade-in-down"
      >
        <!-- Increased bottom margin -->
        Milestones & Achievements
      </h2>

      <!-- Swiper Slider -->
      <swiper
        :modules="[Navigation, Pagination, A11y, Autoplay, EffectFade]"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true, dynamicBullets: true }"
        :navigation="true"
        :effect="'fade'"
        :fade-effect="{ crossFade: true }"
        class="achievement-swiper motion-safe:animate-fade-in rounded-lg shadow-xl overflow-hidden"
      >
        <swiper-slide v-for="achievement in achievements" :key="achievement.id">
          <div class="relative w-full h-[50vh] md:h-[65vh] flex items-end justify-start text-white">
            <!-- Increased height, flex positioning -->
            <!-- Background Image -->
            <img
              v-if="achievement.imageUrl"
              :src="achievement.imageUrl"
              :alt="achievement.title"
              class="absolute inset-0 w-full h-full object-cover z-0"
            />
            <!-- Fallback Background with Icon -->
            <div
              v-else
              class="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center z-0"
            >
              <component
                :is="heroIcons[achievement.icon] || heroIcons['academic-cap']"
                class="h-24 w-24 text-gray-300 dark:text-gray-500 opacity-50"
                aria-hidden="true"
              />
            </div>

            <!-- Gradient Overlay for Text Readability -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10"
            ></div>

            <!-- Text Content Overlay -->
            <div class="relative z-20 p-6 sm:p-8 md:p-10 max-w-2xl">
              <!-- Padding and max-width -->
              <h3 class="flex items-center text-2xl md:text-3xl font-bold mb-2 drop-shadow-md">
                <span>{{ achievement.title }}</span>
                <a
                  v-if="achievement.sourceUrl && achievement.sourceUrl !== '#'"
                  :href="achievement.sourceUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="ml-2 text-emerald-300 hover:text-emerald-100 transition-colors"
                  :aria-label="`Link to source for ${achievement.title}`"
                >
                  <LinkIcon class="h-5 w-5 md:h-6 md:w-6" />
                </a>
              </h3>
              <p class="text-base md:text-lg text-gray-200 mb-3 drop-shadow-sm">
                {{ achievement.description }}
              </p>
              <p class="text-sm font-medium text-emerald-300">{{ achievement.date }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { achievements } from '@/data/achievements.js'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade' // Import fade effect CSS

// import required modules
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules'

// Import Heroicons for fallback and link icon
import * as heroIcons from '@heroicons/vue/24/solid'
import { LinkIcon } from '@heroicons/vue/24/outline' // Import LinkIcon
</script>

<style>
/* Global or unscoped styles for Swiper customization */

.achievement-swiper {
  /* Removed padding-bottom, pagination is outside now or handled differently if needed */
}

/* Style Pagination Bullets */
.achievement-swiper .swiper-pagination-bullet {
  background-color: #d1d5db; /* gray-300 */
  opacity: 0.8;
  transition: all 0.3s ease;
  width: 10px;
  height: 10px;
}
.achievement-swiper .swiper-pagination-bullet-active {
  background-color: #ffffff; /* white */
  opacity: 1;
  width: 12px;
  height: 12px;
}
/* Dark mode pagination handled by base colors */

/* Style Navigation Buttons */
.achievement-swiper .swiper-button-prev,
.achievement-swiper .swiper-button-next {
  color: #ffffff; /* white */
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 44px; /* Slightly larger */
  height: 44px;
  transition: all 0.3s ease;
}
.achievement-swiper .swiper-button-prev:after,
.achievement-swiper .swiper-button-next:after {
  font-size: 20px; /* Slightly larger */
  font-weight: bold;
}
.achievement-swiper .swiper-button-prev:hover,
.achievement-swiper .swiper-button-next:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

/* Adjust button position */
.achievement-swiper .swiper-button-prev {
  left: 15px;
}
.achievement-swiper .swiper-button-next {
  right: 15px;
}

/* Re-add fade-in animations if not in tailwind config */
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
