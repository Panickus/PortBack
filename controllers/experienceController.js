const Experience = require('../models/Experience');

const createExperience = async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).send(experience);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find({});
    res.status(200).send(experiences);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createExperience, getExperiences };
