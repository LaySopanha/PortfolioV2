<template>
  <section
    id="projects"
    v-intersect
    class="py-20 px-4 transition-colors duration-300 overflow-hidden" 
  >
    <div class="container mx-auto">
 
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-white motion-safe:animate-fade-in-down">My Projects</h2> 

      <!-- Category Filter Tabs -->
      <div class="flex justify-center space-x-2 sm:space-x-3 mb-12 flex-wrap gap-y-3 motion-safe:animate-fade-in">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out transform hover:scale-105',
            selectedCategory === category
              ? 'bg-emerald-600 text-white shadow-lg ring-2 ring-offset-2 ring-emerald-500 ring-offset-space-dark' // Adjusted ring offset
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600 shadow-sm hover:shadow-md' // Use permanent dark theme styles
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Project Grid with Transition -->
      <transition-group
        tag="div"
        name="project-list"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
      >
        <!-- ProjectCard component usage remains the same, but we'll update its internal styles next -->
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          class="project-list-item motion-safe:animate-fade-in"
        />
      </transition-group>

      <!-- Styled "No projects" message -->
      <transition name="fade">
        <div v-if="filteredProjects.length === 0" class="text-center text-gray-400 mt-16 py-10 border-2 border-dashed border-gray-700 rounded-lg bg-gray-800/80 backdrop-blur-sm shadow-sm">
          <p class="text-xl font-medium">No projects found in this category yet.</p>
          <p class="mt-2">Check back later or select another category!</p>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects as allProjects, categories } from '@/data/projects.js'
import ProjectCard from '@/components/ProjectCard.vue'

const selectedCategory = ref('All')

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return allProjects
  }
  return allProjects.filter(project => project.category === selectedCategory.value)
})
</script>

<style scoped>
/* Project list transitions (same as before) */
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.5s ease;
}
.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.project-list-leave-active {
  position: absolute;
  width: calc((100% / 3) - (2 * 2.5rem * 2 / 3)); /* lg: 3 cols, gap-10 (2.5rem) */
}
@media (max-width: 1024px) and (min-width: 768px) { /* md: 2 cols, gap-8 (2rem) */
  .project-list-leave-active {
     width: calc((100% / 2) - (1 * 2rem * 1 / 2));
  }
}
@media (max-width: 767px) { /* sm: 1 col */
  .project-list-leave-active {
    width: 100%;
  }
}
.project-list-move {
  transition: transform 0.5s ease;
}

/* Simple fade for the 'No projects' message */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Re-add fade-in animations if not in tailwind config */
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
