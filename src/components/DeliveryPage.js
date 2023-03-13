import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fffae6;
`;

const FormDivideWrapper = styled.div`
  display: grid;
  float: left;
  width: 45%;
  margin-right: 10px;
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

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 20px;
`;

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 20px;
  border-left: 1px solid #ff8a00;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #ff8a00;
`;

const Label = styled.div`
  font-size: 14px;
  text-align: justify;
`;

const LabelSpan = styled.span`
  float: right;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${(props) => (props.isValid ? "green" : "red")};
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${(props) => (props.isValid ? "green" : "red")};
`;

const SpanSmallText = styled.span`
  font-size: 10px;
  color: red;
  margin-top: 3px;
`;

const Counter = styled.span`
  font-size: 12px;
  margin-top: 5px;
  text-align: right;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CheckboxLabel = styled.label`
  margin-left: 5px;
`;

const TotalFeeSpan = styled.div`
  margin-top: 70%;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #ff8a00;
`;

const Button = styled.button`
  display: block;
  padding: 10px;
  background-color: #ff8a00;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const DeliveryPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const [isDropshipper, setIsDropshipper] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/shipment");
  };

  const handleCheckboxChange = (e) => {
    setIsDropshipper(e.target.checked);
  };

  const idDropshipper = register("idDropshipper");
  return (
    <Wrapper>
      <Container>
        <FormWrapper>
          <Title>Delivery Details</Title>
          <form id="shipment" onSubmit={handleSubmit(onSubmit)}>
            <FormDivideWrapper>
              <InputWrapper>
                <Input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i
                  })}
                  placeholder="Email"
                  isValid={errors.email ? false : true}
                />
                {errors.email && (
                  <SpanSmallText>
                    Email is required and must be valid
                  </SpanSmallText>
                )}
              </InputWrapper>
              <InputWrapper>
                <Input
                  type="tel"
                  {...register("phoneNumber", {
                    required: true,
                    pattern: /^[0-9()+-]{6,20}$/i
                  })}
                  placeholder="Phone Number"
                  isValid={errors.phoneNumber ? false : true}
                />
                {errors.phoneNumber && (
                  <SpanSmallText>
                    Phone number is required and must be valid (0-9,-,+,(,), min
                    6 digits and max 20 digits)
                  </SpanSmallText>
                )}
              </InputWrapper>
              <InputWrapper>
                <TextArea
                  {...register("deliveryAddress", {
                    required: true,
                    maxLength: 120
                  })}
                  placeholder="Delivery Address"
                  isValid={errors.deliveryAddress ? false : true}
                />
                <Counter>
                  {watch("deliveryAddress")
                    ? watch("deliveryAddress").length
                    : ""}
                </Counter>
                {errors.deliveryAddress && (
                  <SpanSmallText>
                    Delivery address is required and must be less than or equal
                    to 120 characters
                  </SpanSmallText>
                )}
              </InputWrapper>
              <CheckboxWrapper>
                <input
                  type="checkbox"
                  {...idDropshipper}
                  onChange={(e) => {
                    idDropshipper.onChange(e);
                    handleCheckboxChange(e);
                  }}
                />
                <CheckboxLabel>Send as Dropshipper</CheckboxLabel>
              </CheckboxWrapper>
            </FormDivideWrapper>
            {isDropshipper && (
              <FormDivideWrapper>
                <InputWrapper>
                  <Input
                    {...register("dropshipperName", { required: true })}
                    placeholder="Dropshipper Name"
                    isValid={errors.dropshipperName ? false : true}
                  />
                  {errors.dropshipperName && (
                    <SpanSmallText>Dropshipper name is required</SpanSmallText>
                  )}
                </InputWrapper>
                <InputWrapper>
                  <Input
                    type="tel"
                    placeholder="Delivery Phone Number"
                    {...register("dropshipperPhoneNumber", {
                      required: true,
                      pattern: /^[0-9()+-]{6,20}$/i
                    })}
                    isValid={errors.dropshipperPhoneNumber ? false : true}
                  />
                  {errors.dropshipperPhoneNumber && (
                    <SpanSmallText>
                      Dropshipper phone number is required and must be valid
                      (0-9,-,+,(,), min 6 digits and max 20 digits)
                    </SpanSmallText>
                  )}
                </InputWrapper>
              </FormDivideWrapper>
            )}
          </form>
        </FormWrapper>
        <SummaryWrapper>
          <Title>Summary</Title>
          <div>
            <div>
              <Label>
                Cost of Goods: <LabelSpan>500,000</LabelSpan>
              </Label>
              {isDropshipper && (
                <Label>
                  Dropshipper Fee: <LabelSpan>5,900</LabelSpan>
                </Label>
              )}
            </div>
            {isDropshipper ? (
              <TotalFeeSpan>
                Total Fee: <LabelSpan>505,900</LabelSpan>
              </TotalFeeSpan>
            ) : (
              <TotalFeeSpan>
                Total Fee: <LabelSpan>500,000</LabelSpan>
              </TotalFeeSpan>
            )}
          </div>
          <Button form="shipment" type="submit">
            Continue to Payment
          </Button>
        </SummaryWrapper>
      </Container>
    </Wrapper>
  );
};

export default DeliveryPage;
