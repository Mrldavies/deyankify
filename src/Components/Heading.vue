<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "h2",
    validator: (value) => ["h1", "h2", "h3", "h4", "h5"].includes(value),
  },
});

const classes = computed(() => {
  switch (props.type) {
    case "h1":
      return "text-4xl font-bold tracking-tight";
    case "h3":
      return "text-xl font-bold";
    case "h4":
      return "text-xl font-medium";
    case "h5":
      return "text-lg font-medium";
    default:
      return "text-2xl font-bold";
  }
});
</script>

<template>
  <component :is="type" :class="classes" class="text-slate mb-2">
    <slot></slot>
  </component>
</template>
