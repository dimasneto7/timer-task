import React, { useState } from 'react'
import { ITask } from '../../types/task'
import Button from '../Button'
import style from './Form.module.scss'
import { v4 as uuidv4 } from 'uuid'

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({ setTasks }: Props) {
  const [task, setTask] = useState('')
  const [time, setTime] = useState('00:00')

  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setTasks((oldTasks) => [
      ...oldTasks,
      { task, time, selected: false, completed: false, id: uuidv4() },
    ])
    setTask('')
    setTime('00:00')
  }
  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="O que você quer estudar?"
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>

      <Button type="submit">Adicionar</Button>
    </form>
  )
}

export default Form

// class Form1 extends React.Component<{
//   setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
// }> {
//   state = {
//     task: '',
//     time: '00:00',
//   }

//   addTask(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault()
//     this.props.setTasks((oldTasks) => [
//       ...oldTasks,
//       { ...this.state, selected: false, completed: false, id: uuidv4() },
//     ])
//     this.setState({
//       task: '',
//       time: '00:00',
//     })
//   }

//   render() {
//     return (
//       <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
//         <div className={style.inputContainer}>
//           <label htmlFor="task">Adicione um novo estudo</label>
//           <input
//             type="text"
//             name="task"
//             id="task"
//             value={this.state.task}
//             onChange={(e) =>
//               this.setState({ ...this.state, task: e.target.value })
//             }
//             placeholder="O que você quer estudar?"
//             required
//           />
//         </div>

//         <div className={style.inputContainer}>
//           <label htmlFor="time">Tempo</label>
//           <input
//             type="time"
//             step="1"
//             name="time"
//             value={this.state.time}
//             onChange={(e) =>
//               this.setState({ ...this.state, time: e.target.value })
//             }
//             id="time"
//             min="00:00:00"
//             max="01:30:00"
//             required
//           />
//         </div>

//         <Button type="submit">Adicionar</Button>
//       </form>
//     )
//   }
// }

// export default Form1
