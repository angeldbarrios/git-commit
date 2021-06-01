import GitHubRepository from './network/GitHubRepository';
import { Repositories } from '../../domain/types/appContext';

export default ({ gitRemote }) => {
  const repositories: Repositories = {
    gitRepository: new GitHubRepository(gitRemote),
  };

  return repositories;
};
