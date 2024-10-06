import zod from 'zod';
import { statusCode } from '../statusCode.js';

class AuthSport {
  validateAndRespond(req, res, next) {
    const schema = zod.object({
      name: zod.string().min(1).max(50),
      code: zod.string().min(1).max(500),
      paralympic: zod.number().min(1).max(1),
    });

    const data = req.body;
    const validation = schema.safeParse(data);

    if (!validation.success) {
      return res.status(statusCode.BAD_REQUEST).json({
        message: 'Validation error',
        errors: validation.error.errors.map(err => ({
          field: err.path[0],
          message: err.message,
        })),
      });
    }
    next()
  }
}

const authSport = new AuthSport();
export default authSport;
