import React from "react";
import { Grid, List } from "semantic-ui-react";
import { BreakingBadCharacter } from "../../app/models/breakingbadcharacter";
import BreakingBadForm from "../form/BreakingBadForm";
import BreakingBadCharactersList from "./BreakingBadCharactersList";
import BreakingBadCharacterDetails from "./details/BreakingBadCharacterDetails";

interface Props{
    
    breakingBadCharacterList : BreakingBadCharacter[];
    selectedBreakingBadCharacter : BreakingBadCharacter | undefined;
    selectBreakingBadCharacter : (id: number) => void;
    cancelBreakingBadCharacter : () => void;
    editMode : boolean;
    openForm :  (id: number) => void;
    closeForm : () => void;
    createOrEdit : (breakingBadCharacter : BreakingBadCharacter) => void;
    deleteBreakingBadCharacter : (id : number) => void;
}

export default function BreakingBadDashBoard({breakingBadCharacterList, selectedBreakingBadCharacter, 
    selectBreakingBadCharacter , cancelBreakingBadCharacter, editMode, closeForm, openForm, createOrEdit, deleteBreakingBadCharacter  }: Props)
{
    return (
            <Grid>
                <Grid.Column width = '10'>
                    <BreakingBadCharactersList 
                    breakingBadCharacters={breakingBadCharacterList} 
                    selectBreakingBadCharacter = {selectBreakingBadCharacter}
                    deleteBreakingBadCharacter = {deleteBreakingBadCharacter}
                    />
                </Grid.Column>
                <Grid.Column width = '6'>                   
                    {selectedBreakingBadCharacter &&  !editMode &&
                    <BreakingBadCharacterDetails 
                        breakingBadCharacter={selectedBreakingBadCharacter} 
                        cancelBreakingBadCharacter = {cancelBreakingBadCharacter}
                        openForm = {openForm}
                        />}
                     {editMode &&                       
                    <BreakingBadForm closeForm = {closeForm}  breakingBadCharacter={selectedBreakingBadCharacter} createOrEdit = {createOrEdit}/>}
                </Grid.Column>

            </Grid>
    )

}