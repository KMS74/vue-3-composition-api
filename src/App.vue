<template>
  <nav class="p-5 bg-green-400 text-white mb-10 text-2xl text-center">
    <router-link :to="{ name: 'Home' }">Snazzy Fake Blog 🚀</router-link>
  </nav>
  <div class="container">
    <router-view></router-view>
    <Loader v-if="isLoading" />
  </div>
</template>

<script setup>
import usePageRequests from "./composables/usePageRequests";
import Loader from "./components/Loader.vue";
 const {isLoading} = usePageRequests();
</script>
<style lang="css">
.container {
  max-width: 960px;
  margin: 0 auto;
}
</style>
