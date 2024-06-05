const Certification = require('../models/Certification');

const createCertification = async (req, res) => {
  try {
    const certification = new Certification(req.body);
    await certification.save();
    res.status(201).json(certification);
  } catch (error) {
    res.status(400).json({ error: 'Error creating certification', details: error.message });
  }
};

const getCertifications = async (req, res) => {
  try {
    const certifications = await Certification.find({});
    res.status(200).json(certifications);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching certifications', details: error.message });
  }
};

const updateCertification = async (req, res) => {
  try {
    const certification = await Certification.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!certification) {
      return res.status(404).json({ error: 'Certification not found' });
    }
    res.json(certification);
  } catch (error) {
    res.status(400).json({ error: 'Error updating certification', details: error.message });
  }
};

const deleteCertification = async (req, res) => {
  try {
    const certification = await Certification.findByIdAndDelete(req.params.id);
    if (!certification) {
      return res.status(404).json({ error: 'Certification not found' });
    }
    res.json(certification);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting certification', details: error.message });
  }
};

module.exports = {
  createCertification,
  getCertifications,
  updateCertification,
  deleteCertification
};
