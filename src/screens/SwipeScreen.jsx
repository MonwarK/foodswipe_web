import React from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { savedState } from '../atoms/savedState'
import FoodCard from '../components/FoodCard'

function SwipeScreen({meals}) {

    const savedList = useRecoilValue(savedState)

    return (
        <SwipeContainer>
            {
                meals?.map(({id, data:{name, imageUrl, description}}) => {
                    const contains = savedList?.filter(item => item.data.foodId === id)
                    if(contains?.length){
                        return null;
                    }
                    return <FoodCard id={id} name={name} imageUrl={imageUrl} description={description}/>
                })
            }
        </SwipeContainer>
    )
}

export default SwipeScreen

const SwipeContainer = styled.div`
    flex: 1;
`