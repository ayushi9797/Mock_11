const mongoose = require("mongoose")
const PostNoticeSchema = new mongoose.Schema({
    Author_Name: String,
    Notice_Title: String,
    Notice_Description: String,
    Date: Date
})

const PostNoticeModel = mongoose.model("PostNotices", PostNoticeSchema)

module.exports = PostNoticeModel