import express from 'express';
import { AppContext } from '../../domain/types/appContext';
import v1Controller from '../../interfaces/controllers/v1/v1Loader';

export default (appContext: AppContext) => {
  const app = express.Router();
  app.use('/v1', v1Controller(appContext));
  return app;
};
