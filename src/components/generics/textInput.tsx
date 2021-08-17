import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 56px;
  width: 100%;
  max-width: 356px;
  margin-bottom: 24px;
`;

const Label = styled.span`
  font-family: Open Sans;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.15px;
  color: #002350;
  pointer-events: none;

  position: absolute;
  top: 1rem;
  left: 2rem;
  line-height: 147.6%;
  transition: 0.2s;
`;

const Input = styled.input`
  --unit-size: 16px;
  margin: 0 var(--unit-size);
  background-color: #ffffff;
  border-radius: 6px;
  color: #353535;
  font-family: Open Sans;
  font-size: 16px;
  line-height: 22px;
  width: calc(100% - var(--unit-size) * 2 - 1rem);
  height: 2rem;
  padding: 1rem 1rem 0.5rem 0.825rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label}, &:not(:placeholder-shown) ~ ${Label} {
    top: 4px;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.2px;
  }
`;

const InfoText = styled.span`
  position: absolute;
  left: 2.3rem;
  top: 3.7rem;
  font-family: Open Sans;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.2px;
  color: #ffffff;
`;

type TextInputProps = {
  type: string;
  placeholder?: string;
  value: string | number;
  label: string;
  onChange: React.ChangeEventHandler;
  infoText?: string;
};

/**
 * Styled Input
 *
 * @param label - Input Label
 * @param infoText - Under-input text
 * @param ...rest - Propagated to input native html component
 * @return React Node
 */
const TextInput: React.FC<TextInputProps> = ({ label, infoText, ...rest }) => (
  <Wrapper>
    <Input placeholder=" " required {...rest} />
    <Label>{label}</Label>
    <InfoText>{infoText}</InfoText>
  </Wrapper>
);
export default TextInput;
