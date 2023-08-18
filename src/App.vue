<script lang="ts" setup>
import PortfolioHeader from './components/PortfolioHeader.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template class="font-martian">
  <header>
      <PortfolioHeader msg="My Portfolio" />

  </header>

  <main class="bg-gray-700 h-screen py-16">
      <router-view></router-view>
  </main>
</template>

<style scoped>
</style>
