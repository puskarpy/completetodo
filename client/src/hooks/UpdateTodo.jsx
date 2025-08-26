import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

export default function useUpdateTodo() {

    const queryClient = useQueryClient() 
  return useMutation({
    mutationFn : ({id , todo}) => axios.patch(`http://localhost:8000/todo/${id}`, {todo}),
    onSuccess : () => {
        queryClient.invalidateQueries(['todos'])
    }
  })
}
