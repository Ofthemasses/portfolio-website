    export abstract class ProjectApi {
        abstract fetchData(): Promise<
            {
                Name: String,
                Link: String,
                Data: {}
            }[]>
    }

    export const Empty: ProjectApi = new class extends ProjectApi {
        fetchData(): Promise<{Name: String, Link: String, Data: {}}[]> {
            return new Promise(r => [{"Name": "No Projects", "Link": "", "Data": {"":""}}]);
        }
    }