<template>
  <section id="about" class="py-20 px-4 bg-white dark:bg-gray-800 transition-colors duration-300 overflow-hidden">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white motion-safe:animate-fade-in-down">About Me</h2>
      <div class="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

        <!-- Image Placeholder -->
        <div class="lg:w-1/3 flex-shrink-0 motion-safe:animate-fade-in-left">
           <div class="relative group">
             <div class="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 motion-safe:animate-tilt"></div>
             <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-xl border-4 border-white dark:border-gray-700 bg-gray-200 dark:bg-gray-600 flex items-center justify-center mx-auto">
                <!-- Replace with your image -->
                <span class="text-gray-500 dark:text-gray-400"></span>
                <img src="/images/Profile2.png" alt="Your Name" class="w-full h-full object-cover">
             </div>
           </div>
        </div>

        <!-- Text Content -->
        <div class="lg:w-2/3 text-lg text-gray-600 dark:text-gray-300 space-y-8 motion-safe:animate-fade-in-right">
          <div>
            <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">My Journey</h3>
            <p class="leading-relaxed">
              Hello! I'm <span class="font-semibold text-gray-800 dark:text-white">Lay Sopanha</span>. My fascination with Computer Science began [briefly mention origin/spark]. This led me down a path of continuous learning and exploration, culminating in [mention key experience/education]. I thrive on solving complex problems and building [mention type of solutions - e.g., elegant software, insightful data models].
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Core Skills</h3>
            <div class="flex flex-wrap gap-3">
              <!-- Replace with your actual skills -->
              <span v-for="skill in skills" :key="skill" class="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                {{ skill }}
              </span>
            </div>
             <p class="text-sm mt-3 text-gray-500 dark:text-gray-400">
                (And always eager to learn more!)
             </p>
          </div>

           <div>
            <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">My Approach</h3>
            <p class="leading-relaxed">
              I believe in a [mention approach - e.g., user-centric, data-driven, collaborative] approach. Whether it's developing software or analyzing data, my focus is on delivering clean, efficient, and impactful results. I enjoy collaborating with teams to bring ideas to life.
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Replace with your actual skills
const skills = ref([
  'JavaScript', 'Vue.js', 'Node.js', 'Tailwind CSS', 'HTML5', 'CSS3',
  'Python', 'SQL', 'Git', 'Docker', 'Agile Methodologies'
]);

</script>

<style scoped>
/* Add specific styles if needed */

/* Add fade-in-down animation if not in tailwind.config.cjs */
@keyframes fade-in-down {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out forwards;
}

/* Add tilt animation for image border */
@keyframes tilt {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(0.5deg); }
  75% { transform: rotate(-0.5deg); }
}
.animate-tilt {
  animation: tilt 10s infinite linear;
}

/* Re-use fade-in-left/right if not in tailwind config */
@keyframes fade-in-left {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fade-in-right {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}
.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out forwards;
}
.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out forwards;
}
</style>
