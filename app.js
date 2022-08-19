const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
require("dotenv").config();
const connectDB = require("./db/connect");
const notFoundRoute = require("./middleware/not-found");
//middleware
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Hello world");
});

app.use("/api/v1/tasks", tasks);
app.use(notFoundRoute);
// app.get("/api/v1/tasks") - get all the tasks
// app.post("/api/v1/tasks") - create a new task
// app.get("/api/v1/tasks/:id") - get single  task
// app.patch("/api/v1/tasks/:id") - update task
// app.delete("/api/v1/tasks/:id") - delete tasks

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
