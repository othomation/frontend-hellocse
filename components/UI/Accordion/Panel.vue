<template>
  <div class="panel container mb-4 rounded-lg border-2 shadow-sm">
    <button
      :aria-controls="'accordion-content-' + ariaTitle"
      :id="'accordion-control-' + ariaTitle"
      @click.prevent="togglePanel"
      class="item-center flex w-full flex-row justify-between border-b-2 p-4 font-semibold"
    >
      {{ title }}
    </button>

    <div
      :aria-hidden="!showPanel"
      :id="'content-' + ariaTitle"
      class="p-4"
      v-if="showPanel"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AccordionItem } from "./types";

const { title } = defineProps<{
  title: AccordionItem["title"];
}>();

const showPanel = ref(false);

// A dumb simple slugify to use it as aria and id
const ariaTitle = title.replace(" ", "-");

const togglePanel = () => (showPanel.value = !showPanel.value);
</script>
