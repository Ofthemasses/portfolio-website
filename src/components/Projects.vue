<template>
    <div class="relative flex items-center h-2/3">
        <img class="filter brightness-[.3] absolute top-0 h-full w-full object-cover" :src="curImage">
            <transition name="fade" mode="out-in">
                <div :key="curImage">
                    <img class="filter brightness-[.3] absolute top-0 h-full w-full object-cover" :src="curImage">
                </div>
            </transition>
        <div class="absolute px-40 text-2xl text-gray-100">Steam Projects</div>
    </div>
    <div class="grid grid-cols-4 gap-5 px-8">
        <a v-for="project in projects" :href="project.Link">
            <div class="bg-black max-w-md rounded overflow-hidden shadow-lg shadow-gray-600">
                <img :src="project.Data.Image" v-if="project.Data.Image">
                <div class="flex items-center h-16 mx-4">
                    <span class="text-lg font-extrabold text-gray-400">{{ project.Name }}</span>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
import { Empty } from '@/api/project-api';
import { SteamProjects } from "@/api/extensions/steam";
import { ItchioProjects } from "@/api/extensions/itchio";

export default {
    name: "Projects",
    data() {
        return {
            projects: [],
            imageIndex: 0
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
        nextSlide() {
            this.imageIndex = (this.imageIndex + 1) % this.imageData.length;
        },
        startSlides() {
            setInterval(this.nextSlide, 4000);
        }
    },
    async mounted() {
        Empty.fetchData().then(this.projects);
        switch (this.projectType) {
            case 'steam':
                this.projects = await SteamProjects.fetchData();
                break;
            case 'itchio':
                this.projects = await ItchioProjects.fetchData();
                break;
        }
        this.startSlides();
    }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
