import './InputField.css'

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>
}
const InputField: React.FC <Props> = ({todo, setTodo}: Props) => {
  return (
    <form action="" className="input">
      <input type="text" placeholder="Enter a task" className="input__box"
      value={todo}
      onChange={e=>setTodo(e.target.value)}
      />
      <button className="input_submit" type='submit'>Add Task</button>
    </form>
  )
}

export default InputField
