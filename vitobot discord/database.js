db.list("prefix").then(matches => {});
db.list().then(keys => {});
db.delete("key").then(() => {});
db.get("key").then(value => {});
db.set("key", "value").then(() => {});
const db = new Database()
const Database = require("@replit/database")
