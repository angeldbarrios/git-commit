import { execFile } from 'child_process';
import url from 'url';
import path from 'path';
import { GitRemote } from '../types';

export function getGitRemote (): Promise<GitRemote> {
  return new Promise(function (resolve, reject) {
    execFile('git', ['remote', 'get-url', '--all', 'origin'], (err, stdout, stderr) => {
      if(err) {
        reject(err);
        return;
      }

      if(stderr) {
        const error = new Error(stderr);
        reject(error);
        return;
      }

      const repoUrl = new url.URL(stdout);
      if(repoUrl.host !== 'github.com') {
        const error = new Error('Only Github supported');
        reject(error);
        return;
      }

      /* eslint-disable prefer-const*/
      let [, gitUsername, gitRepository ] = repoUrl.pathname.split('/');
      // remove .git from repo name
      gitRepository = path.parse(gitRepository).name;
      
      resolve({ gitUsername, gitRepository });
    });
  });
}

