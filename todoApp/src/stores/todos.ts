import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const todo = ref<string>('')
  const todoList = ref<string[]>([])

  const addTodo = () => {
    console.log('adding todo', todo.value)
    return todoList.value.push(todo.value)
  }

  const handleSubmit = () => {
    console.log(todo.value)
    addTodo()
    console.log(todoList.value)
    todo.value = ''
  }

  const handleDeleteTodo = (idx: number) => {
    return (todoList.value = todoList.value.filter((todo, index) => idx !== index))
  }

  return { todo, todoList, addTodo, handleSubmit, handleDeleteTodo }
})
