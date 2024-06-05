const express = require('express');
const router = express.Router();
const { createExperience, getExperiences } = require('../controllers/experienceController');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

// Crear una nueva experiencia
router.post('/experience', 
  auth,
  [
    check('title', 'Title is required').not().isEmpty(),
    check('company', 'Company is required').not().isEmpty(),
    check('startDate', 'Start date is required').isISO8601()
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  createExperience
);

router.get('/experience', getExperiences);

module.exports = router;
