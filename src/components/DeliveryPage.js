import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  height: 500px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
`;

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${(props) => (props.isValid ? "green" : "red")};
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${(props) => (props.isValid ? "green" : "red")};
  border-radius: 5px;
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

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
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
          <h2>Delivery Details</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
              <Label>Email</Label>
              <Input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i
                })}
                isValid={errors.email ? false : true}
              />
              {errors.email && <span>Email is required and must be valid</span>}
            </InputWrapper>
            <InputWrapper>
              <Label>Phone Number</Label>
              <Input
                type="tel"
                {...register("phoneNumber", {
                  required: true,
                  pattern: /^[0-9()+-]{6,20}$/i
                })}
                isValid={errors.phoneNumber ? false : true}
              />
              {errors.phoneNumber && (
                <span>
                  Phone number is required and must be valid (0-9,-,+,(,), min 6
                  digits and max 20 digits)
                </span>
              )}
            </InputWrapper>
            <InputWrapper>
              <Label>Delivery Address</Label>
              <TextArea
                {...register("deliveryAddress", {
                  required: true,
                  maxLength: 120
                })}
                isValid={errors.deliveryAddress ? false : true}
              />
              <Counter>
                {watch("deliveryAddress")
                  ? watch("deliveryAddress").length
                  : ""}
              </Counter>
              {errors.deliveryAddress && (
                <span>
                  Delivery address is required and must be less than or equal to
                  120 characters
                </span>
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
            {isDropshipper && (
              <>
                <InputWrapper>
                  <Label>Dropshipper Name</Label>
                  <Input
                    {...register("dropshipperName", { required: true })}
                    isValid={errors.dropshipperName ? false : true}
                  />
                  {errors.dropshipperName && (
                    <span>Dropshipper name is required</span>
                  )}
                </InputWrapper>
                <InputWrapper>
                  <Label>Dropshipper Phone Number</Label>
                  <Input
                    type="tel"
                    {...register("dropshipperPhoneNumber", {
                      required: true,
                      pattern: /^[0-9()+-]{6,20}$/i
                    })}
                    isValid={errors.dropshipperPhoneNumber ? false : true}
                  />
                  {errors.dropshipperPhoneNumber && (
                    <span>
                      Dropshipper phone number is required and must be valid
                      (0-9,-,+,(,), min 6 digits and max 20 digits)
                    </span>
                  )}
                </InputWrapper>
              </>
            )}
            <Button type="submit">Continue to Payment</Button>
          </form>
        </FormWrapper>
        <SummaryWrapper>
          <h2>Summary</h2>
          <div>
            <div>Cost of Goods: 50,000</div>
            {isDropshipper && <div>Dropshipper Fee: 5,900</div>}
          </div>
        </SummaryWrapper>
      </Container>
    </Wrapper>
  );
};

export default DeliveryPage;
