import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 21px;
  label {
    padding-bottom: 8px;
    font-size: 14px;
  }
  input {
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    height: 40px;
    width: ${(props) => props.width};
    outline: none;
    font-family: Montserrat !important;
    padding: 10px;
    box-sizing: border-box;
    font-size: 14px;
    margin-top: 4px;

    &:focus {
      background-color: #fafafa;
    }
  }
  small {
    font-weight: 400;
    font-size: 12px;

    color: #f41e10;
  }
`;
