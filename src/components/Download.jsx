import React from 'react'
import styled from 'styled-components'

function Download({phoneType, close}) {
    return (
        <Container>
            <Card>
                <h3>Download</h3>
                <List>
                    <li>Install <a href={phoneType==="ios"?"https://apps.apple.com/gb/app/expo-go/id982107779":"https://d1ahtucjixef4r.cloudfront.net/Exponent-2.19.3.apk"} target="_blank">Expo Go</a> on your handheld device.</li>
                    <li>
                        Scan the QR code below to open FoodSwipe:
                    </li>
                </List>
                <QrCode src="https://github.com/MonwarK/FoodSwipe_Bootstrap/blob/main/images/download.png?raw=true" alt="Download"/>
                <button onClick={close} className="btn btn-outline-dark w-100 mt-3">Done</button>
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

const QrCode = styled.img`
    width: 100%;
    border: 1px solid lightgray;
`