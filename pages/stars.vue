<template>
  <h2 class="text-2xl font-bold">Stars list</h2>

  <p class="font-semibold text-red-500" v-if="error">
    Warning: {{ error.message }}
  </p>
  <div>
    <StarList v-if="stars" :stars="stars" />
    <div v-else>No stars for the moment! Come back later?</div>
  </div>
</template>

<script setup lang="ts">
import { useStars } from "~/composables/api";

useHead({
  title: "Stars's list",
});

const { data, error } = await useStars();

const stars = data.value?.data;

console.log({ stars, error });
</script>
