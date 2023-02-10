let Diary = require("../models/diary.js");


async function index(req, res) {
    try {
        const entry = await Diary.getAll();
        res.status(200).json(entry);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}
async function getTop(req, res) {
    try {
        const entry = await Diary.getLatest();
        res.status(200).json(entry);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function getOne(req, res) {
    try {
        const id = parseInt(req.params.id);
        const entry = await Diary.getOneById(id);
        res.status(200).json(entry);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function getCategory(req, res) {
    try {
        const category = req.params.category;
        const entry = await Diary.getCategory(category);
        res.status(200).json(entry);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function create(req, res) {
    const data = req.body
    try {
        const entry = await Diary.create(data);
        res.json(entry);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function destroy(req, res) {
    try {
        const id = parseInt(req.params.id);
        const entry = await Diary.getOneById(id);
        if (entry) {
            const result = await Diary.destroy(id);
            res.status(204).json(result);
        } else {
            res.status(404).json({ error: "id not found" })
        }
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

async function update(req, res) {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const entry = await Diary.getOneById(id);
        Diary.id = id;
        const result = await Diary.update(data);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ "error": err.message })
    }
}

module.exports = {
    index, getTop, getOne, create, destroy, update, getCategory
}
