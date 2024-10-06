import zod from 'zod';
import { statusCode } from '../statusCode.js';

class AuthUser {
  validateAndRespond(req, res, next) {
    const schema = zod.object({
      name: zod.string().min(1).max(100),
      email: zod.string().email().max(100),
      password: zod.string().min(8).max(255),
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
    next();
  }
}

const authUser = new AuthUser();
export default authUser;
