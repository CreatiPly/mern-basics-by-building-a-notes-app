import mongoose from "mongoose";

// 1. create a schema

const noteSchema = mongoose.Schema(
    {
        title: {
            type: String,
            requied: true,
        },
        content: {
            type: String,
            requied: true,
        },
    },
    {timestamps: true}
);

// 2. create a model based of that schema

const Note = mongoose.model("Note", noteSchema);

export default Note;
