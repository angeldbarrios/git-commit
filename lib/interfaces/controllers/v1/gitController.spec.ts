import { expect } from 'chai';
import sinon from 'sinon';
import request from 'supertest';

import bootstrap from '../../../infrastructure/config/bootstrap';
import * as utils from '../../../infrastructure/config/utils';
import axios from 'axios';
import logger from '../../../infrastructure/webserver/logger';

import App from '../../../infrastructure/webserver/express-app';
import { AppContext } from '../../../domain/types/appContext';
import { gitRemote, gitHubRepositoryData, finalCommitsData } from '../../../../test/test-data.spec';
import { Express } from 'express';

describe('GET /commits - GitController', function () {
  let app: Express;
  let appContext: AppContext;
  let axiosGetStub: sinon.SinonStub;

  before(async function () {
    sinon.stub(logger); // to avoid loggings in case of errors
    // mocking to avoid using child process
    sinon.stub(utils, 'getGitRemote').returns(Promise.resolve(gitRemote));
    appContext = await bootstrap.init();
    app = App(appContext);
  });

  after(function () {
    sinon.restore();
  });

  beforeEach(function () {
    axiosGetStub = sinon.stub(axios, 'get');
  });

  afterEach(function () {
    axiosGetStub.restore();
  });

  // starting the tests
  it('should return commits and have all needed keys', function (done) {
    axiosGetStub.returns(Promise.resolve({ data: gitHubRepositoryData }));
    request(app)
      .get('/api/v1/git/commits')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, function (err, res) {
        if (err) return done(err);
        expect(res.body).to.be.eql({
          error: false,
          data: finalCommitsData,
        });

        done();
      });
  });

  it('should returns 400 status code when passing wrong page param', function (done) {
    axiosGetStub.returns(Promise.resolve({ data: gitHubRepositoryData }));
    request(app)
      .get('/api/v1/git/commits')
      .query({ page: 'invalid_page' })
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, function (err, res) {
        if (err) return done(err);
        expect(res.body).to.be.eql({
          error: true,
          message: 'Invalid page value',
        });
        done();
      });
  });

  it('should return empty array as data if there are not commits', function (done) {
    axiosGetStub.returns(Promise.resolve({ data: [] }));
    request(app)
      .get('/api/v1/git/commits')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, function (err, res) {
        if (err) return done(err);
        expect(res.body).to.be.eql({
          error: false,
          data: [],
        });

        done();
      });
  });

  it('should returns 500 status code when there is some error getting data', function (done) {
    axiosGetStub.throws(new Error('Intentional error'));
    request(app)
      .get('/api/v1/git/commits')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(500, function (err, _res) {
        if (err) return done(err);
        done();
      });
  });
});
