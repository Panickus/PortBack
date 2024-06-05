const express = require('express');
const router = express.Router();
const { createTestimonial, getTestimonials, updateTestimonial, deleteTestimonial } = require('../controllers/testimonialController');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

router.post('/', 
  auth,
  [
    check('name', 'Name is required').not().isEmpty(),
    check('position', 'Position is required').not().isEmpty(),
    check('company', 'Company is required').not().isEmpty(),
    check('testimonial', 'Testimonial is required').not().isEmpty()
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  createTestimonial
);

router.get('/', auth, getTestimonials);
router.put('/:id', auth, updateTestimonial);
router.delete('/:id', auth, deleteTestimonial);

module.exports = router;
