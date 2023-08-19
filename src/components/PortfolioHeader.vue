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
          <h1 class="text-4xl text-gray-200">{{ msg }}</h1>
        </a>
        <div class="text-white ml-auto px-6">
          <router-link :to="'/projects/github'" class="pl-6">GitHub</router-link>
          <router-link :to="'/projects/steam'" class="pl-6">Steam</router-link>
          <router-link :to="'/projects/itchio'" class="pl-6">Itch.io</router-link>
      </div>
    </div>
    </div>
</template>

