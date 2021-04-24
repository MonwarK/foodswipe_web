import React from 'react'
import styled from 'styled-components'

function Spinner() {
    return (
        <Loader />
    )
}

export default Spinner

const Loader = styled.div`
    top:0;
    left:0;
    right:0;
    bottom:0;
    position: absolute;
    margin: auto;
    border: 8px solid #e8e8e8;
    border-top: 8px solid #33CC77;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`