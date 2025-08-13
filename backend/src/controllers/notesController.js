export const getAllNotes = (request, response) => {
  response
    .status(200)
    .send("You have accessed the /api/notes api endpoint with a GET request");
};

export const createNote = (request, response) => {
  response.status(201).json({
    message:
      "You have accessed the /api/notes api endpoint with a POST request",
  });
};

export const updateNoteByID = (request, response) => {
  response.status(200).json({
    message: "You have accessed the /api/notes api endpoint with a put request",
  });
};

export const deleteNoteByID = (request, response) => {
  response.status(201).json({
    message:
      "You have accessed the /api/notes api endpoint with a DELETE request",
  });
};
