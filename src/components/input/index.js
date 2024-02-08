import React from 'react'
import { InputConatiner } from './styles'


export const Input = ({value, onChange}) => {
  return (
    <InputConatiner>
        <input value={value} onChange={onChange}/>
    </InputConatiner>
  )
}
