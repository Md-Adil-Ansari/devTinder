const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/user");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const data = req.body;
  try {
    const user = new User(data);
    await user.save();
    res.send("User saved succesfully");
  } catch {
    (err) => {
      res.status(400).send("User is not saved try after some time");
    };
  }
});

app.get("/users", async (req, res) => {
  try {
    const data = await User.find({});
    if (data.length === 0) res.send("No user found...");
    else res.send(data);
  } catch {
    (err) => {
      res.status(400).send("Something went wrong while finding the users...");
    };
  }
});

connectDB()
  .then(() => {
    console.log("database is connected...");
    app.listen(3000, () => {
      console.log("server is listening on the port 3000 ...");
    });
  })
  .catch((err) => {
    console.error("Something went wrong");
  });
