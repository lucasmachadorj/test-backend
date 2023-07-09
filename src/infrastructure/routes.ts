import { Router } from 'express';

import { VerifyEligibility } from '@/application/verify-eligibility/verify-eligibility.usecase';

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
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

router.get('/healthcheck', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

export default router;
