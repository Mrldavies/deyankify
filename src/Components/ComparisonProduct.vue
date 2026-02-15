<script setup>
import Flag from "@/Components/Flag.vue";

defineProps({
  product: Object,
});
</script>

<template>
  <div class="flex items-center gap-2 md:gap-3 col-span-3">
    <img class="h-4 xs:h-6 xs:max-w-24" :src="`/assets/${product.id}.svg`" :alt="product.name" />
    <div class="text-xs md:text-base" v-if="product.showName">{{ product.name }}</div>
    <Flag v-if="!product.country == 'us'" :country="product.country" />
  </div>
</template>
