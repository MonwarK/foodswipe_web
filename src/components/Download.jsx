import React from 'react'
import styled from 'styled-components'

function Download({phoneType, close}) {
    return (
        <Container>
            <Card>
                {
                    phoneType==="android"?
                    <>
                    <h3 className="text-center">Download</h3>
                    <List>
                        <li>Install <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_GB&gl=US" target="_blank">Expo Go</a> on your handheld device.</li>
                        <li>
                            Scan the QR code below to open FoodSwipe:
                        </li>
                    </List>
                    <CodeContainer>
                        <QrCode src="https://github.com/MonwarK/FoodSwipe_Bootstrap/blob/main/images/download.png?raw=true" alt="Download"/>
                    </CodeContainer>
                    </>
                    :
                    <>
                        <h3 className="text-center">Uh oh...</h3>
                        <p>Unfortunately, the FoodSwipe mobile app is not available on iOS yet.</p>
                        <p>Please check back another time.</p>
                    </>
                }
                <button onClick={close} className="btn btn-outline-dark w-100 mt-3">Close</button>
            </Card>
        </Container>
    )
}

export default Download

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.6);
    position: fixed;
    z-index: 1;
    overflow-x: hidden;
    display: grid;
    place-items: center;
`

const List = styled.ol`
    padding: 0 15px;
    padding-top: 10px;
`

const Card = styled.div`
    background-color: #fff;
    max-width: 600px;
    padding: 20px;
    width: 98%;
    max-width: 400px;
    border-radius: 4px;
`

const CodeContainer = styled.div`
    padding: 15px;
    border: 1px solid lightgray;
    border-radius: 8px;
    box-shadow: 1px 0px 5px 0px rgba(0,0,0,0.75);

    &:hover{
        transition: 500ms;
        padding: 5px;
    }

    &:not(:hover){
        transition: 500ms;
    }
`

const QrCode = styled.img`
    width: 100%;
`
