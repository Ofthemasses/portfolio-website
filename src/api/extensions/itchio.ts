import { ProjectApi } from "../project-api";
import axios from "axios";

export const ItchioProjects = new class extends ProjectApi {
    async fetchData(): Promise<{Name: String, Link: String, Data: {}}[]> {
        const rawdata = await this.getItchGames(); // Wait for data to be retrieved
        const data: {Name: String, Link: String, Data: {}}[] = [];
        for (let game of rawdata["games"]){
            data.push({
                Name: game["title"],
                Link: game["url"],
                Data: {Image: game["cover_url"]}
            });
        }
        return data;
    }

    async getItchGames(): Promise<any> {
        let url: string = `https://toru.studio/toru-api-handler/itchio/getjson.php`;
        const response = await axios.get(url, {
            responseType: "json"
        });
        return response.data;
    }
    public apiName(): String {
        return "ITCH.IO GAMES";
    }

}