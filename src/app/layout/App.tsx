import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios'
import { Container, Header, List } from 'semantic-ui-react';
import  { BreakingBadCharacter }  from '../models/breakingbadcharacter';
import NavBar from './NavBar';
import BreakingBadDashboard from '../../features/breakingBad/BreakingBadDashBoard';
import {v4 as uuid} from 'uuid';



function App() {

  const [breakingBadCharacters, setBreakingBadCharacters] = useState<BreakingBadCharacter[]>([])
  const [selectedBreakingBadCharacter, setSelectedBreakingBadCharacter] = useState<BreakingBadCharacter | undefined>(undefined);
  const [editMode ,setEditMode] = useState(false);

  useEffect(() => {

    axios.get<BreakingBadCharacter[]>('https://localhost:7210/api/BreakingBad/GetAllCharacters').then(response => {
      console.log(response);
      setBreakingBadCharacters(response.data);
    })

  }, []);

  function handleSelectBreakingBadCharacter(id : number)
  {
    setSelectedBreakingBadCharacter(breakingBadCharacters.find(x=>x.char_id));
  }

  function handleCancelSelectedBreakingBadCharacter(){
    setSelectedBreakingBadCharacter(undefined);
  }

  function handleOpenForm(id? :number) {
    id ? handleSelectBreakingBadCharacter(id) :  handleCancelSelectedBreakingBadCharacter();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditBreakingBadCharacter(breakingBadCharacter : BreakingBadCharacter){
    breakingBadCharacter.char_id 
    ? setBreakingBadCharacters([...breakingBadCharacters.filter(x=>x.char_id !== breakingBadCharacter.char_id),breakingBadCharacter])
    : setBreakingBadCharacters([...breakingBadCharacters, {...breakingBadCharacter, char_id: Math.random() * (100 - 50) + 50}]);
    setEditMode(false);
    setSelectedBreakingBadCharacter(breakingBadCharacter);
  }
  function handleDeleteActivity(id : number){
    setBreakingBadCharacters({...breakingBadCharacters.filter(x=>x.char_id !== id)});

  }
  
  return (
    <Fragment>
      <NavBar openForm = {handleOpenForm} />
      <Container>
        <BreakingBadDashboard 
        breakingBadCharacterList = {breakingBadCharacters} 
        selectedBreakingBadCharacter = {selectedBreakingBadCharacter}
        selectBreakingBadCharacter={handleSelectBreakingBadCharacter}
        cancelBreakingBadCharacter={handleCancelSelectedBreakingBadCharacter}
        //
        editMode = {editMode}
        openForm ={handleOpenForm}
        closeForm = {handleFormClose}
        createOrEdit = {handleCreateOrEditBreakingBadCharacter}
        deleteBreakingBadCharacter = {handleDeleteActivity}
        />
        </Container>
        
    </Fragment>
  );
}

export default App;
