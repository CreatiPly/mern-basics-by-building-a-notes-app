import express, {request, response} from "express";
import notesRoutes from "./routes/notesRoutes.js";
import {connectToDatabase} from "./config/database.js";
import dotenv from "dotenv";

dotenv.config();

connectToDatabase();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log("Server started on port ", PORT);
});
