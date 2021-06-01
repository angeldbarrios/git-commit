import { expect } from 'chai';
import sinon from 'sinon';
import axios from 'axios';

import GitHubRepository from './GitHubRepository';
import { gitHubRepositoryData, finalCommitsData, gitRemote } from '../../../../test/test-data.spec';

const commitsData = finalCommitsData;

describe('GitHubRepository', function () {
  let gitHubRepository: GitHubRepository;
  let axiosGetStub: sinon.SinonStub;

  beforeEach(function () {
    gitHubRepository = new GitHubRepository(gitRemote);
    axiosGetStub = sinon.stub(axios, 'get');
  });

  afterEach(function () {
    axiosGetStub.restore();
  });

  it('should return the commits object array with needed keys', async function () {
    axiosGetStub.returns(
      Promise.resolve({
        data: gitHubRepositoryData,
        status: 200,
      }),
    );

    const commits = await gitHubRepository.getCommits();
    expect(commits).to.be.eql(commitsData);
    expect(axiosGetStub.callCount).to.be.eq(1);
  });

  it('should resolve empty array when axios.get() response is empty array', async function () {
    axiosGetStub.returns(
      Promise.resolve({
        data: [],
        status: 200,
      }),
    );

    const commits = await gitHubRepository.getCommits(2);
    expect(commits).to.be.eql([]);
    expect(axiosGetStub.callCount).to.be.eq(1);
  });

  it('should reject when axios.get().data is not an array', async function () {
    axiosGetStub.returns(
      Promise.resolve({
        data: {},
        status: 200,
      }),
    );

    await expect(gitHubRepository.getCommits(5)).to.be.rejected;
    expect(axiosGetStub.callCount).to.be.eq(1);
  });

  [1, 2, 3].forEach((page) => {
    it(`should call axios.get() with { params: { page: ${page} as } } as second argunment`, async function () {
      axiosGetStub.returns(
        Promise.resolve({
          data: gitHubRepositoryData,
          status: 200,
        }),
      );

      await gitHubRepository.getCommits(page);
      expect(axiosGetStub.callCount).to.be.eq(1);
      expect(axiosGetStub.getCall(0).args[1]).to.be.eql({
        params: { page: page },
      });
    });
  });
});
