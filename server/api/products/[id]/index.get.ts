export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  const res = await $fetch(`https://fakestoreapi.com/products/${id}`);

  return new Response(JSON.stringify(res), {
    headers: {
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=3600 durable',
      'Content-Type': 'application/json',
    },
  });
});