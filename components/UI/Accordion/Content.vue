<template>
  <div>
    <img :src="item.imageData.url" :alt="item.imageData.alt" class="w-52" />
    <div>
      <p v-for="content of item.content" class="leading-8">{{ content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AccordionItem } from "./types";

defineProps<{
  item: AccordionItem;
}>();
</script>
