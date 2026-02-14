<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <button
    class="text-slate bg-azure hover:bg-steel px-3 py-2 rounded-md border-steel border-2 cursor-pointer transition-color duration-300 ease-linear"
  >
    {{ text }}
  </button>
</template>
