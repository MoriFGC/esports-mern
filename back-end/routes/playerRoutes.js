import express, { Router } from 'express';
import Player from '../models/Player.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const {page = 1, limit = 10} = req.query;
        const players = await Player.find()
         .limit(limit)
         .skip((page - 1) * limit)

         const count = await Player.countDocuments();

         res.json({
            players,
            currentPage: page,
            totalPages: Math.ceil(count / limit)
         })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

router.post('/', async (req, res) => {
    const player = new Player(req.body);

    try {
        const newPlayer = await player.save();
        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});

export default router;