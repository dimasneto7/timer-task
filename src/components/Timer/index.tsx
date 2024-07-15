import Button from '../Button'
import Clock from './Clock'
import style from './Timer.module.scss'
import { timeForSecunds } from '../../Common/utils/seconds'
import { ITask } from '../../types/task'
import { useEffect, useState } from 'react'

interface Props {
  selected: ITask | undefined
  finishTask: () => void
}

export default function Timer({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (selected?.time) {
      setTime(timeForSecunds(selected?.time))
    }
  }, [selected])

  function countdown(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1)
        return countdown(counter - 1)
      }
      finishTask()
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => countdown(time)}>Começar</Button>
    </div>
  )
}
