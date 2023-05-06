const express = require("express")

// requiring postNotice schema here
const PostNoticeModel = require("../models/Post.Notice")

const app = express()

// making postNotice router here
const PostNoticeRouter = express.Router()
PostNoticeRouter.use(express.json())

// Performing all the crud operations here for viewing notice , make notice , updating notice and deleting the notices

// !  Users should be able to post notices ....

// Creating notices
PostNoticeRouter.post("/create", async (req, res) => {

    //  post data in request body

    let post = req.body
    console.log(post)
    try {

        // taking data from schema 
        let data = new PostNoticeModel(post)
        // saving in mongodb database
        await data.save()
        // checking the status of data
        console.log(data)
        console.log({ message: "SUCCESSFULLY CREATED THE NOTICE  THANK YOU SO MUCH " })
        // sending the notification of creation notice data successfully
        res.status(201).send({ data, message: "SUCCESSFULLY CREATED THE NOTICE" })


    } catch (error) {

        console.log({ error: error.module, error: error.message })
        // sending error  the notification of creation notice data
        res.status(404).send({ error: `ERROR IN CREATING THE  the POST NOTICE SORRY : ${error.message}` })

    }
})


// ! users can then view....

// GETTING ALL THE NOTICE PIST DATA

PostNoticeRouter.get("/get", async (req, res) => {

    try {

        //   taking data from schema
        let post = await PostNoticeModel.find();
        console.log(post)
        console.log({ message: "SUCCESSFULLY GETTING THE NOTICE  THANK YOU SO MUCH " })
        // sending the notification of creation notice data successfully
        res.status(201).send({ post, message: "HERE YOU CAN GET ALL YOUR NOTICE POST THANKS FOR VISITING PLEASE COME AGAIN" })


    } catch (error) {

        console.log({ error: error.module, error: error.message })
        // sending error  the notification of creation notice data
        res.status(404).send({ error: `ERROR IN GETTING THE  the POST NOTICE SORRY : ${error.message}` })

    }
})

//!  Users should be able to Update notices ....

PostNoticeRouter.patch("/update/:id", async (req, res) => {
    const id = req.params.id
    console.log(id)
    const post = req.body
    console.log(post)
    try {

        //   taking data from schema
        let data = await PostNoticeModel.findByIdAndUpdate(id, post);
        console.log(data)
        console.log({ message: "SUCCESSFULLY UPDATING  THE NOTICE  THANK YOU SO MUCH " })
        // sending the notification of creation notice data successfully
        res.status(200).send({ post, message: "SUCCESSFULLY UPDATING  THE NOTICE POST THANKS FOR VISITING PLEASE COME AGAIN" })


    } catch (error) {

        console.log({ error: error.module, error: error.message })
        // sending error  the notification of creation notice data
        res.status(404).send({ error: `ERROR IN UPDATING THE  the POST NOTICE SORRY : ${error.message}` })

    }
})


// !Users should be able to DELETE notices ....

PostNoticeRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    console.log(id)

    try {

        //   taking data from schema
        let post = await PostNoticeModel.findByIdAndDelete(id);
        console.log(post)
        console.log({ message: "SUCCESSFULLY DELETING  THE NOTICE  THANK YOU SO MUCH " })
        // sending the notification of creation notice data successfully
        res.status(202).send({ post, message: " DELETE  YOUR NOTICE POST THANKS FOR VISITING PLEASE COME AGAIN" })


    } catch (error) {

        console.log({ error: error.module, error: error.message })
        // sending error  the notification of creation notice data
        res.status(404).send({ error: `ERROR IN DELETING THE  the POST NOTICE SORRY : ${error.message}` })

    }
})






module.exports = PostNoticeRouter