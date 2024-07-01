const express = require('express');
const router = express.Router();
const Project = require('../models/Project.js');

// POST a new project
router.post('/', async (req, res) => {
  console.log('POST /api/projects hit');
  const { title, description } = req.body;
  try {
    const newProject = new Project({ title, description });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    console.error('Error creating project:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET projects by user email
router.get('/', async (req, res) => {
  const userEmail = req.query.email;
  console.log('GET /api/projects hit');
  try {
    const projects = await Project.find({ email: userEmail });
    res.json(projects);
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
