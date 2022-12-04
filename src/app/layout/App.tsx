import React, { Fragment, useEffect, useState } from 'react';
import { Container, Header, List } from 'semantic-ui-react';
import  { BreakingBadCharacter }  from '../models/breakingbadcharacter';
import NavBar from './NavBar';
import BreakingBadDashboard from '../../features/breakingBad/BreakingBadDashBoard';
import agent from '../api/agent';
import LoadingComponemt from './LoadingComponents';



function App() {

  const [breakingBadCharacters, setBreakingBadCharacters] = useState<BreakingBadCharacter[]>([])
  const [selectedBreakingBadCharacter, setSelectedBreakingBadCharacter] = useState<BreakingBadCharacter | undefined>(undefined);
  const [editMode ,setEditMode] = useState(false);
  const [loading,setLoading] = useState(true);

  useEffect(() => {

    agent.BreakingBadCharacters.list().then(response => {
     
      let breakingBadCharactersLocale : BreakingBadCharacter[] = [];
      response.forEach(breakingBadCharacter => {
        breakingBadCharacter.birthday = new Date(breakingBadCharacter.birthday).toLocaleDateString();
        breakingBadCharactersLocale.push(breakingBadCharacter);
      })
      setBreakingBadCharacters(breakingBadCharactersLocale);
      console.log(response);
      setLoading(false);
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
  if (loading) return <LoadingComponemt content='Loading app'/>
  
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
