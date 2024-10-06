import zod from 'zod';
import { statusCode } from '../statusCode.js';

class AuthId {
  validateAndRespond(req, res, next) {
    const schema = zod.object({
      id: zod.string().regex(/^\d+$/).transform(Number), 
    });

    const validation = schema.safeParse(req.params);

    if (!validation.success) {
      return res.status(statusCode.BAD_REQUEST).json({
        message: 'Invalid ID',
        errors: validation.error.errors.map(err => ({
          field: err.path[0],
          message: err.message,
        })),
      });
    }

    req.params.id = validation.data.id;
    
    next();
  }
}

const authId = new AuthId();
export default authId;
