<template>
  <div
    class="flex m-2 gap-2 items-center shadow-md bg-green-50 w-1/4 flex-grow rounded"
  >
    <img src="https://via.placeholder.com/150" :alt="post.title" />
    <router-link :to="{ name: 'Post', params: { id: post.id } }">
      {{ post.title }}
    </router-link>
  </div>
</template>
<script setup>
const props = defineProps({
  post: Object,
});
const post = { ...props.post };
</script>
