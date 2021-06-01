import path from 'path';
import express, { NextFunction, Request, Response } from 'express';

export default (): express.Router => {
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
};
