import zod from 'zod';
import { statusCode } from '../statusCode.js';

class AuthAthlete {
  validateAndRespond(req, res, next) {
    const schema = zod.object({
      name: zod.string().min(1).max(100),
      sportId: zod.number().int(),
      paralympic: zod.number().int().min(0).max(1),
      instagramUrl: zod.string().url().min(1).max(1000),
      instagramName: zod.string().min(1).max(1000),
      instagramImageUrl: zod.string().url().min(1).max(1000),
      instagramFollowersCount: zod.number().int().optional(),
      instagramFollowingCount: zod.number().int().optional(),
      instagramPostsCount: zod.number().int().optional(),
      instagramBio: zod.string().min(1).max(1000),
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

const authAthlete = new AuthAthlete();
export default authAthlete;
