<template>
  <div class="relative flex justify-center items-center">
    <h1 class="max-md:text-3xl text-5xl mt-8 mb-2 text-gray-100">BE(Hons) Resources</h1>
  </div>
  <div class="bg-gray-200 m-8 max-w rounded shadow-lg py-2">
    <div class="px-8 py-4 grid grid-cols-4">
      <h4 class="font-semibold col-span-3">File:</h4><h4 class="font-semibold col-span-1">Size:</h4>
    </div>
    <div v-for="(file, index) in files" :key="index">
      <a :href="file.url" download>
        <div class="hover:bg-gray-300 hover:rounded px-8 py-4 grid grid-cols-4 border-t-2 border-gray-300">
          <h4 class="text-xs md:text-base col-span-3">{{ file.name }}</h4>
          <h4 class="text-xs md:text-base col-span-1">{{ file.size }}</h4>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import uniFileManifest from '../manifests/uniFileManifest.json';

  export default {
    data() {
      return {
        files: uniFileManifest
      }
    },
  }
</script>
