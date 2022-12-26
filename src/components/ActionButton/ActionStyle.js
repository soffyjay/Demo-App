import styled from "styled-components";

export const ActionStyle = styled.div`
  margin-top: 40px;
  display: flex;
  position: relative;
  button {
    background-color: ${(props) => (props.disabled ? "#B7BCC3" : "#555658")};
    border: none;
    outline: none;
    width: 656px;
    height: 48px;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
  }
  .loading {
    position: absolute;
    right: 120px;
    top: 7px;
  }
`;
