import express, { NextFunction, Request, Response } from 'express';
import GitUseCases from '../../../application/use_cases/gitUseCase';
import { AppContext } from '../../../domain/types/appContext';

export default (appContext: AppContext) => {
  const router = express.Router();
  const gitUseCases = new GitUseCases(appContext);

  router.get('/commits', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { page } = req.query;
      const data = await gitUseCases.getCommits(page as string);
      res.json({
        error: false,
        data: data
      });
    } catch (error) {
      next(error);
    }
  });

  
  return router;
}