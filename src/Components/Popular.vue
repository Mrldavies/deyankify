<script setup>
import { computed } from "vue";
import Heading from "@/Components/Heading.vue";
import Card from "@/Components/Card.vue";
import AlternativeRow from "@/Components/AlternativeRow.vue";
import Products from "@/json/products.json";
import Mapping from "@/json/mapping.json";

const productById = Object.fromEntries(Products.map((p) => [p.id, p]));

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const displayMappings = computed(() => {
  const mappingsByCategory = {};

  for (const mapping of Mapping) {
    const fromProduct = productById[mapping.from];
    if (!fromProduct?.categories) continue;

    for (const category of fromProduct.categories) {
      const { slug, label } = category;

      if (!mappingsByCategory[slug]) {
        mappingsByCategory[slug] = {
          label,
          mappings: [],
        };
      }

      mappingsByCategory[slug].mappings.push(mapping);
    }
  }

  const result = Object.values(mappingsByCategory).map((categoryGroup) => {
    const randomMapping =
      categoryGroup.mappings[Math.floor(Math.random() * categoryGroup.mappings.length)];

    return {
      category: categoryGroup.label,
      from: productById[randomMapping.from],
      to: productById[randomMapping.to],
    };
  });

  return shuffle(result);
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
