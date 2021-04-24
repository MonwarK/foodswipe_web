import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { userState } from '../atoms/userState'
import { db } from '../firebase/Firebase'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'

function FoodCard({name, description, imageUrl, id}) {

    const user = useRecoilValue(userState)
    const [visisble, setVisisble] = useState(true)
    const swipeRef = React.createRef();
    const [direction, setDirection] = useState(false)

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

        setVisisble(false)
    }

    return (
        visisble?
        <Container>
            <Card flickOnSwipe ref={swipeRef} onCardLeftScreen={onSwipe} data-aos="fade-in" preventSwipe={["up", "down"]}>
                <Image style={{backgroundImage: `url("${imageUrl}")`}} />
                <Description>
                    <h5 className="mt-2">{name}</h5> 
                    <p>{description.substring(0, 90)}...</p>
                </Description>
            </Card>
            <ButtonContainer>
                <Button 
                    className="btn btn-success" 
                    onClick={() => {
                        if(!direction){
                            setDirection(true)
                            swipeRef?.current.swipe("left")
                        }
                    }
                }>
                    <CheckIcon />
                </Button>
                <Button 
                    className="btn btn-danger" 
                    onClick={() => {
                        if(!direction){
                            setDirection(true)
                            swipeRef?.current.swipe("right")
                        }
                    }
                }>
                    <CloseIcon />
                </Button>
            </ButtonContainer>
            
        </Container>
        :null
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

const Container = styled.div`
    width: 95%;
    width: 400px;
    height: 550px;
    position: absolute;
    left:280px;
    right:0;
    top:0;
    bottom:0;
    margin: auto;
`

const Card = styled(TinderCard)`
    height: 100%;
    border: 1px solid lightgrey;
    border-radius: 8px;
    background-color: #fff;
    text-align: center;
    cursor: grab;

    @media (max-width: 600px){
        left: 0;
    }
`

const Description = styled.div`
    padding: 10px;
    text-align: left;
`

const ButtonContainer = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
`

const Button = styled.button`
    height: 60px;
    width: 60px;
    border-radius: 100%;
    border: none;
`