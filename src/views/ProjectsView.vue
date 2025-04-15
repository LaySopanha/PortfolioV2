<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8 text-center">My Projects</h1>

    <!-- Category Filter Tabs -->
    <div class="flex justify-center space-x-2 sm:space-x-4 mb-10 flex-wrap gap-y-2">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
        :class="[
          'px-4 py-2 rounded-md text-sm sm:text-base font-medium transition duration-200',
          selectedCategory === category
            ? 'bg-emerald-600 text-white shadow-md'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
        ]"
      >
        {{ category }}
      </button>
    </div>

    <!-- Project Grid with Transition -->
    <!-- Note: Requires custom CSS for fade/list transitions -->
    <transition-group
      tag="div"
      name="project-list"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
        class="project-list-item"
      />
    </transition-group>

    <!-- Styled "No projects" message -->
    <div v-if="filteredProjects.length === 0" class="text-center text-gray-500 dark:text-gray-400 mt-16 py-8 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
      No projects found in this category.
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects as allProjects, categories } from '@/data/projects.js' // Import project data and categories
import ProjectCard from '@/components/ProjectCard.vue' // Import the card component

const selectedCategory = ref('All') // Default to showing all projects

// Computed property to filter projects based on the selected category
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return allProjects
  }
  return allProjects.filter(project => project.category === selectedCategory.value)
})
</script>

<style scoped>
/* Scoped styles for ProjectsView */

/* Transition styles for project list */
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.5s ease;
}
.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* Ensure leaving items absolute positioned for layout calculation */
.project-list-leave-active {
  position: absolute;
  width: calc((100% / 3) - (2 * 1rem * 2 / 3)); /* Adjust based on grid cols and gap */
}
/* Adjust width for medium screens */
@media (max-width: 1024px) and (min-width: 768px) {
  .project-list-leave-active {
    width: calc((100% / 2) - (1 * 2rem * 1 / 2));
  }
}
/* Adjust width for small screens */
@media (max-width: 767px) {
  .project-list-leave-active {
    width: 100%;
  }
}

/* Move transition for smooth reflow */
.project-list-move {
  transition: transform 0.5s ease;
}
</style>
