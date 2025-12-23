import Button from './Button';

const TodoForm = ({ value, onChange, onSave, buttonText }) => {
  return (
    <div className="todo-form">
      <input
        type="text"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button onClick={onSave}>{buttonText}</Button>
    </div>
  );
};

export default TodoForm;
