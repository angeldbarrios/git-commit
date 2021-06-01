import getRepositories from '../repositories/';
import { AppContext } from '../../domain/types/appContext';
import { getGitRemote } from './utils';

export default {
  async init() {
    const gitRemote = await getGitRemote();
    const appContext: AppContext = {
      repositories: getRepositories({ gitRemote })
    };

    return appContext;
  }
};
