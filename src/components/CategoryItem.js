import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive"

function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}

export default CategoryItem;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  ${mobile({ height: "30vh" })};
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

`;

const Title = styled.h1`
color:#fff;
margin-bottom:20px;
`;

const Button = styled.button`
 border:none;
 padding:9px;
 background-color:#fff;
 color:gray;
 cursor:pointer;
 font-weight:600;
`;

