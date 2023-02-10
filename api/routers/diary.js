const { Router } = require('express');
const api = require('../api')

const diaryController = require('../controllers/diary.js');

const diaryRouter = Router()

diaryRouter.get("/", diaryController.index)
diaryRouter.get("/last", diaryController.getTop)
diaryRouter.get("/:id", diaryController.getOne)
diaryRouter.post("/", diaryController.create)
diaryRouter.delete("/:id", diaryController.destroy)
diaryRouter.patch("/:id", diaryController.update)
module.exports = diaryRouter;
