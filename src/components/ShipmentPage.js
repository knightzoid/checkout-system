import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: 1000px;
  margin: 50px 0;
`;

const FormWrapper = styled.div`
  width: 60%;
  padding: 0 20px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const RadioWrapper = styled.div`
  margin: 10px 0;
`;

const RadioLabel = styled.label`
  margin-left: 10px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
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
          <h2>Shipment</h2>
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
              Go-Send - $15,000 (Estimated delivery: Today)
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
              JNE - $9,000 (Estimated delivery: 2 days)
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
              Personal Courier - $29,000 (Estimated delivery: 1 day)
            </RadioLabel>
          </RadioWrapper>
          {selectedShipment === "" && (
            <span>Please select a shipment option</span>
          )}
          <h2>Payment</h2>
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
            <span>Please select a payment option</span>
          )}
          <Button onClick={handleButtonClick}>
            Pay with {selectedPayment}
          </Button>
        </FormWrapper>
        <SummaryWrapper>
          <h2>Summary</h2>
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
                  ? "$15,000"
                  : selectedShipment === "JNE"
                  ? "$9,000"
                  : selectedShipment === "personal-courier"
                  ? "$29,000"
                  : "-"}
              </div>
            )}
          </DeliveryEstimation>
        </SummaryWrapper>
      </Container>
    </Wrapper>
  );
};

export default ShipmentPage;
