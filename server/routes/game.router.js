const express = require('express');
const gameController = require('../controllers/game.controller');
const router = express.Router();

router.post('/join', gameController.joinGame);
router.post('/start', gameController.startGame);
router.post('/marco', gameController.notifyMarco);
router.post('/polo', gameController.notifyPolo);
router.post('/select-polo', gameController.selectPolo);
router.post('/end-round', gameController.endRound);
router.post('/reset', gameController.resetGame);

module.exports = router;