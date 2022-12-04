
import React, { ChangeEvent, useState } from "react";
import { Button, Form, FormButton, Segment  } from "semantic-ui-react";
import { BreakingBadCharacter } from "../../app/models/breakingbadcharacter";

interface Props {
    breakingBadCharacter : BreakingBadCharacter | undefined;
    closeForm : () => void;
    createOrEdit: (breakingBadCharacter : BreakingBadCharacter) => void;
}

export default function BreakingBadForm({breakingBadCharacter : selectedBreakingBadCharacter, closeForm, createOrEdit} : Props) {

    const initialState = selectedBreakingBadCharacter ?? {
        char_id: 0,
        name : '',
        nickname : '',
        appearance : [],
        occupation : [],
        birthday : '',
        category : '',
        status : '',
        better_call_saul_appearance : [],
        img : '',
        portrayed : '',

    }

    const [breakingBadCharacter, setBreakingBadCharacter ] = useState(initialState);
    
    function handleSubmit() {
        console.log(breakingBadCharacter);
        createOrEdit(breakingBadCharacter);
    }

    function handleInputChange(event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setBreakingBadCharacter({...breakingBadCharacter, [name] : value})

    }

    return (

        <Segment>
            <Form onSubmit={handleSubmit} autoComplete = 'off'>
                <Form.Input  placeholder  = 'Name' value = {breakingBadCharacter.name} onChange={handleInputChange}/>
                {/* <Form.Input  placeholder  = 'Ocupation'  value = {breakingBadCharacter.occupation} name = 'occupation'  onChange={handleInputChange}/> */}
                <Form.Input  placeholder  = 'Birthday' value = {breakingBadCharacter.birthday} name = 'birthday'  onChange={handleInputChange}/>
                <Form.Input  placeholder  = 'Nick Name' value = {breakingBadCharacter.nickname} name = 'nickname'  onChange={handleInputChange}/>
                <Form.Input  placeholder  = 'Apearance' value = {breakingBadCharacter.appearance} name = 'appearance'  onChange={handleInputChange}/>
                <Form.Input  placeholder  = 'Category' value = {breakingBadCharacter.category} name = 'category'  onChange={handleInputChange}/>
                <Form.Group>
                    <Form.Button floated = 'right' positive type = 'submit' content = 'Submit'></Form.Button>
                    <Form.Button onClick={closeForm} floated = 'left' type = 'button' content = 'Cancel'></Form.Button>           
                </Form.Group>
                        
            </Form>
        </Segment>
    )

}