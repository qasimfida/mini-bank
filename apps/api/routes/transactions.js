import express from 'express';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Placeholder routes
router.get('/', authenticateToken, (req, res) => {
  res.json({ message: 'Transactions endpoint' });
});

export default router;
