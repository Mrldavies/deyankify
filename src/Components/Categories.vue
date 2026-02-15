<script setup>
import { computed } from "vue";
import Products from "@/json/products.json";
import Card from "@/Components/Card.vue";
import Heading from "@/Components/Heading.vue";

const nonUsProducts = computed(() => Products.filter((product) => product.country !== "us"));

const categories = computed(() => {
  const grouped = {};

  nonUsProducts.value.forEach((product) => {
    product.categories.forEach((category) => {
      const { slug, label } = category;

      if (!grouped[slug]) {
        grouped[slug] = {
          label,
          items: [],
        };
      }

      grouped[slug].items.push(product);
    });
  });

  return grouped;
});
</script>

<template>
  <div class="grid xs:grid-cols-2 md:grid-cols-3 xs:gap-3">
    <template v-for="(category, slug) in categories" :key="slug">
      <Card class="p-3">
        <Heading type="h3">{{ category.label }}</Heading>

        <div v-for="product in category.items" :key="product.id" class="mt-2">
          {{ product.name }}
        </div>
      </Card>
    </template>
  </div>
</template>
