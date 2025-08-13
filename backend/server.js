import express, { request, response } from "express";

const app = express();

app.get("/api/notes", (request, response) => {
  response
    .status(200)
    .send("You have accessed the /api/notes api endpoint with a GET request");
});

app.post("/api/notes", (request, response) => {
  response.status(201).json({
    message:
      "You have accessed the /api/notes api endpoint with a POST request",
  });
});

app.put("/api/notes/:id", (request, response) => {
  response.status(200).json({
    message: "You have accessed the /api/notes api endpoint with a put request",
  });
});

app.post("/api/notes/:id", (request, response) => {
  response.status(201).json({
    message:
      "You have accessed the /api/notes api endpoint with a DELETE request",
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000!");
});
