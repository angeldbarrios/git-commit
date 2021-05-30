import { AppContext } from "../../domain/types/appContext";


export default class GitUseCases {
  private gitRepository: AppContext['repositories']['gitRepository'];

  constructor(appContext: AppContext) {
    this.gitRepository = appContext.repositories.gitRepository;
  }

  async getCommits() {
    const data = await this.gitRepository.getCommits();
    return data;
  }

};