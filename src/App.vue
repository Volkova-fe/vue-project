<template>
  <navbar></navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  components: { Navbar }
}
</script>

<style>
* {
  margin: 0 auto;
  padding: 0;
  max-width: 1440px;
  width: 100%;
  min-width: 300px;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>