import { ProjectApi } from "../project-api";

export const ItchioProjects = new class extends ProjectApi {
    fetchData(): Promise<[{Name: String, Link: String, Data: String}]> {
        return new Promise(r => r([{"Name": "No Projects", "Link": "", "Data": ""}]));
    }

}