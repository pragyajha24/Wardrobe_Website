import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { mobile } from "../responsive";

function Cart() {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Yours Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <Details>
                  <ProductName>
                    <b>Product:</b> NIKE SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 578202
                  </ProductId>
                  <ProductColor color="pink" />
                  <ProductSize>
                    <b>Size:</b> 37
                  </ProductSize>
                </Details>
              </ProductDetails>

              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <hr />
            <Product>
              <ProductDetails>
                <Image src="https://images.unsplash.com/photo-1618354691229-88d47f285158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHRzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <Details>
                  <ProductName>
                    <b>Product:</b> SWEATSHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 893777
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> S
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated shipping</SummaryItemText>
              <SummaryItemPrice>$5.89</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-$5.89</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
}

export default Cart;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "#fff"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })};
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 250px;
  margin-right: 10px;
`;

const Details = styled.p`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })};
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })};
`;

const hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 10px;
  background-color: #000;
  color: #fff;
  font-weight: 600;
`;
