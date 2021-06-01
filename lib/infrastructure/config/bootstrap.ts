import getRepositories from '../repositories/';
import { AppContext } from '../../domain/types/appContext';
import { getGitRemote } from './utils';

export default {
  async init(): Promise<AppContext> {
    const gitRemote = await getGitRemote();
    const appContext: AppContext = {
      repositories: getRepositories({ gitRemote })
    };

    return appContext;
  }
};
