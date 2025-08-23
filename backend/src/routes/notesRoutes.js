import express, { Router } from "express";
import {
  createNote,
  deleteNoteByID,
  getAllNotes,
  updateNoteByID,
    getNoteById
} from "../controllers/notesController.js";

const router = Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNoteByID);
router.delete("/:id", deleteNoteByID);

export default router;
