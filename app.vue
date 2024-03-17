<template>
  <Navbar />
  <main class="h-full">
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: "Stars",
  bodyAttrs: {
    class: "bg-gray-100"
  }
})</script>