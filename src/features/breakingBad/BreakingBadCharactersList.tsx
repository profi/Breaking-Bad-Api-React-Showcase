import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";

import { BreakingBadCharacter } from "../../app/models/breakingbadcharacter";

interface Props{
    breakingBadCharacters : BreakingBadCharacter[]
    selectBreakingBadCharacter : (id: number) => void;
    deleteBreakingBadCharacter : (id : number) => void;
}

export default function  BreakingBadCharactersList({breakingBadCharacters, selectBreakingBadCharacter, deleteBreakingBadCharacter} : Props){
    return(
        <Segment>
            <Item.Group divided>
                {breakingBadCharacters.map(breakingBadCharacter => (
                    <Item key = {breakingBadCharacter.char_id}>
                        <Item.Content>
                            <Item.Meta as = ''>{breakingBadCharacter.char_id}</Item.Meta>
                            <Item.Header as = ''>{breakingBadCharacter.name}</Item.Header>
                            <Item.Meta as = ''>{breakingBadCharacter.nickname}</Item.Meta>
                            <Item.Image size="small"  src={breakingBadCharacter.img}></Item.Image>
                            <Item.Description>
                                <div>{breakingBadCharacter.appearance}</div>
                                <div>{breakingBadCharacter.occupation}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectBreakingBadCharacter(breakingBadCharacter.char_id)} floated = 'right' content = 'View' color = 'blue' />
                                <Button onClick={() => deleteBreakingBadCharacter(breakingBadCharacter.char_id)} floated = 'right' content = 'Delete' color = 'red' />
                                <Label basic content = {breakingBadCharacter.category}></Label>
                            </Item.Extra>
                        </Item.Content>

                    </Item>
                ))}
            </Item.Group>
        </Segment>

    )
}

