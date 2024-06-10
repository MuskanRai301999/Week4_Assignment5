import { Router } from 'express';
import { startShiftController, endShiftController } from '../controllers/shiftController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.post('/start', authenticate, startShiftController);
router.post('/end', authenticate, endShiftController);

export default router;
