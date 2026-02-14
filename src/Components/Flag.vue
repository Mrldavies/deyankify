<script setup>
import { Flag } from "@blade-flags/vue";
import { flatFlags } from "@blade-flags/core/flags/flat";

defineProps({
  country: String,
});
</script>

<template>
  <div class="w-6">
    <Flag :code="country" :flags="flatFlags" />
  </div>
</template>
