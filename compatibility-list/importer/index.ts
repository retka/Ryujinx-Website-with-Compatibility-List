import IssueScraper from './issue-scraper.js';

main();

export async function main() {
    const issueScraper = new IssueScraper();
    await issueScraper.getAll();
}
