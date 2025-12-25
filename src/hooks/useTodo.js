import { useState, useRef } from 'react';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const idRef = useRef(1);

  const [inputText, setInputText] = useState('');

  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  const uncompletedCount = todos.filter((todo) => !todo.isCompleted).length;

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const saveEdit = (id, newText) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, text: newText } : todo;
      })
    );
  };

  const deleteTodo = (id) => {
    if (window.confirm('本当によろしいですか？')) {
      const deletionTodos = todos.filter((todo) => todo.id !== id);
      setTodos(deletionTodos);
    }
  };

  const onClickSaveData = () => {
    const newTodo = {
      id: idRef.current,
      text: inputText,
      isCompleted: false,
    };

    idRef.current += 1;

    setTodos([...todos, newTodo]);
    setInputText('');
  };

  return {
    todos,
    inputText,
    setInputText,
    totalCount,
    completedCount,
    uncompletedCount,
    toggleTodo,
    saveEdit,
    deleteTodo,
    onClickSaveData,
  };
};
