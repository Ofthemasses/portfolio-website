<script lang="ts" setup>
import PortfolioHeader from './components/PortfolioHeader.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
      <PortfolioHeader msg="My Portfolio" />

  </header>

  <main class="py-16 h-screen">
      <router-view></router-view>
  </main>
</template>