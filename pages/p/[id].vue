<script setup lang="ts">
const { params: { id } } = useRoute();

const { data } = await useAsyncData('product', () =>
  $fetch<{
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  }>(`https://fakestoreapi.com/products/${id}`)
);
</script>

<template>
  <div v-if="data">
    <h1>{{ data.title }}</h1>
    <p>{{ data.description }}</p>
    <p>{{ data.price }}</p>
    <img :src="data.image" alt="Product image" />
  </div>
</template>