<template>
  <section
    id="about"
    class="py-20 px-4 bg-white/98 dark:bg-gray-900/95 backdrop-blur-sm transition-colors duration-300 overflow-hidden"
  >
    <div class="container mx-auto max-w-6xl">
      <h2
        v-intersect
        class="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
      >
        About Me
      </h2>
      <div class="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        <!-- Image Presentation (Transparent Background, No Shadow) -->
        <div v-intersect class="lg:w-1/3 flex-shrink-0 flex justify-center items-center delay-150">
          <div class="relative group">
            <!-- Removed gradient border -->
            <!-- Container with no background, border, or shadow -->
            <div
              class="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden flex items-center justify-center mx-auto"
            >
              <img
                src="/images/Profile2.png"
                alt="Lay Sopanha"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        <!-- Text Content -->
        <div
          v-intersect
          class="lg:w-2/3 text-lg text-gray-600 dark:text-gray-300 space-y-10 delay-300"
        >
          <!-- Increased spacing -->
          <div>
            <h3
              class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white border-b-2 border-emerald-500/50 pb-2 inline-block"
            >
              My Journey
            </h3>
            <!-- Added border -->
            <p class="leading-relaxed mt-3">
              <!-- Added margin top -->
              Hello! I'm
              <span class="font-semibold text-emerald-700 dark:text-emerald-400">Lay Sopanha</span>.
              My fascination with Computer Science began [briefly mention origin/spark]. This led me
              down a path of continuous learning and exploration, culminating in [mention key
              experience/education]. I thrive on solving complex problems and building [mention type
              of solutions - e.g., elegant software, insightful data models].
            </p>
          </div>

          <div>
            <h3
              class="text-2xl font-semibold mb-5 text-gray-800 dark:text-white border-b-2 border-emerald-500/50 pb-2 inline-block"
            >
              Core Skills
            </h3>
            <!-- Added border -->
            <div class="flex flex-wrap gap-3">
              <span
                v-for="skill in skills"
                :key="skill.name"
                class="flex items-center bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-sm font-medium px-3 py-1.5 rounded-full shadow-sm transition-transform hover:scale-105"
              >
                <component
                  v-if="skill.icon"
                  :is="skill.icon"
                  class="h-4 w-4 mr-1.5 opacity-80"
                  aria-hidden="true"
                />
                <span v-else class="mr-1.5 text-xs">●</span>
                <!-- Fallback dot -->
                {{ skill.name }}
              </span>
            </div>
            <p class="text-sm mt-4 text-gray-500 dark:text-gray-400">
              (And always eager to learn more!)
            </p>
          </div>

          <div>
            <h3
              class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white border-b-2 border-emerald-500/50 pb-2 inline-block"
            >
              My Approach
            </h3>
            <!-- Added border -->
            <p class="leading-relaxed mt-3">
              <!-- Added margin top -->
              I believe in a
              <span class="font-medium text-gray-700 dark:text-gray-200"
                >[mention approach - e.g., user-centric, data-driven, collaborative]</span
              >
              approach. Whether it's developing software or analyzing data, my focus is on
              delivering clean, efficient, and impactful results. I enjoy collaborating with teams
              to bring ideas to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
// Import necessary icons from Heroicons
import {
  CodeBracketIcon,
  CommandLineIcon,
  CircleStackIcon,
  BeakerIcon,
  UsersIcon,
  BoltIcon,
  PaintBrushIcon,
  ServerStackIcon,
} from '@heroicons/vue/20/solid'

// Define skills with names and corresponding icons
// NOTE: Replace 'YourSkill...' with actual skills and find appropriate Heroicons or leave icon as null
const skills = ref([
  { name: 'JavaScript', icon: CodeBracketIcon },
  { name: 'Vue.js', icon: CodeBracketIcon }, // Consider a Vue-specific icon if available/added
  { name: 'Node.js', icon: ServerStackIcon },
  { name: 'Tailwind CSS', icon: PaintBrushIcon },
  { name: 'HTML5', icon: CodeBracketIcon },
  { name: 'CSS3', icon: CodeBracketIcon },
  { name: 'Python', icon: CodeBracketIcon }, // Consider a Python-specific icon
  { name: 'SQL', icon: CircleStackIcon },
  { name: 'Git', icon: CommandLineIcon },
  { name: 'Docker', icon: CommandLineIcon }, // Consider a Docker-specific icon
  { name: 'Agile Methodologies', icon: UsersIcon },
  // Add more skills as needed
  // { name: 'YourSkill', icon: BeakerIcon },
])
</script>

<style scoped>
/* Add specific styles if needed */

/* Add fade-in-down animation if not in tailwind.config.cjs */
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

/* Removed tilt animation */

/* Re-use fade-in-left/right if not in tailwind config */
@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out forwards;
}
.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out forwards;
}
</style>
