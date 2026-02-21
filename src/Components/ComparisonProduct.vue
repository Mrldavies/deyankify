<script setup>
import Flag from "@/Components/Flag.vue";

defineProps({
  product: Object,
  flag: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="flex items-center gap-2 md:gap-3 col-span-3">
    <div class="h-6 w-6 flex items-center justify-center">
      <img
        class="max-h-full max-w-full object-contain"
        :src="`/assets/${product.id}.svg`"
        :alt="product.name"
      />
    </div>
    <div class="text-xs md:text-base" v-if="product.showName">{{ product.name }}</div>
    <Flag v-if="flag" :country="product.country" />
  </div>
</template>
