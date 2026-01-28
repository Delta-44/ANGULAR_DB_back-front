import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';

export const validate =
  (schema: ZodSchema, where: 'body' | 'query' | 'params' = 'body') =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = schema.parse(req[where]);
      // Solo reemplazamos body, query y params son read-only en Express 5
      if (where === 'body') {
        req.body = parsed;
      }
      // Para query y params, la validación es suficiente
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          message: 'Validation error',
          errors: err.issues.map(i => ({
            path: i.path.join('.'),
            message: i.message
          }))
        });
      }
      next(err);
    }
  };