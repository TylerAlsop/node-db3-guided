const db = require("../data/config")

function findByUserId(userId) {
    return db("posts as p")
    .leftJoin("users as u", "u.id", "p.user_id")
    .where("user_id", userId)
    .select("p.id", "u.username", "p.contents")
}

module.exports = {
    findByUserId,
}