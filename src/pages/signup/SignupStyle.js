import styled from "styled-components";

export const SignupContainer = styled.div`
  width: 720px;
  min-height: 465px;
  background-color: #ffffff !important;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 0 32px 40px 32px;
  margin: auto;
  margin-top: 100px;

  h1,
  p {
    text-align: center;
    background-color: #ffffff;
  }
  h1 {
    font-weight: 600;
    font-size: 24px;
    padding-top: 24px;
    padding-bottom:5px;
  }
  .UserQuestion {
    background: #fff;
    width: 100%;
    justify-content: center;
    display: flex;
    color: #777777;
    a {
      text-decoration: none;
      font-weight: 5s00;
      font-size: 16px;

      color: #004cbd;
    }
  }
  .NameContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing:border:box;
    margin-top:31px;
  }
`;
