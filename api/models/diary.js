const db = require("../database/connect")
class Diary {


    constructor({ diary_id, diary_name, diary_content, diary_timestamp }) {

        this.id = diary_id,
            this.name = diary_name,
            this.content = diary_content,
            this.timestamp = diary_timestamp
    }


    static async getAll() {
        const response = await db.query("SELECT * FROM diary ORDER BY diary_id DESC;");
        if (response.rows.length < 1)
            return ({
                error: true,
                messsage: "unable to locate any entries"
            })

        return response.rows.map(e => new Diary(e));
    }

    static async getLatest() {
        const response = await db.query("SELECT * FROM diary ORDER BY diary_id DESC LIMIT 1;");
        if (response.rows.length < 1)
            return ({
                error: true,
                messsage: "unable to locate any entries"
            })

        return response.rows.map(e => new Diary(e));
    }

    static async getOneById(id) {

        if (!id || typeof id != "number") return ({
            error: true,
            messsage: "missing or wrong type of ID for the entries"
        })

        const response = await db.query("SELECT * FROM diary WHERE diary_id = $1;", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate entry.")
        }
        return new Diary(response.rows[0]);
    }

    static async getOneById(id) {

        if (!id || typeof id != "number") return ({
            error: true,
            messsage: "missing or wrong type of ID for the entries"
        })

        const response = await db.query("SELECT * FROM diary WHERE diary_id = $1;", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate entry.")
        }
        return new Diary(response.rows[0]);
    }


    static async destroy() {

        if (!this.id) return ({
            error: true,
            message: "the required information is missing"
        })

        const response = await db.query('DELETE  FROM diary WHERE diary_id = $1 RETURNING *;', [this.id]);

        return new Diary(response.rows[0]);
    }

    static async create(data) {
        const { name, content, category } = data
        const check = await db.query("SELECT * FROM diary WHERE diary_name = $1;", [name]);

        if (!name || !content || !category)
            return ({
                error: true,
                message: "name/content/category fields are all required to store a new entry"
            })

        if (check.diary_name == name)
            return ({
                error: true,
                message: "diary entry with this namealready exists"
            })


        const response = await db.query('INSERT INTO diary (diary_name, diary_content, diary_category) VALUES ($1, $2, $3) RETURNING *;', [name, content, category]);
        return response.rows.map(e => new Diary(e))
    }
}

module.exports = Diary;
