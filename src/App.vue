<script lang="ts" setup>
import PortfolioHeader from './components/PortfolioHeader.vue'
</script>

<template>
  <header>
      <PortfolioHeader msg="Portfolio" />
  </header>

  <main class="py-16 h-screen">
      <router-view :key="$route.fullPath"></router-view>
  </main>
</template>