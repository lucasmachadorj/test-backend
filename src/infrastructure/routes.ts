import { VerifyEligibility } from '@/use-case/verify-eligibility/verify-eligibility.usecase';
import { Router } from 'express';

const router = Router();

router.get('/eligibility', (req, res) => {
  const { body } = req;
  try {
    const response = VerifyEligibility.execute(body);
    res.status(200).json(response);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
      return;
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});
