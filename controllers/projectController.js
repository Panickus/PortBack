const Project = require('../models/Project');

const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).send(project);
  } catch (error) {
    res.status(400).send({ error: 'Error creating project', details: error.message });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).send(projects);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching projects', details: error.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!project) {
      return res.status(404).send({ error: 'Project not found' });
    }
    res.send(project);
  } catch (error) {
    res.status(400).send({ error: 'Error updating project', details: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).send({ error: 'Project not found' });
    }
    res.send(project);
  } catch (error) {
    res.status(500).send({ error: 'Error deleting project', details: error.message });
  }
};

module.exports = {
  createProject,
  getProjects,
  updateProject,
  deleteProject
};
