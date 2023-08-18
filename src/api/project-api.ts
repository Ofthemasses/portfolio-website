    export abstract class ProjectApi {
        public abstract fetchData(): Promise<
            {
                Name: String,
                Link: String,
                Data: {}
            }[]>
        public abstract apiName(): String;
    }

    export const Empty: ProjectApi = new class extends ProjectApi {
        apiName(): String {
            return "NO PROJECTS HERE";
        }
        public fetchData(): Promise<{Name: String, Link: String, Data: {}}[]> {
            return new Promise(() => [{"Name": "", "Link": "", "Data": {"":""}}]);
        }
    }