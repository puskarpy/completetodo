import { Router } from "express";
import { Todo } from "../models/todo.js";

const router = Router()

router.get('/', async(req , res) => {
    try{
        const todos = await Todo.find({}).sort({createdAt : -1})
        return res.json(todos)
    } catch(err){
        console.log("Error", err);
        return res.status(500).json({"error" : "Something went wrong."})
        
    }

})

router.post('/', async(req , res) => {
    try{
        const { todo } = req.body;
        if(!todo) return res.status(400).json({"error": "Add a todo."})
        const newTodo = await Todo.create({todo})
        return res.status(201).json(newTodo)
    }
    catch(err){
    console.log(err);
    return res.status(500).json({ "error": "Something went wrong." });
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const id = req.params.id
        await Todo.deleteOne({_id : id})
        return res.status(201).json({"Success" : "Todo Deleted" })   
    } catch (error) {
        return res.status(500).json({"error" : error})
    }
})

router.patch('/:id', async(req, res) => {

    try {
        const id = req.params.id;
        const {todo} = req.body;

        if(!todo) return res.status(400).json({ error: "Todo content is required." });

        const updatedTodo =  await Todo.findByIdAndUpdate(id, {todo}, {new:true});
        if (!updatedTodo) return res.status(404).json({ error: "Todo not found." });
        res.status(200).json(updatedTodo);
    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: error });
    }
})


export default router