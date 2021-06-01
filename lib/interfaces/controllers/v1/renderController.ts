import path from 'path';
import express, { NextFunction, Request, Response } from 'express';
import GitUseCases from '../../../application/use_cases/gitUseCase';
import { AppContext } from '../../../domain/types/appContext';

export default (appContext: AppContext) => {
  const router = express.Router();

  router.get('/', (_req: Request, res: Response, next: NextFunction) => {
    try {
      const filePath = path.join(__dirname, '..', '..', '..', 'public', 'index.html');
      res.sendFile(filePath);      
    } catch (error) {
      next(error);
    }
  });

  
  return router;
}