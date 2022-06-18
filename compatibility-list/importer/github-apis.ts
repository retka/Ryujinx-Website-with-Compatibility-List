import { AuthDetails } from './local-auth-details.js';
import fetch from 'node-fetch';

export default class GitHubApis {
  repo: string = 'Ryujinx/Ryujinx-Games-List';
  authDetails: AuthDetails;

  constructor(authDetails: AuthDetails) {
    this.authDetails = authDetails;
  }

  async getCompatibilityListIssues(issuesPerPage: number = 100, page: number = 1, state: string = 'open'): Promise<any[]> {
    const response = await fetch(`https://api.github.com/repos/${this.repo}/issues?` + new URLSearchParams({
      per_page: issuesPerPage.toString(),
      page: page.toString(),
      state: state
    }),
    {
      headers: {
        Authorization: this.getAuthHeader()
      }
    });

    if (!response.ok) {
      throw new Error(`Get Compatibility List Issues call failed. ${response.status}: ${response.statusText}`);
    }

    return await response.json() as any[];
  }

  async getAllCompatibilityListIssues(issuesPerPage: number = 100, page: number = 1, state: string = 'open'): Promise<any> {
    const issues: any[] = [];

    try {
      let pageIssues: any[] = [];
      do {
        console.log(`Getting page ${page}... ${new Date()}`);
  
        const pageIssuesRaw = await this.getCompatibilityListIssues(issuesPerPage, page, state);
        pageIssues = [];
  
        pageIssuesRaw.forEach(issue => {
          pageIssues.push(this.stripIssue(issue));
        });
  
        issues.push(...pageIssues);
  
        page++;
      } while (pageIssues.length === issuesPerPage);

      console.log(`\nFinished retrieving all issues. ${new Date()}`);
    } catch (err) {
      console.log("\nFailed to retrieve all issues.");
      throw err;
    }

    return issues;
  }

  async gitHubAuthTest() {
    const gitHubAuthResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: this.getAuthHeader()
      }
    });

    if (!gitHubAuthResponse.ok) {
      throw new Error(`GitHub auth test failed. ${gitHubAuthResponse.status}: ${gitHubAuthResponse.statusText}`);
    }
  }

  stripIssue(issue: any): any {
    return {
      url         : issue.url,
      labels_url  : issue.labels_url,
      comments_url: issue.comments_url,
      events_url  : issue.events_url,
      html_url    : issue.html_url,
      id          : issue.id,
      node_id     : issue.node_id,
      number      : issue.number,
      title       : issue.title,
      labels      : issue.labels,
      state       : issue.state,
      comments    : issue.comments,
      created_at  : issue.created_at,
      updated_at  : issue.updated_at,
      body        : issue.body,
      timeline_url: issue.timeline_url
    };
  }

  getAuthHeader(): string {
    return `token ${this.authDetails.gitHub.personalAccessToken}`;
  }
}
