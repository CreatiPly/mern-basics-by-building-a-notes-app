import Note from "../models/note.model.js";

export const getAllNotes = async (request, response) => {
    try {
        const note = await Note.find().sort({createdAt: -1});

        response.status(200).json(note);
    } catch (error) {
        console.error("Error in the getAllNotes ", error)
        response.status(500).json({message: "Internal server error"})
    }
};

export const getNoteById = async (request, response) => {
    try {
        const id = request.params.id

        const note = await Note.findById(id);

        if (!note) {
            return response.status(404).json({message: "Note not found"})
        }

        response.status(200).json(note);
    } catch (error) {
        console.error("Error in the getNoteById ", error)
        response.status(500).json({message: "Internal server error"})
    }
};


export const createNote = async (request, response) => {
    try {
        const {title, content} = request.body
        const note = new Note({title, content})
        await note.save();

        response.status(201).json({message: "Note created successfully"})
    } catch (error) {
        console.error("Error in the createNote ", error)
        response.status(500).json({message: "Internal server error"})
    }
};

export const updateNoteByID = async (request, response) => {
    try {
        const id = request.params.id
        const {title, content} = request.body
        const note = await Note.findByIdAndUpdate(id, {title, content}, {new: true})

        if (!note) {
            return response.status(404).json({message: "Note not found"})
        }

        response.status(200).json({message: "Note updated successfully"})
    } catch (error) {
        console.error("Error in the updateNoteByID ", error)
        response.status(500).json({message: "Internal server error"})
    }
};

export const deleteNoteByID = async (request, response) => {
    try {
        const id = request.params.id

        const deletedNote = await Note.findByIdAndDelete(id)

        if (!deletedNote) {
            return response.status(404).json({message: "Note not found"})
        }

        response.status(200).json({message: "Note deleted successfully"})
    } catch (error) {
        console.error("Error in the deleteNoteByID ", error)
        response.status(500).json({message: "Internal server error"})
    }
};
