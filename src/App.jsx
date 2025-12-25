import { useTodos } from './hooks/useTodo';

import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {
  const {
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
  } = useTodos();

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
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onSave={saveEdit}
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
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onSave={saveEdit}
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
