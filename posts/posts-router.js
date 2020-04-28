const express = require("express")
const db = require("../data/config")

const router = express.Router({
    mergeParams: true
})

module.exports = router


/////////////// GET ///////////////

router.get("/", async (req, res, next) => {
    try{
        const posts = await db("posts").where("user_id", req.params.id)
        res.json(posts)
    } catch (err) {
        next(err)
    }
})


/////////////// POST ///////////////




/////////////// PUT ///////////////



/////////////// DELETE ///////////////

