import { ProjectApi } from "../project-api";
import axios from "axios";

export const GithubProjects = new class extends ProjectApi {
    async fetchData(): Promise<{Name: String, Link: String, Data: {}}[]> {
        const rawdata = await this.getGitHubRepos(); // Wait for data to be retrieved
        const data: {Name: String, Link: String, Data: {}}[] = [];
        for (let repo of rawdata){
            data.push({
                Name: repo["name"],
                Link: repo["html_url"],
                Data: {"" : ""}
            });
        }
        return data;
    }

    async getGitHubRepos(): Promise<any> {
        let url: string = `https://api.github.com/users/Ofthemasses/repos`;
        const response = await axios.get(url, {
            responseType: "json"
        });
        return response.data;
    }
    public apiName(): String {
        return "GITHUB REPOSITORIES";
    }

}