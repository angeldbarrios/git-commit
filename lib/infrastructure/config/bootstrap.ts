import dotenv from 'dotenv';
dotenv.config();

import getRepositories from '../repositories/';
import { AppContext } from '../../domain/types/appContext';

export default {
  async init() {
    const appContext: AppContext = {
      repositories: getRepositories()
    };

    return appContext;
  }
};
