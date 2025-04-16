<template>
  <!-- Enhanced card styling: subtle border, gradient background on image placeholder, improved shadow -->
  <div class="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl bg-white dark:bg-gray-800 transition-all duration-300 hover:-translate-y-1 flex flex-col group"> <!-- Added group class -->
    <div class="relative h-48 sm:h-56 w-full overflow-hidden">
       <img v-if="project.imageUrl" :src="project.imageUrl" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
       <!-- Improved placeholder -->
       <div v-else class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
           <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
         </svg>
       </div>
    </div>

    <div class="p-5 sm:p-6 flex flex-col flex-grow"> <!-- Added flex-grow -->
      <h3 class="text-xl sm:text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{{ project.title }}</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base flex-grow">{{ project.description }}</p> <!-- Added flex-grow -->

      <div class="mb-5">
        <span class="font-semibold text-sm text-gray-700 dark:text-gray-300">Tech Stack:</span>
        <div class="flex flex-wrap gap-2 mt-2">
          <span v-for="tech in project.techStack" :key="tech"
                class="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-xs font-medium px-2.5 py-1 rounded-md">
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Improved link styling -->
      <div class="flex justify-end space-x-4 border-t border-gray-200 dark:border-gray-700 pt-4 mt-auto"> <!-- Added mt-auto -->
        <a v-if="project.links?.github" :href="project.links.github" target="_blank" rel="noopener noreferrer" title="View on GitHub"
           class="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition duration-200 transform hover:scale-110">
           <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
        </a>
        <a v-if="project.links?.pdf" :href="project.links.pdf" target="_blank" rel="noopener noreferrer" title="View PDF"
           class="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition duration-200 transform hover:scale-110">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
        </a>
        <a v-if="project.links?.demo" :href="project.links.demo" target="_blank" rel="noopener noreferrer" title="View Demo"
           class="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition duration-200 transform hover:scale-110">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
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
