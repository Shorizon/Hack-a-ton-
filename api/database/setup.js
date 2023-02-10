const fs = require('fs');
const db = require("./connect")

const sqlSchema = fs.readFileSync('./database/setup.sql').toString();

const setupDB = async () => {
    db.query(sqlSchema)
        .then(data => console.log("Set-up complete."))
        .catch(error => console.log(error));
}


setupDB();
