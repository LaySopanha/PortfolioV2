<template>
  <canvas
    ref="canvasRef"
    class="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
  ></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let ctx = null
let animationFrameId = null
const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 } // Restore mouse tracking
let time = 0 // Restore time variable

// --- Canvas & Context Setup ---
const setupCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  ctx = canvas.getContext('2d')
  resizeCanvas()
}

const resizeCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas || !ctx) return
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  // Optional: Redraw immediately on resize if needed
  // draw(); 
}

// --- Mouse Tracking ---
const handleMouseMove = (event) => { // Restore mouse handler
  mouse.x = event.clientX
  mouse.y = event.clientY
}

// --- Animation Loop ---
const animate = () => {
  time += 0.01 // Restore time increment
  draw()
  animationFrameId = requestAnimationFrame(animate)
}

// --- Drawing Logic ---
const draw = () => {
  if (!ctx || !canvasRef.value) return
  const canvas = canvasRef.value
  const width = canvas.width
  const height = canvas.height

  // Clear canvas
  ctx.clearRect(0, 0, width, height)

  // Set drawing properties for space theme
  ctx.strokeStyle = 'rgba(0, 245, 255, 0.4)' // Use space-light color (cyan) with some transparency
  ctx.lineWidth = 1.5; // Slightly thinner line

  // --- Sine Wave Drawing (Restored) ---
  const amplitude = 50 + (mouse.y / height) * 100 // Amplitude changes with mouse Y
  const frequency = 0.01
  const speed = time * 5 // Wave moves over time

  ctx.beginPath()
  for (let x = 0; x < width; x++) {
    const y = height / 2 + amplitude * Math.sin(x * frequency + speed + (mouse.x / width) * Math.PI) // Phase shifts with mouse X
    if (x === 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
  }
  ctx.stroke()

  // Add more drawing logic here for other patterns if desired
}

// --- Lifecycle Hooks ---
onMounted(() => {
  setupCanvas()
  window.addEventListener('resize', resizeCanvas)
  window.addEventListener('mousemove', handleMouseMove) // Restore mouse listener
  animate() // Start the animation loop
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)
  window.removeEventListener('mousemove', handleMouseMove) // Restore mouse listener
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId) // Stop the animation loop
  }
})
</script>

<style scoped>
/* Add any component-specific styles here if needed */
canvas {
  /* Ensure canvas doesn't interfere with selecting text/elements */
  user-select: none;
}
</style>
