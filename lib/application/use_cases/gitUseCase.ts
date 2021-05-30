import { AppContext } from "../../domain/types/appContext";


export default class GitUseCases {
  private gitRepository: AppContext['repositories']['gitRepository'];

  constructor(appContext: AppContext) {
    this.gitRepository = appContext.repositories.gitRepository;
  }

  async getCommits(page: string = '1') {
    const commits = await this.gitRepository.getCommits(Number(page));
    return commits;
  }

};