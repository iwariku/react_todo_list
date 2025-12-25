import { useState } from 'react';
import Button from './Button';
import TodoForm from './TodoForm';

const TodoItem = ({ todo, onToggle, onDelete, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    onSave(todo.id, editText); // propsからの関数を使う
    setIsEditing(false);
  };

  const handleStartEdit = () => {
    setEditText(todo.text);
    setIsEditing(true);
  };

  return (
    <li>
      {isEditing ? (
        // 編集ボタンが押された時にのみ、表示のされ方が変わる
        <>
          <TodoForm
            value={editText}
            onChange={setEditText}
            onSave={handleSave}
            buttonText="保存"
          />
        </>
      ) : (
        <>
          {/* Todoが保存されたら、以下が表示される */}
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => onToggle(todo.id)}
          />
          <span>{todo.text}</span>
          <Button onClick={handleStartEdit}>編集</Button>
          <Button onClick={() => onDelete(todo.id)}>削除</Button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
