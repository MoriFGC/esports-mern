import express, { Router } from 'express';
import Team from '../models/Team.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const teams = await Team.find()

         res.json({
            teams
         })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

router.post('/', async (req, res) => {
    const team = new Team(req.body);

    try {
        const newTeam = await team.save();
        res.status(201).json(newTeam);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});

export default router;