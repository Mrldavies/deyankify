<script setup>
import ComparisonProduct from "@/Components/ComparisonProduct.vue";

defineProps({
  fromProduct: {
    type: Object,
    required: true,
  },
  toProduct: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <a
    class="p-2 md:p-3 flex items-center border-b border-r border-steel bg-white hover:bg-azure cursor-pointer transition-color duration-300 ease-linear"
    href="#"
  >
    <div class="flex justify-between xs:grid xs:grid-cols-8 gap-2 sm:gap-8 items-center w-full">
      <ComparisonProduct :product="fromProduct" />
      <img class="w-4 xs:w-8 flex-none" src="/assets/r-arrow.svg" alt="" />
      <ComparisonProduct :product="toProduct" :flag="true" />
      <div class="flex justify-end">
        <img class="w-4 xs:w-6" src="/assets/r-chevron.svg" alt="" />
      </div>
    </div>
  </a>
</template>
