import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #fffae6;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1100px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 50px;
  padding: 40px;
`;

const Title = styled.h2`
  color: #ff8a00;
`;

const FormWrapper = styled.div`
  width: 60%;
  padding: 0 20px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const SpanLabel = styled.span`
  margin-top: 3px;
`;

const InputWrapper = styled.div`
  margin: 10px;
`;

const RadioWrapper = styled.div`
  float: left;
  border: 1px #000 solid;
  margin-right: 3px;
  width: 32%;
  input[type="radio"] {
    opacity: 0;
    cursor: pointer;
  }
  input[type="radio"]:checked + div {
    background-color: #000;
  }
`;

const RadioLabel = styled.label`
  display: block;

  line-height: 1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  cursor: pointer;
  padding: 10px;
  height: 50px;
  &:last-of-type {
    @include box-shadow(0 0 0);
    border: none;
  }
`;

const SpanSmallText = styled.label`
  font-size: 12px;
`;

const Button = styled.button`
  display: block;
  background-color: #ff8a00;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const SummaryWrapper = styled.div`
  width: 40%;
  padding: 0 20px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const DeliveryEstimation = styled.div`
  margin-top: 20px;
`;

const ShipmentPage = () => {
  const [selectedShipment, setSelectedShipment] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const navigate = useNavigate();
  const handleShipmentChange = (event) => {
    setSelectedShipment(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handleButtonClick = () => {
    navigate("/thank-you");
  };

  const getDeliveryEstimation = () => {
    switch (selectedShipment) {
      case "go-send":
        return "Today";
      case "JNE":
        return "2 days";
      case "personal-courier":
        return "1 day";
      default:
        return "";
    }
  };

  return (
    <Wrapper>
      <Container>
        <FormWrapper>
          <InputWrapper>
            <Title>Shipment</Title>
            <RadioWrapper>
              <input
                type="radio"
                id="go-send"
                name="shipment"
                value="go-send"
                checked={selectedShipment === "go-send"}
                onChange={handleShipmentChange}
              />
              <RadioLabel htmlFor="go-send">
                <Label>Go-Send</Label>
                <SpanLabel>15,000</SpanLabel>
              </RadioLabel>
            </RadioWrapper>
            <RadioWrapper>
              <input
                type="radio"
                id="jne"
                name="shipment"
                value="JNE"
                checked={selectedShipment === "JNE"}
                onChange={handleShipmentChange}
              />
              <RadioLabel htmlFor="jne">
                <Label>JNE</Label>
                <SpanLabel>9,000</SpanLabel>
              </RadioLabel>
            </RadioWrapper>
            <RadioWrapper>
              <input
                type="radio"
                id="personal-courier"
                name="shipment"
                value="personal-courier"
                checked={selectedShipment === "personal-courier"}
                onChange={handleShipmentChange}
              />
              <RadioLabel htmlFor="personal-courier">
                <Label>Personal Courier</Label>
                <SpanLabel>29,000</SpanLabel>
              </RadioLabel>
            </RadioWrapper>
            {selectedShipment === "" && (
              <SpanSmallText>Please select a shipment option</SpanSmallText>
            )}
          </InputWrapper>
          <InputWrapper>
            <Title>Payment</Title>
            <RadioWrapper>
              <input
                type="radio"
                id="e-wallet"
                name="payment"
                value="e-wallet"
                checked={selectedPayment === "e-wallet"}
                onChange={handlePaymentChange}
              />
              <RadioLabel htmlFor="e-wallet">e-Wallet</RadioLabel>
            </RadioWrapper>
            <RadioWrapper>
              <input
                type="radio"
                id="bank-transfer"
                name="payment"
                value="bank-transfer"
                checked={selectedPayment === "bank-transfer"}
                onChange={handlePaymentChange}
              />
              <RadioLabel htmlFor="bank-transfer">Bank Transfer</RadioLabel>
            </RadioWrapper>
            <RadioWrapper>
              <input
                type="radio"
                id="virtual-account"
                name="payment"
                value="virtual-account"
                checked={selectedPayment === "virtual-account"}
                onChange={handlePaymentChange}
              />
              <RadioLabel htmlFor="virtual-account">Virtual Account</RadioLabel>
            </RadioWrapper>
            {selectedPayment === "" && (
              <SpanSmallText>Please select a payment option</SpanSmallText>
            )}
          </InputWrapper>
        </FormWrapper>
        <SummaryWrapper>
          <Title>Summary</Title>
          <SummaryItem>
            <span>Shipment</span>
            <span>
              {selectedShipment === "go-send"
                ? "Go-Send"
                : selectedShipment === "JNE"
                ? "JNE"
                : selectedShipment === "personal-courier"
                ? "Personal Courier"
                : "-"}
            </span>
          </SummaryItem>
          <SummaryItem>
            <span>Payment</span>
            <span>
              {selectedPayment === "e-wallet"
                ? "e-Wallet"
                : selectedPayment === "bank-transfer"
                ? "Bank Transfer"
                : selectedPayment === "virtual-account"
                ? "Virtual Account"
                : "-"}
            </span>
          </SummaryItem>
          <DeliveryEstimation>
            {selectedShipment !== "" && (
              <div>
                Estimated delivery: {getDeliveryEstimation()} for{" "}
                {selectedShipment === "go-send"
                  ? "15,000"
                  : selectedShipment === "JNE"
                  ? "9,000"
                  : selectedShipment === "personal-courier"
                  ? "29,000"
                  : "-"}
              </div>
            )}
          </DeliveryEstimation>
          <Button onClick={handleButtonClick}>
            Pay with {selectedPayment}
          </Button>
        </SummaryWrapper>
      </Container>
    </Wrapper>
  );
};

export default ShipmentPage;
