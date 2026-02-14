<script setup>
import Flag from "@/Components/Flag.vue";

const props = defineProps({
  fromProduct: {
    type: Object,
    required: true,
  },
  toProduct: {
    type: Object,
    required: true,
  },
});

const getLogoPath = (productId) => {
  return `/assets/${productId}.svg`;
};
</script>

<template>
  <a
    class="p-2 md:p-3 flex items-center border-b border-r border-steel bg-white hover:bg-azure cursor-pointer transition-color duration-300 ease-linear"
    href="#"
  >
    <div class="flex justify-between gap-8 flex-1 items-center pr-8">
      <div class="flex items-center gap-3 min-w[150px]">
        <img
          class="h-6 max-w-24"
          :src="getLogoPath(fromProduct.id)"
          :alt="`${fromProduct.name} Logo`"
        />
        <div class="text-xs md:text-base" v-if="fromProduct.showName">{{ fromProduct.name }}</div>
      </div>
      <div><img class="w-8" src="/assets/r-arrow.svg" alt="" /></div>
      <div class="flex items-center gap-3">
        <img
          class="h-6 max-w-24"
          :src="getLogoPath(toProduct.id)"
          :alt="`${toProduct.name} Logo`"
        />
        <div class="text-xs md:text-base" v-if="toProduct.showName">{{ toProduct.name }}</div>
        <Flag :country="toProduct.country" />
      </div>
    </div>
    <div><img class="w-6" src="/assets/r-chevron.svg" alt="" /></div>
  </a>
</template>
