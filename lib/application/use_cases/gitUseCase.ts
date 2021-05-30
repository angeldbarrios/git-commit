import { AppContext } from "../../domain/types/appContext";


export default class GitUseCases {
  private gitRepository: AppContext['repositories']['gitRepository'];

  constructor(appContext: AppContext) {
    this.gitRepository = appContext.repositories.gitRepository;
  }

  async getCommits() {
    const commits = await this.gitRepository.getCommits();
    return commits;
  }

};