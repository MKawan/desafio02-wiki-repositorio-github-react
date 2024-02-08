import React, { useState } from 'react'
import github from '../../assets/img/github.png';
import { Conatainer } from './styles';
import { Input } from '../../components/input';
import { ItemRopos } from '../../components/ItemRepos';
import { Button } from '../../components/Buttom';
import { Api } from '../../services/api';

export default function Home(){
  const [currentRepos, setCurrentRepos] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSeachRepos = async () =>{
    const {data} = await Api.get(`repos/${currentRepos}`)
    
    if(data.id){
        const isExiste = repos.find(repo => repo.id === data.id)
        
        if(!isExiste){
          setRepos(prev => [...prev, data]);
          setCurrentRepos('');
          return
        }
    }
    alert('Repositório não encontrado')
  }

  const handleRemoveRepo = (id) =>{
    setRepos(repos.filter(repoId => repoId.id !== id) )
  }
  
  return (
    <Conatainer>
      <img src={github} width={72} height={72} alt='github imagem'/>
      <Input value={currentRepos} onChange={(e) => setCurrentRepos(e.target.value)}/>
      <Button onClick={handleSeachRepos}/>
      {repos.map(repo => <ItemRopos handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Conatainer>
  )
}
