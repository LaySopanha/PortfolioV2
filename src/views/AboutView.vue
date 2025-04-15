<template>
  <div class="py-16 px-4">
    <h1 class="text-4xl md:text-5xl font-bold mb-10 text-center text-emerald-700 dark:text-emerald-300">About Me</h1>
    <!-- Optional: Add a container for image + text -->
    <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        <!-- Optional Image Placeholder -->
        <!--
        <div class="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-emerald-200 dark:border-emerald-800 mb-6 md:mb-0">
          <img src="/path/to/your/photo.jpg" alt="Your Name" class="w-full h-full object-cover">
        </div>
        -->
        <div class="flex-grow text-lg text-gray-700 dark:text-gray-300 space-y-6 text-center md:text-left">
          <p class="leading-relaxed">
            Hello! I'm <span class="font-semibold">[Your Name]</span>, and this is where you can share a bit about yourself.
            Talk about your background, your passion for technology, specific areas of interest
            (like software engineering, data science, etc.), and what drives you.
          </p>
          <p class="leading-relaxed">
            You can mention your key skills, experiences, or perhaps your educational background.
            Keep it engaging and let visitors get a sense of who you are beyond the projects.
          </p>
          <p class="leading-relaxed">
            Feel free to add more paragraphs or sections as needed to tell your story.
          </p>
        </div>
    </div>
  </div>
</template>

<script setup>
// No specific script needed for this simple about page yet
</script>

<style scoped>
/* Add specific styles for AboutView if needed */
</style>
