import fetch from 'node-fetch';

export default class IssueScraper {
    constructor() { }

    async getAll(): Promise<void> {
        const issues: any[] = [];

        let page = 1;
        let issuesPerPage = 100;

        let issuesFound: number;
        do {
            console.log(`Getting page ${page}...`);
            const response = await fetch('https://api.github.com/repos/Ryujinx/Ryujinx-Games-List/issues?' + new URLSearchParams({
                page: page.toString(),
                per_page: issuesPerPage.toString(),
                state: 'open'
            }));

            const resJson = await response.json() as any[];
            issuesFound = resJson.length;
            try {
                issues.push(...resJson);
            } catch (err) {
                console.log("ERr: ", err);
                console.log("resJson: ", resJson);
            }
            page++;
        } while(issuesFound === issuesPerPage)

        console.log("issues.length: ", issues.length);
    };
}
