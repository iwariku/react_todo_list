import Button from './Button';
import TodoForm from './TodoForm';

const TodoItem = ({
  todo,
  isEditing, //今「このタスク」が編集モードかの判定結果を受けるため。
  editText,
  onToggle,
  onDelete,
  onStartEdit,
  onSave,
  onEditTextChange,
}) => {
  return (
    <li>
      {isEditing ? (
        // 編集ボタンが押された時にのみ、表示のされ方が変わる
        <>
          <TodoForm
            value={editText}
            onChange={onEditTextChange}
            onSave={() => onSave(todo.id)}
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
          <Button onClick={() => onStartEdit(todo)}>編集</Button>
          <Button onClick={() => onDelete(todo.id)}>削除</Button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
