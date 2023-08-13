<script setup>
defineProps({ msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="bg-black fixed w-full top-0">
      <div class="flex">
        <h1 class="text-2x1 bg-gradient-to-r from-purple-400 via-gray-600 to-purple-400 text-transparent
        bg-clip-text animate-header-gradient bg-1000">{{ msg }}</h1>
          <router-link :to="'/projects/test'" class="text-purple-500">Go to Projects</router-link>
      </div>
    </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
