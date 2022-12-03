import React from "react";
import { Card, Icon, Image , Button } from "semantic-ui-react";
import { BreakingBadCharacter } from "../../../app/models/breakingbadcharacter";

interface Props {
    breakingBadCharacter : BreakingBadCharacter;
    cancelBreakingBadCharacter : () => void;
    openForm: (id : number) => void;

}


export default function BreakingBadCharacterDetails(props : Props){
    return(

        <Card fluid>
            <Image src={props.breakingBadCharacter.img} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{props.breakingBadCharacter.name}</Card.Header>
            <Card.Meta>
                <span className='date'>{props.breakingBadCharacter.birthday}</span>
            </Card.Meta>
                <Card.Description>
                    {props.breakingBadCharacter.occupation}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group>
                    <Button onClick={() => props.openForm(props.breakingBadCharacter.char_id)}basic color="blue" content = 'Edit'></Button>
                    <Button onClick={props.cancelBreakingBadCharacter} basic color="grey" content = 'Cancel'></Button>
                </Button.Group>
            </Card.Content>
        </Card> 
    )    
    
}