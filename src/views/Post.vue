<template>
  <div v-if="post && user">
    <button class="mb-2" @click="goBack">&larr; back</button>
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
// imports
import { onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import useResource from "../composables/useResource";
// composables
const route = useRoute();
const router = useRouter();

const goBack = () => router.back();

const { item: post, fetchOne: fetchPost } = useResource("posts");
const { item: user, fetchOne: fetchUser } = useResource("users");

// runs when component is mounted and fetches post
// with id from route params (route.params.id)
// fetchPost(1);

// means that the function will be executed when the component is mounted (the component is rendered and visible in the DOM)
onMounted(() => {
  fetchPost(route.params?.id);
});

watch(
  () => ({ ...post.value }),
  () => fetchUser(post.value.userId)
);
</script>
