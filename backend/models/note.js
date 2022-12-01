import mongoose, { Schema } from "mongoose";

const NoteSchema = new Schema({
    title:
    {
        type:String,
        required:true
    },
    desc:
    {
        type:String,
        required:true
    }
})

export default mongoose.model('Note',NoteSchema)