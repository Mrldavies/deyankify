<script setup>
import Button from "@/Components/Button.vue";
</script>

<template>
  <header class="container mx-auto p-6">
    <nav class="flex justify-between">
      <div></div>
      <Button text="Suggest an Alternative"></Button>
    </nav>
    <slot></slot>
  </header>
</template>
