let Diary = require("../models/diary.js");


async function index(req, res) {
    try {
        const entry = await Diary.getAll();
        res.status(200).json(entry);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

module.exports = {
    index
}
