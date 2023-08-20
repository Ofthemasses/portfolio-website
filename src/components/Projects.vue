<template>
    <transition name="fade-loader" mode="out-in">
      <div v-if="loading" :key="loading" class="bg-black fixed top-0 flex items-center justify-center z-20 w-screen h-screen">
        <span class="text-9xl text-gray-200 animate-pulse">Ⲗ</span>
      </div>
    </transition>
    <div class="relative flex items-center h-2/3 overflow-hidden z-10">
        <div class="absolute px-40 text-5xl text-gray-100 font-light">{{ api.apiName() }}</div>
    </div>
    <div class="-z-10">
      <img v-if="imageData.length == 0" class="transform scale-110 filter brightness-[.3] h-full fixed top-0 overflow-hidden w-full object-cover" :src="defaultImage">
      <img class="filter brightness-[.3] h-full fixed top-0 overflow-hidden w-full object-cover" :src="curImage">
        <transition name="fade" mode="out-in">
            <div :key="curImage">
                <img class="filter brightness-[.3] h-full fixed top-0 w-full object-cover" :src="curImage">
            </div>
        </transition>
    </div>
    <div v-if="api.apiName() != Empty().apiName()" class="relative grid grid-cols-4 gap-5 px-8 py-8 bg-gradient-to-t from-gray-900 to-transparent">
        <a v-for="project in projects" :href="project.Link">
            <div class="bg-gray-900 max-w-md rounded overflow-hidden shadow-lg shadow-gray-800">
                <img class="m-auto" :src="project.Data.Image" v-if="project.Data.Image">
                <div class="bg-black flex items-center h-16 px-4">
                    <span class="text-lg font-extrabold text-gray-400">{{ project.Name }}</span>
                </div>
              <div  v-if="project.Data.Description" class="bg-black h-64 pl-4 pr-8">
                <span class="text-md font-medium text-gray-400">
                  {{ project.Data.Description }}
                </span>
              </div>
            </div>
        </a>
    </div>
</template>

<script>
import { Empty } from '@/api/project-api';
import { SteamProjects } from "@/api/extensions/steam";
import { ItchioProjects } from "@/api/extensions/itchio";
import { GithubProjects } from "@/api/extensions/github";

export default {
    name: "Projects",
    data() {
        return {
            api: Empty,
            projects: [],
            imageIndex: 0,
            defaultImage: "src/assets/DalleBackground.png",
            loading: true
        };
    },
    computed: {
        projectType() {
            return this.$route.params.projectType;
        },
        imageData() {
            return this.projects.filter(p => p.Data.Image).map(p => p.Data.Image);
        },
        curImage(){
            return this.imageData[this.imageIndex];
        }
    },
    methods: {
      Empty() {
        return Empty
      },
      nextSlide() {
        this.imageIndex = (this.imageIndex + 1) % this.imageData.length;
      },
      startSlides() {
        setInterval(this.nextSlide, 4000);
      }
    },
    async mounted() {
        switch (this.projectType) {
            case 'steam':
                this.api = SteamProjects;
                break;
            case 'itchio':
                this.api = ItchioProjects;
                break;
            case 'github':
                this.api = GithubProjects;
                break;
        }
        this.projects = await this.api.fetchData()
        this.startSlides();
        this.loading = false;
    }
};
</script>

<style scoped>
.fade-loader-enter-active, .fade-loader-leave-active {
  transition: opacity .5s;
}
.fade-loader-enter, .fade-loader-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
