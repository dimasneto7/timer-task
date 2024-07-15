import React from 'react'
import style from './Button.module.scss'

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined
  children?: React.ReactNode
  onClick?: () => void
}

function Button({ onClick, type, children }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  )
}

// class Button extends React.Component<{
//   type?: 'button' | 'submit' | 'reset' | undefined
//   children: string
//   onClick?: () => void
// }> {
//   render() {
//     const { type = 'button', onClick } = this.props
//     return (
//       <button onClick={onClick} type={type} className={style.botao}>
//         {this.props.children}
//       </button>
//     )
//   }
// }

export default Button
