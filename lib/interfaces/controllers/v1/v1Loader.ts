
import express from 'express';
import { AppContext } from '../../../domain/types/appContext';
import gitController from './gitController';

export default (appContext: AppContext) =>  {
  const router = express.Router();
  router.use('/git', gitController(appContext))

  return router;
}
