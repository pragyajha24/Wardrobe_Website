import React from 'react'
import  styled from 'styled-components';

function Announcement() {
    return (
        <Container>
            Super Deal! Free Shipping on orders Over $50
        </Container>
    )
}

export default Announcement


const Container = styled.div`
height:30px;
background-color:teal;
color:#fff;
display:flex;
align-items:center;
justify-content:center;
fonr-size:14px;
font-weight:500;
`;