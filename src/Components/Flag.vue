<script setup>
defineProps({
  country: String,
});
</script>

<template>
  <img
    v-if="country"
    :src="`/assets/${country}.svg`"
    alt=""
    class="object-contain w-4 xs:w-6 border-1 border-steel"
    loading="lazy"
  />
</template>
