import styled from "styled-components";

export const CardButtonStyle = styled.div`
  margin-left: 20px;
  display: flex;
  position: relative;
  button {
    outline: none;
    border: none;
    border: 1px solid #555658;
    min-width: 72px;
    display: flex;
    height: 36px;
    cursor: pointer;
    background: ${(props) => (props.primary ? "#555658" : "#fff")};
    border-radius: 4px;
    color: ${(props) => (props.primary ? "#fff" : "black")};
    font-weight: 600;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
`;
