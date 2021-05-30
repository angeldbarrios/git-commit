
import url from 'url';
import axios from 'axios';
import IGitRepository from "../../../domain/repositories/IGitRepository";
import { GitRemote } from '../../types';

export default class GitHubRepository implements IGitRepository {
  private baseUrl: string;

  constructor(gitRemote: GitRemote) {
    const repoUrl = new url.URL('https://api.github.com/');
    repoUrl.pathname = `repos/${gitRemote.gitUsername}/${gitRemote.gitRepository}`;
    this.baseUrl = url.format(repoUrl);
  }

  async getCommits(page: number = 1) {
    const commitUrl = `${this.baseUrl}/commits`;
    const response = await axios.get(commitUrl, {
      params: { page: page }
    });

    const data = response.data;
    if(!Array.isArray(data)) {
      throw new Error('Not expected input - Github');
    }

    const commitsData = data.map(commit => {
      return {
        sha: commit.sha,
        author: commit.commit.author,
        message: commit.commit.message,
        url: commit.commit.url,
      };
    });

    return commitsData;
  }
}