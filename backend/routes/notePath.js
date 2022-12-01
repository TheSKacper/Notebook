import express from 'express'
import { createNote, deleteNote, getAllNote, singleNote, updateNote } from '../controllers/noteControllers.js'

const router = express.Router()

router.post('/',createNote)

router.get('/',getAllNote)

router.put('/:id',updateNote)

router.delete('/:id',deleteNote)

router.get('/:id',singleNote)


export default router