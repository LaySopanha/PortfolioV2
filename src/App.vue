<script setup>
// Removed RouterView import
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import AchievementsSection from './components/AchievementsSection.vue' // Import Achievements
import ExperiencesSection from './components/ExperiencesSection.vue' // Import Experiences
import ContactSection from './components/ContactSection.vue'
import Highlight from './components/HighlightsSection.vue'
// Removed SectionDivider import
</script>

<template>
  <div id="app-container" class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <NavBar />
    <main>
      <HeroSection />
      
      <AboutSection />
      
      <AchievementsSection />

      <Highlight />
      
      <ExperiencesSection />
      
      <ProjectsSection />
      
      <ContactSection />
    </main>
    <FooterBar />
  </div>
</template>

<style>
/* Global styles can go here or in main.css */
/* Ensure smooth scrolling behavior is enabled */
html {
  scroll-behavior: smooth;
}
</style>
