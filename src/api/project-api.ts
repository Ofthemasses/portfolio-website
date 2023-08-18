    export abstract class ProjectApi {
        abstract fetchData(): Promise<[
            {
                Name: String,
                Link: String,
                Data: String}
        ]>
    }

    export const Empty: ProjectApi = new class extends ProjectApi {
        fetchData(): Promise<[{Name: String, Link: String, Data: String}]> {
            return new Promise(r => r([{"Name": "No Projects", "Link": "", "Data": ""}]));
        }
    }