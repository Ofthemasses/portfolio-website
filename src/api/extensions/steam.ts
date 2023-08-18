import { ProjectApi } from "../project-api";
import axios from "axios";

export const SteamProjects = new class extends ProjectApi {
    steamUserId = '76561198138682353'; // The user's SteamID
    steamCollectionId = '3020585581';
    async fetchData(): Promise<{ Name: String, Link: String, Data: {} }[]> {
        const rawdata = await this.getAllWorkshopEntries(); // Wait for data to be retrieved
        const data: {Name: String, Link: String, Data: {}}[] = [];
        for (let file of rawdata["publishedfiledetails"]){
            data.push({
                Name: file["title"],
                Link: `https://steamcommunity.com/sharedfiles/filedetails/?id=${file["publishedfileid"]}`,
                Data: {Image: file["preview_url"]}
            });
        }
        return data;
    }

    private async getAllWorkshopEntries(): Promise<any> {
        let url: string = `https://toru.studio/toru-api-handler/steam/getjson.php` +
            `?user=${this.steamUserId}&collection=${this.steamCollectionId}`;
        const response = await axios.get(url, {
            responseType: "json"
        });
        return response.data.response; // Return the parsed JSON data
    }

    public apiName(): String {
        return "STEAM WORKSHOP";
    }

}