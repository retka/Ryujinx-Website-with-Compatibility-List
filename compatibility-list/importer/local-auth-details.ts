import { readFileSync } from 'fs';

export interface AuthDetails {
  gitHub: {
    personalAccessToken: string
  },
  aws: {
    profile: string
  }
}

export default class LocalAuthDetails {
  authDetails: AuthDetails;

  constructor() { }

  initialize(): void {
    const readFileResult = readFileSync('../auth.json').toString();
    this.authDetails = JSON.parse(readFileResult);
  }
}