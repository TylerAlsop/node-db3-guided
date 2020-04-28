const express = require("express")
const db = require("../data/config")

const router = express.Router({
    mergeParams: true
})

module.exports = router


/////////////// GET ///////////////

router.get("/", async (req, res, next) => {
    try{
        const posts = await db("posts as p")
        .leftJoin("users as u", "u.id", "p.user_id")
        .where("user_id", req.params.id)
        .select("p.id", "u.username", "p.contents")

        res.json(posts)
    } catch (err) {
        next(err)
    }
})


/////////////// POST ///////////////




/////////////// PUT ///////////////



/////////////// DELETE ///////////////

