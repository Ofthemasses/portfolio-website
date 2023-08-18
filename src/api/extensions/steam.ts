import { ProjectApi } from "../project-api";
export const SteamProjects = new class extends ProjectApi {
    apiKey = '723A0A5271B73F6D0B2B17A1B342ADCA';
    steamUserId = 'ofthemasses'; // The user's SteamID
    itemsPerPage = 100; // Number of items per page (maximum allowed by Steam API)
    fetchData(): Promise<[{Name: String, Link: String, Data: String}]> {
        this.getAllWorkshopEntries();
        return new Promise(function(resolve, reject) {
            resolve( [{"Name": "No Projects", "Link": "", "Data": ""}]);
            reject("BRUH");
        });
    }
    private async getAllWorkshopEntries() {
        let page = 1;
        let allEntries: any[] = [];
        while (true) {
            const startItem = (page - 1) * this.itemsPerPage;
            const apiUrl = `https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/
            ?key=${this.apiKey}&steamid=${this.steamUserId}&startindex=${startItem}&pagesize=${this.itemsPerPage}`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data.response && data.response.publishedfiledetails) {
                    const workshopEntries = data.response.publishedfiledetails;
                    if (workshopEntries.length === 0) {
                        // No more entries to retrieve
                        break;
                    }
                    allEntries = allEntries.concat(workshopEntries);
                    page++;
                } else {
                    console.error('Error retrieving workshop entries.');
                    break;
                }
            } catch (error) {
                console.error('An error occurred:', error);
                break;
            }
        }
        console.log('All workshop entries:', allEntries);
    }

}