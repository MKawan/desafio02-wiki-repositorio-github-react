import React from 'react'
import { ItemContainer } from './styles'

export const ItemRopos = ({repo, handleRemoveRepo}) => {

    const handleRemove = () =>{
        handleRemoveRepo(repo.id)
    }
  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} >Ver Repositórios</a>
        <br/>
        <a href='#' className='remove'>Remove</a>
        <hr/>
    </ItemContainer>
  )
}
