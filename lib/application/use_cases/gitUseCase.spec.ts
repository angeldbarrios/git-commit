import chai, { expect } from 'chai';
import sinon from 'sinon';

import chaiAsPromise from 'chai-as-promised';
chai.use(chaiAsPromise);

import { AppContext } from '../../domain/types/appContext';
import GitUseCases from './gitUseCase';
import { finalCommitsData } from '../../../test/test-data.spec';

const commitsData = finalCommitsData;

describe('Git Use Cases', function () {
  let gitUseCases: GitUseCases;
  let appContext: AppContext;
  let getCommitsStub: sinon.SinonStub;

  beforeEach(function () {
    // Defining fake context to inject   
    appContext = {
      repositories: {
        gitRepository: new (class {
          async getCommits() { return; }
        })
      }
    };

    // Defining spy on getCommits
    getCommitsStub = sinon.stub(
      appContext.repositories.gitRepository,
      'getCommits'
    );

    gitUseCases = new GitUseCases(appContext);
  });


  afterEach(function () {
    getCommitsStub.restore();
  });


  it('should return commits and have all needed keys', async function () {
    getCommitsStub.returns(Promise.resolve(commitsData));
    const commits = await gitUseCases.getCommits();
    expect(commits).to.be.an('array');
    expect(commits[0]).to.have.keys('sha', 'author', 'message', 'url');
    expect(getCommitsStub.callCount).to.be.eq(1);
    expect(getCommitsStub.getCall(0).firstArg).to.be.eql(1);
  });


  it('should resolve if parsable num is passed', async function () {
    getCommitsStub.returns(Promise.resolve(commitsData));
    await expect(gitUseCases.getCommits('2')).to.be.fulfilled;
    expect(getCommitsStub.callCount).to.be.eq(1);
    expect(getCommitsStub.getCall(0).firstArg).to.be.eql(2);
  });


  it('should reject if a not parsable num is passed', async function () {
    getCommitsStub.returns(Promise.resolve(commitsData));
    await expect(gitUseCases.getCommits('no_numeric')).to.be.rejected;
    expect(getCommitsStub.callCount).to.be.eq(0);
  });


  it('should reject if getCommits() func rejects', async function () {
    getCommitsStub.returns(Promise.reject(new Error()));
    await expect(gitUseCases.getCommits(3)).to.be.rejected;
    expect(getCommitsStub.callCount).to.be.eq(1);
    expect(getCommitsStub.getCall(0).firstArg).to.be.eql(3);
  });
});