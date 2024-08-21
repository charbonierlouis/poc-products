export default defineEventHandler(async (event) => {
  const res = await $fetch<{
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  }>('https://fakestoreapi.com/products');

  return new Response(JSON.stringify(res), {
    headers: {
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=3600 durable',
      'Content-Type': 'application/json',
    },
  });
});
