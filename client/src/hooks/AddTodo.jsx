import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

export default function useAddTodo() {

    const queryClient = useQueryClient() 
  return useMutation({
    mutationFn : (todo) => axios.post(`http://localhost:8000/todo`, {todo}),
    onSuccess : () => {
        queryClient.invalidateQueries(['todos'])
    }
  })
}
