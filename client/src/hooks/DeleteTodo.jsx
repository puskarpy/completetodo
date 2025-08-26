import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

export default function useDeleteTodo() {

    const queryClient = useQueryClient() 
  return useMutation({
    mutationFn : (id) => axios.delete(`http://localhost:8000/todo/${id}`),
    onSuccess : () => {
        queryClient.invalidateQueries(['todos'])
    }
  })
}
