<template>
    <div class="grid grid-cols-4 gap-5">
        <a v-for="project in projects" :href="project['Link']">
            <div class="bg-black max-w-md rounded overflow-hidden shadow-lg shadow-gray-600">
                <img :src="project['Data']['Image']" v-if="project['Data']['Image']">
                <div class="flex items-center h-16 mx-4">
                    <span class="text-lg font-extrabold text-gray-400">{{ project['Name'] }}</span>
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
            projects: Empty
        };
    },
    computed: {
        projectType() {
            return this.$route.params.projectType;
        }
    },
    async mounted() {
        switch (this.projectType) {
            case 'steam':
                this.projects = await SteamProjects.fetchData();
                break;
            case 'itchio':
                this.projects = ItchioProjects;
                break;
        }
    }
};
</script>

<style scoped>

</style>
