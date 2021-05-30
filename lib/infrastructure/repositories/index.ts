import GitHubRepository from './network/GitHubRepository';
import { Repositories } from '../../domain/types/appContext';

export default () => {
  const repositories: Repositories = {
    gitRepository: new GitHubRepository()
  };

  return repositories;
}
