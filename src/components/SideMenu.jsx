import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { auth } from '../firebase/Firebase'
import FoodListItem from "./FoodListItem"

function SideMenu({savedList}) {

    const history = useHistory();

    return (
        <Container data-aos="fade-right">
            <HeaderTop>FoodSwipe</HeaderTop>
            <SwipeSection>
                <button className="btn btn-link py-3 w-100" onClick={() => history.push("/")}>Find new meals</button>
            </SwipeSection>
            <FoodList>
                {
                    savedList?.map(({data: {foodId, name, imageUrl}}) => 
                        <FoodListItem id={foodId} name={name} imageUrl={imageUrl}/>
                    )
                }
            </FoodList>
            <HeaderTop>
                <button 
                    className="btn" 
                    onClick={
                    () => {
                        history.push("/")
                        auth.signOut()
                    }}>Sign out</button>
            </HeaderTop>
        </Container>
    )
}

export default SideMenu

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    flex: 0.4;
    max-width: 400px;
    text-align: center;
    box-shadow: 1px 0px 10px 0px rgba(0,0,0,0.75);
    z-index: 1;
    background-color: #fff;
` 

const FoodList = styled.div`
    flex: 1;
    overflow: auto;
`

const SwipeSection = styled.div`
    background-color: #f8f8f8;
`

const HeaderTop = styled.div`
    background: linear-gradient(to right, #33cc77, #aef489);
    padding: 15px;
    font-size: 1.2rem;
`