import { Avatar } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

function FoodListItem({id, name, imageUrl}) {
    
    const history = useHistory()

    return (
        <Container onClick={() => history.push(`/food/${id}`)}>
            <Avatar style={{width: 50, height: 50}} src={imageUrl}/>
            <FoodName>{name}</FoodName>
        </Container>
    )
}

export default FoodListItem

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 10px;
    cursor: pointer;

    &:hover{
        background-color: #f0f0f0;
    }
`

const FoodName = styled.div`
    text-align: left;
    padding-left: 15px;
    font-size: 1rem;
`