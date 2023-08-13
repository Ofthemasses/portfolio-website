<template>
    <div>
        <h1>TESTING {{ projects.fetchData() }}</h1>
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
    created() {
        switch (this.projectType) {
            case 'steam':
                this.projects = SteamProjects;
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
