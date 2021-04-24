import React from 'react'
import TinderCard from 'react-tinder-card'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { userState } from '../atoms/userState'
import { db } from '../firebase/Firebase'

function FoodCard({name, description, imageUrl, id}) {

    const user = useRecoilValue(userState)

    const onSwipe = (direction) => {
        if(direction === "left"){
            db
            .collection("saved")
            .add({
                uid: user.uid,
                foodId: id,
                name: name,
                imageUrl: imageUrl
            })
        }
        else if(direction === "right"){
            console.log("DISLIKED")
        }
    }

    return (
        <Card onCardLeftScreen={onSwipe} data-aos="fade-in" preventSwipe={["up", "down"]}>
            <Image style={{backgroundImage: `url("${imageUrl}")`}} />
            <Description>
                <h5 className="mt-2">{name}</h5> 
                <p>{description.substring(0, 90)}...</p>
            </Description>
        </Card>
    )
}

export default FoodCard

const Image = styled.img`
    height: 400px;
    width: 100%;
    background-size: cover;
    background-position: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`

const Card = styled(TinderCard)`
    border: 1px solid lightgrey;
    border-radius: 8px;
    width: 95%;
    max-width: 400px;
    height: 550px;
    background-color: #fff;
    text-align: center;
    cursor: grab;
    position: absolute;
    left:280px;
    right:0;
    top:0;
    bottom:0;
    margin: auto;

    @media (max-width: 600px){
        left: 0;
    }
`

const Description = styled.div`
    padding: 10px;
    text-align: left;
`