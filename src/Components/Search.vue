<script setup>
import Card from "@/Components/Card.vue";
</script>

<template>
  <Card class="p-3">
    <div class="relative flex gap-4 items-center">
      <img class="absolute h-full p-1" alt="" src="/assets/search.svg" />
      <input
        type="search"
        class="border-1 border-steel h-10 pl-10 p-2 rounded-md focus:ring-steel placeholder-text-slate text-slate w-full"
        placeholder="Search tools..."
      />
      <button>Filters</button>
    </div>
  </Card>
</template>
