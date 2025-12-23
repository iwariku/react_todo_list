import { useState } from 'react';

import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const [inputText, setInputText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  const uncompletedCount = todos.filter((todo) => !todo.isCompleted).length;
  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const saveEdit = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: editText };
      }
      return todo;
    });

    setTodos(newTodos);

    setEditingId('');
  };

  const deleteTodo = (id) => {
    if (window.confirm('本当によろしいですか？')) {
      const deletionTodos = todos.filter((todo) => todo.id !== id);
      setTodos(deletionTodos);
    }
  };

  const onClickSaveData = () => {
    const newTodo = {
      id: todos.length + 1,
      text: inputText,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    setInputText('');
  };

  return (
    <div className="todo-app">
      <h1>My ToDo List</h1>
      <TodoForm
        value={inputText}
        onChange={setInputText}
        onSave={onClickSaveData}
        buttonText="保存"
      />
      <h2>未完了のタスク</h2>
      <ul>
        {todos
          .filter((todo) => !todo.isCompleted)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              isEditing={editingId === todo.id}
              editText={editText}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onStartEdit={startEdit}
              onSave={saveEdit}
              onEditTextChange={setEditText}
            />
          ))}
      </ul>
      <h2>完了のタスク</h2>
      <ul>
        {todos
          .filter((todo) => todo.isCompleted)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              isEditing={editingId === todo.id}
              editText={editText}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onStartEdit={startEdit}
              onSave={saveEdit}
              onEditTextChange={setEditText}
            />
          ))}
      </ul>
      <p>{`合計: ${totalCount}`}</p>
      <p>{`完了: ${completedCount}`}</p>
      <p>{`未完了: ${uncompletedCount}`}</p>
    </div>
  );
}

export default App;
