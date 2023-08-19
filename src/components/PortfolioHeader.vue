<script setup>
defineProps({ msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="bg-black fixed w-full z-50">
      <div class="flex items-center h-16 px-4">
        <a href="/#">
          <h1 class="text-4xl font-semibold hover:bg-gradient-to-r hover:from-purple-400 hover:via-gray-300 hover:to-purple-400 text-transparent
          bg-clip-text bg-gray-300 animate-header-gradient bg-1000">{{ msg }}</h1>
        </a>
          <router-link :to="'/projects/test'" class="text-purple-500 ml-auto">Go to Projects</router-link>
      </div>
    </div>
</template>

