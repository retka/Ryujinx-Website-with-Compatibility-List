import LocalAuthDetails from './local-auth-details.js';
import GitHubApis from './github-apis.js';
import { writeFileSync } from 'fs';

main();

export async function main() {
  const localAuthDetails = new LocalAuthDetails();
  await localAuthDetails.initialize();

  const gitHubApis = new GitHubApis(localAuthDetails.authDetails);
  await gitHubApis.gitHubAuthTest();

  const issues = await gitHubApis.getAllCompatibilityListIssues();

  console.log("Number of issues found: ", issues.length);
  
  writeFileSync('scraped-issues.json', JSON.stringify(issues, null, 2));
}
