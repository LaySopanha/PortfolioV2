<template>
  <div class="border rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-105">
    <img v-if="project.imageUrl" :src="project.imageUrl" :alt="project.title" class="w-full h-48 object-cover">
    <div v-else class="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
      No Preview
    </div>

    <div class="p-6">
      <h3 class="text-2xl font-semibold mb-2">{{ project.title }}</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm">{{ project.description }}</p>

      <div class="mb-4">
        <span class="font-semibold text-sm">Tech Stack:</span>
        <div class="flex flex-wrap gap-2 mt-1">
          <span v-for="tech in project.techStack" :key="tech"
                class="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300 text-xs font-medium px-2.5 py-0.5 rounded">
            {{ tech }}
          </span>
        </div>
      </div>

      <div class="flex justify-end space-x-3">
        <a v-if="project.links?.github" :href="project.links.github" target="_blank" rel="noopener noreferrer"
           class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition duration-200">
          GitHub
        </a>
        <a v-if="project.links?.pdf" :href="project.links.pdf" target="_blank" rel="noopener noreferrer"
           class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition duration-200">
          PDF
        </a>
        <a v-if="project.links?.demo" :href="project.links.demo" target="_blank" rel="noopener noreferrer"
           class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition duration-200">
          Demo
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
/* Scoped styles for ProjectCard */
</style>
