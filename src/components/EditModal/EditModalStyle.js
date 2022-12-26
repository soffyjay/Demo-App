import styled from "styled-components";

export const EditStyle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  max-width: 1600px;
  margin: auto;
  justify-content: center;
  .CreateContent {
    background: #fff;
    margin-top: 10%;
    width: 500px;
    height: 370px;
    color: black;
    padding: 16px 24px 32px 24px;
    h2 {
      font-weight: 600;
      border-bottom: 1px solid #efeff0;
      font-size: 15px;
      padding: 16px 0;
      margin-bottom: 16px;
    }
    .InputTextArea {
      display: flex;
      flex-direction: column;
      label {
        padding-bottom: 8px;
        font-size: 14px;
      }
      textarea {
        border: 1px solid #efeff0;
        border-radius: 4px;
        width: 452px;
        height: 92px;
        padding: 10px;
        box-sizing: border-box;
        resize: none;
        outline: none;
        font-family: Montserrat !important;
        &:focus {
          background-color: #fafafa;
        }
      }
    }
    .ActionButtons {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      width: 90%;
      margin-top: 32px;
      button {
        width: 119px;
        height: 40px;
        background: #999a9b;
        border-radius: 4px;
        border: none;
        color: #fff;
        margin-left: 32px;
        font-weight: 500;
        cursor: pointer;
      }
      .Cancel {
        width: 92px;
        height: 40px;
        margin: 0;
        color: #20262f;
        background: #efeff0;
        border-radius: 4px;
      }
    }
  }
`;
