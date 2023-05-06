const express = require("express");

// Requiring database connection
const { connection } = require("./config/db");
// Requiring post Routerhere
const PostNoticeRouter = require("./router/Post.Router");

const app = express();

app.use(express.json());


// MAKING HOME ROUTER HERE

app.get('/', async (req, res) => {
  try {
    res.send(`<h1>  WELCOME TO HOME ROUTER  CHIKU</h1>`)

  } catch (error) {
    console.log(error.message)
    res.send(`<h1> ERROR IN HOME ROUTER SORRY  </h1>`)


  }
})
//routers
//Post Notice routes
app.use("/", PostNoticeRouter)

// connection to server on port 8080

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`app listening on port ${process.env.port}`);
  } catch (error) {
    console.log({ error: `error in connections with port: ${error.message}` });
  }
});
