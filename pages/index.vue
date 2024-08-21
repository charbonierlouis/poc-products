<script setup lang="ts">
const { data } = await useAsyncData('products', () =>
  $fetch<
    {
      id: number;
      title: string;
    }[]
  >('https://fakestoreapi.com/products')
);
</script>

<template>
<section class="grid grid-cols-3 gap-5">
  <article v-for="product in data" :key="product.id" class="p-5 shadow-md">
    <NuxtLink :to="`/p/${product.id}`" prefetch>
      <h2>{{ product.title }}</h2>
    </NuxtLink>
  </article>
</section>
</template>