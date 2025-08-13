import express, { request, response } from "express";

const app = express();

app.get("/api/notes", (request, response) => {
  response.status(200).send("You have accessed the /api/notes api endpoint");
});

app.listen(3000, () => {
  console.log("Server started on port 3000!");
});
