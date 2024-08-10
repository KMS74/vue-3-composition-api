<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
<script setup>
// vue
import { onMounted } from "vue";
// components
import PostCard from "../components/PostCard.vue";
// composables
import useResource from "../composables/useResource";

const { items: posts, fetchAll: fetchPosts } = useResource("posts");

onMounted(() => {
  console.log("Home page mounted");
  fetchPosts();
});
</script>
