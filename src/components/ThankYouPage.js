import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
`;

const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ThankYouPage = () => {
  // Generate a random 5-digit order ID
  const orderId = Math.floor(Math.random() * 89999 + 10000);

  const orderDetails = JSON.parse(localStorage.getItem("orderDetails"));

  return (
    <Wrapper>
      <Container>
        <Heading>Thank You!</Heading>
        <p>Your order has been placed.</p>
        <p>Order ID: {orderId}</p>
        <OrderSummary>
          <SummaryItem>
            <span>Cost of goods</span>
            <span>50,000</span>
          </SummaryItem>
          {orderDetails?.sendAsDropshipper ? (
            <SummaryItem>
              <span>Dropshipper fee</span>
              <span>5,900</span>
            </SummaryItem>
          ) : (
            <></>
          )}
          <SummaryItem>
            <span>Shipment</span>
            <span>
              {orderDetails?.selectedShipment === "go-send"
                ? "Go-Send"
                : orderDetails?.selectedShipment === "JNE"
                ? "JNE"
                : orderDetails?.selectedShipment === "personal-courier"
                ? "Personal Courier"
                : "-"}
            </span>
          </SummaryItem>
          <SummaryItem>
            <span>Payment</span>
            <span>
              {orderDetails?.selectedPayment === "e-wallet"
                ? "e-Wallet"
                : orderDetails?.selectedPayment === "bank-transfer"
                ? "Bank Transfer"
                : orderDetails?.selectedPayment === "virtual-account"
                ? "Virtual Account"
                : "-"}
            </span>
          </SummaryItem>
        </OrderSummary>
      </Container>
    </Wrapper>
  );
};

export default ThankYouPage;
