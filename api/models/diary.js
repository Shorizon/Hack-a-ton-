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

    static async getCategory(category) {

        if (!category) return ({
            error: true,
            messsage: "missing or wrong type of category for the entries"
        })

        const response = await db.query("SELECT * FROM diary WHERE diary_category = $1;", [category]);
        if (response.rows.length < 0) {
            throw new Error("Unable to locate entry.")
        }
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


    static async destroy(id) {

        if (!id) return ({
            error: true,
            message: "the required information is missing"
        })

        console.log(id)
        const response = await db.query('DELETE FROM diary WHERE diary_id = $1 RETURNING *;', [id]);
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


    static async update(data) {

        if (!data || !this.id || !data.content) return ({
            error: true,
            message: "the required information is missing"
        })

        const response = await db.query("UPDATE diary SET diary_content = $1 WHERE diary_id = $2 RETURNING *;",
            [data.content, this.id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to update entry.")
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

}

module.exports = Diary;
