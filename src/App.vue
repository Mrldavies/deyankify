<script setup>
import SiteHeader from "@/Components/Header.vue";
import Tagline from "@/Components/Tagline.vue";
import Definition from "@/Components/Definition.vue";
</script>

<template>
  <SiteHeader>
    <nav></nav>
    <Tagline />
    <Definition />
    <About />
  </SiteHeader>
  <main class="max-w-6xl mx-auto px-6">
    <RouterView />
  </main>
</template>
