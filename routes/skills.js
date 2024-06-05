const express = require('express');
const router = express.Router();
const { createSkill, getSkills, updateSkill, deleteSkill } = require('../controllers/skillController');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

router.post('/', 
  auth,
  [
    check('name', 'Name is required').not().isEmpty(),
    check('level', 'Level is required and must be one of Beginner, Intermediate, Advanced, Expert').isIn(['Beginner', 'Intermediate', 'Advanced', 'Expert'])
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  createSkill
);

router.get('/', auth, getSkills);
router.put('/:id', auth, updateSkill);
router.delete('/:id', auth, deleteSkill);

module.exports = router;
