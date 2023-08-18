<script setup>
defineProps({ msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="bg-black fixed w-full z-10">
      <div class="flex items-center h-16 px-4">
        <h1 class="text-4xl font-semibold bg-gradient-to-r from-purple-400 via-gray-600 to-purple-400 text-transparent
        bg-clip-text animate-header-gradient bg-1000">{{ msg }}</h1>
          <router-link :to="'/projects/test'" class="text-purple-500 ml-auto">Go to Projects</router-link>
      </div>
    </div>
</template>

