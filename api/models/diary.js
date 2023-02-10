const db = require("../database/connect")
class Diary {


    constructor({ diary_id, diary_name, diary_content, diary_timestamp }) {

        this.id = diary_id,
            this.name = diary_name,
            this.content = diary_content,
            this.timestamp = diary_timestamp
    }


    static async getAll() {
        const response = await db.query("SELECT * FROM diary ORDER BY diary_id;");
        if (response.rows.length < 1)
            return ({
                error: true,
                messsage: "unable to locate any entries"
            })

        return response.rows.map(e => new Diary(e));
    }


}

module.exports = Diary;
