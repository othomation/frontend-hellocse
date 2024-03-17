<template>
  <UIAccordionMain :items="items" />
</template>

<script setup lang="ts">
import type { StarEntity } from "~/types/entities.types";
const props = defineProps<{ stars: StarEntity[] }>();
const {
  public: { API_BASE_URL },
} = useRuntimeConfig();

const items = computed(() => {
  return props.stars.map((star) => ({
    id: star.id,
    title: `${star.firstname} ${star.lastname}`,
    content: star.description,
    imageData: {
      url: `${API_BASE_URL}${star.image}`,
      alt: `Picture of ${star.firstname} ${star.lastname}`,
    },
  }));
});
</script>
