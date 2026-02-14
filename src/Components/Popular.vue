<script setup>
import { computed } from "vue";
import Heading from "@/Components/Heading.vue";
import Card from "@/Components/Card.vue";
import AlternativeRow from "@/Components/AlternativeRow.vue";
import Products from "@/json/products.json";
import Mapping from "@/json/mapping.json";

const getRandomMappingsByCategory = () => {
  const mappingsByCategory = {};

  Mapping.forEach((mapping) => {
    const fromProduct = Products.find((p) => p.id === mapping.from);
    if (fromProduct && fromProduct.categories) {
      fromProduct.categories.forEach((category) => {
        if (!mappingsByCategory[category]) {
          mappingsByCategory[category] = [];
        }
        mappingsByCategory[category].push(mapping);
      });
    }
  });

  const randomMappings = [];
  Object.keys(mappingsByCategory).forEach((category) => {
    const categoryMappings = mappingsByCategory[category];
    const randomIndex = Math.floor(Math.random() * categoryMappings.length);
    randomMappings.push(categoryMappings[randomIndex]);
  });

  return randomMappings;
};

const displayMappings = computed(() => {
  const randomMappings = getRandomMappingsByCategory();

  return randomMappings.map((mapping) => {
    const fromProduct = Products.find((p) => p.id === mapping.from);
    const toProduct = Products.find((p) => p.id === mapping.to);

    return {
      from: fromProduct,
      to: toProduct,
    };
  });
});
</script>

<template>
  <Heading type="h2">Popular Deyankifications</Heading>
  <Card class="grid lg:grid-cols-2">
    <AlternativeRow
      v-for="(mapping, index) in displayMappings"
      :key="index"
      :from-product="mapping.from"
      :to-product="mapping.to"
    />
  </Card>
</template>
