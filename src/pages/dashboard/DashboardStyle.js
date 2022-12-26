import styled from "styled-components";

export const DashboardStyle = styled.div`
  background-color: #fff;
  min-height: 100vh;
  max-width: 1600px;
  margin: auto;
  position: relative;

  header {
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    .HeaderContainer {
      align-items: center;
      display: flex;
      padding: 0 55px;
      justify-content: space-between;
      height: 72px;
      h1 {
        color: #000000;
      }
    }
    .Logut {
      width: 114px;
      height: 44px;
      border: 1px solid #fefefe;
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.18);
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 30px;
      z-index: 5;
      background-color: #fff !important;
      cursor: pointer;
      p {
        font-weight: 500;
        color: #f41e10;
      }
    }
  }
  .NameDropdown {
    display: flex;
    align-items: center;
    cursor: pointer;
    h2 {
      color: #131415;
      font-weight: 600;
      font-size: 16px;
      margin-right: 12px;
    }
  }
  .Create {
    position: fixed;
    bottom: 43px;
    right: 43px;
  }
  .DashboardBody {
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    padding: 0 35px;
    background: #f0f0f0;
    padding-top: 32px;
  }
  .LoadContainer {
    display: flex;
    width: 100%;
    margin-top: 150px;
    justify-content: center;
    background: #f0f0f0;
    height: 100vh;
  }
  .PaginationButton {
    background: #f0f0f0;
    display: flex;
    justify-content: flex-end;
    padding-right: 40px;
    padding-top: 20px;

    button {
      margin-left: 20px;
      width: 80px;
      height: 40px;
    }
  }
`;
