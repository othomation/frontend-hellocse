<template>
  <div>
    <UIAccordionPanel v-for="item of items" :title="item.title">
      <UIAccordionContent :item="item" />
    </UIAccordionPanel>
  </div>
</template>

<script setup lang="ts">
import type { AccordionItems } from "./types";

defineProps<{
  items: AccordionItems;
}>();
</script>
