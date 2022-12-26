import styled from "styled-components";

export const CardStyle = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 242px;
  box-sizing: border-box;
  padding: 20px;
  color: #000000;
  margin: 12px;
  background: #fff;
  overflow-y: scroll;
  cursor: pointer;

  &:hover {
    background: #fafafa;
  }
  span {
    color: #555658;
    font-weight: 400;
    font-size: 12px;
    padding-bottom: 4px;
    display: block;
  }
  h3 {
    font-weight: 600;
    font-size: 16px;
    padding-bottom: 16px;
  }
  p {
    padding-top: 4px;
    font-weight: 400;
    font-size: 14px;
    color: #131415;
    line-height: 1.4;
    width: 100%;
    height: 100%;
  }
  .Actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
  }
`;
