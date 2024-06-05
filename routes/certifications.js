const express = require('express');
const router = express.Router();
const { createCertification, getCertifications, updateCertification, deleteCertification } = require('../controllers/certificationController');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

router.post('/', 
  auth,
  [
    check('title', 'Title is required').not().isEmpty(),
    check('organization', 'Organization is required').not().isEmpty(),
    check('date', 'Date is required').isISO8601()
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  createCertification
);

router.get('/', auth, getCertifications);
router.put('/:id', auth, updateCertification);
router.delete('/:id', auth, deleteCertification);

module.exports = router;
