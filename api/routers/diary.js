const { Router } = require('express');
const api = require('../api')

const diaryController = require('../controllers/diary.js');

const diaryRouter = Router()

diaryRouter.get("/", diaryController.index)
diaryRouter.get("/last", diaryController.getTop)
diaryRouter.get("/:id", diaryController.getOne)
diaryRouter.post("/", diaryController.create)
module.exports = diaryRouter;
