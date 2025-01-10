<script setup>
defineProps({ msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="bg-black max-md:absolute md:fixed w-full z-50">
      <div class="flex items-center max-md:justify-center md:h-16 px-4">
        <a href="/#">
          <h1 class="text-4xl text-gray-100">{{ msg }}</h1>
        </a>
        <div class="max-md:hidden text-gray-100 ml-auto px-6">
          <router-link :to="'/open-fpga-console'" class="ml-6">Open FPGA Console</router-link>
          <router-link :to="'/vim-ventures'" class="ml-6">VimVentures</router-link>
          <router-link :to="'/projects/github'" class="ml-6">GitHub</router-link>
          <router-link :to="'/projects/steam'" class="ml-6">Steam</router-link>
          <router-link :to="'/projects/itchio'" class="pl-6">Itch.io</router-link>
        </div>
      </div>
      <div class="md:hidden flex flex-col align-top items-center text-gray-100">
        <router-link :to="'/open-fpga-console'" class="my-1 pb-1 border-gray-900 border-y-2 w-full text-center">Open FPGA Console</router-link>
        <router-link :to="'/vim-ventures'" class="my-1 pb-1 border-gray-900 border-b-2 w-full text-center">VimVentures</router-link>
        <router-link :to="'/projects/github'" class="my-1 pb-1 border-gray-900 border-b-2 w-full text-center">GitHub</router-link>
        <router-link :to="'/projects/steam'" class="my-1 pb-1 border-gray-900 border-b-2 w-full text-center">Steam</router-link>
        <router-link :to="'/projects/itchio'" class="my-1 pb-1 w-full text-center">Itch.io</router-link>
      </div>
    </div>
</template>

