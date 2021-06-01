import { AppContext } from '../../domain/types/appContext';

export default class GitUseCases {
  private gitRepository: AppContext['repositories']['gitRepository'];

  constructor(appContext: AppContext) {
    this.gitRepository = appContext.repositories.gitRepository;
  }

  async getCommits(page: number | string = 1): Promise<unknown> {
    page = Number(page);
    if (!page) {
      const error = new Error('Invalid page value');
      error.name = 'BAD_DATA';
      throw error;
    }

    const commits = await this.gitRepository.getCommits(Number(page));
    return commits;
  }
}
