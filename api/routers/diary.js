const { Router } = require('express');
const api = require('../api')

const diaryController = require('../controllers/diary.js');

const diaryRouter = Router()

diaryRouter.get("/", diaryController.index)

module.exports = diaryRouter;
