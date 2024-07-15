import React from 'react'
import { ITask } from '../../types/task'
import Item from './item'
import style from './List.module.scss'

interface Props {
  tasks: ITask[]
  selectedTask: (taskSelected: ITask) => void
}

function List({ tasks, selectedTask }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item selectedTask={selectedTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  )
}

export default List
