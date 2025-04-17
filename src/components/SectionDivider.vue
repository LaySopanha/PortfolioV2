<template>
  <div class="relative h-16 md:h-24 lg:h-32 overflow-hidden" aria-hidden="true">
    <svg
      class="absolute bottom-0 left-0 w-full h-full text-white/10"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      fill="currentColor"
    >
      <polygon points="0,100 100,0 100,100" />
    </svg>
  </div>
</template>

<script setup>
// No script logic needed for this simple component
</script>

<style scoped>
/* Add any specific styles if needed, but Tailwind classes handle most */
/* Ensure the divider sits correctly relative to sections */
div {
  /* Negative margin can help overlap sections slightly if needed, adjust carefully */
  /* margin-top: -1px; */
  /* margin-bottom: -1px; */
  pointer-events: none; /* Make sure it doesn't interfere with clicks/scroll */
}
</style>
