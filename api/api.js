const express = require('express');
const cors = require('cors');
const logger = require("./logger")

const diaryRouter = require('./routers/diary');

const api = express();

api.use(cors());
api.use(express.json());
api.use(logger)


api.get("/", (req, res) => {
    res.json({
        title: "diary index",
        description: "diary"
    })
})

api.use("/Entries", diaryRouter)


module.exports = api;
