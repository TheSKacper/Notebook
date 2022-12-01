import Note from '../models/note.js'

export const createNote = async(req,res) =>
{
    const newNote = new Note(req.body)
    try {
        const newItem = await newNote.save()
        res.status(200).json(newItem)
    } catch (error) {
        console.log(error)
    }
}  

export const getAllNote = async(req,res) =>
{
    try {
    const find = await Note.find()
        res.status(200).json(find)
    } catch (error) {
        console.log(error)
    }
}

export const updateNote = async(req,res) =>
{
    try {
        const updated = await Note.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
        res.status(200).json(updated)
    } catch (error) {
        console.log(error)
    }
}

export const deleteNote = async(req,res) =>
{
    try {
        await Note.findByIdAndDelete(req.params.id)
        res.status(200).json('Deleted')
    } catch (error) {
        console.log(error)
    }
}

export const singleNote = async(req,res) =>
{
    try {
        const find = await Note.findById(req.params.id)
        res.status(200).json(find)
    } catch (error) {
        console.log(error)
    }
} 
