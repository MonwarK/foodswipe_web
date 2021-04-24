import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { foodState } from '../atoms/foodState'

function RecipeScreen() {
    const meals = useRecoilValue(foodState)
    const [currentMeal, setCurrentMeal] = useState()
    const params = useParams()

    useEffect(() => {
        setCurrentMeal(meals?.filter(meal => 
            meal.id === params.foodid 
        ))
    }, [params, meals])

    return (
        currentMeal?
        <Container>
            <Card className="card p-3">
                <FoodName>{currentMeal[0].data.name}</FoodName>
                <hr />
                <FoodImage src={currentMeal[0].data.imageUrl} alt={currentMeal[0].data.name} />
                <p>{currentMeal[0]?.data.description}</p>
                <div>
                    <Information>
                        <h2>Ingredient</h2>
                        <ul>
                        {
                            currentMeal[0]?.data.ingredients?.map(ingredient =>
                                <li>{ingredient}</li>
                            )
                        }
                        </ul>
                    </Information>
                    <Information>
                        <h2>Methods</h2>
                        <ol>
                        {
                            currentMeal[0]?.data.methods?.map(method =>
                                <li>{method}</li>
                            )
                        }
                        </ol>
                        {
                            console.log(currentMeal)
                        }
                    </Information>
                </div>
            </Card>
        </Container>
        :null
    )
}

export default RecipeScreen

const Container = styled.div`
    flex: 1;
`

const Card = styled.div`
    border: 1px solid lightgrey;
    border-radius: 8px;
    width: 98%;
    height: 98%;
    max-width: 500px;
    max-height: 750px;
    background-color: #fff;
    position: absolute;
    left:280px;
    right:0;
    top:0;
    bottom:0;
    margin: auto;
    overflow-y: auto;
`

const FoodName = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 1.6rem;
`

const FoodImage = styled.img`
    width: 100%;
    max-width: 450px;
    margin: 10px auto;
    border-radius: 4px;
`

const Information = styled.div`
    padding: 15px 5px;
    width: 100%;
`