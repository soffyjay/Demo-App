import React, { useContext, useEffect } from "react";
import { Style } from "./Style";
import check from "../../Icons/Group.svg";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context";
import { VerifyMeMutation } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";

const EmailVerify = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(AppContext);

  const [verifyMe] = useMutation(VerifyMeMutation);

  useEffect(() => {
    if (user) {
      VerifyAccount();
    }
  }, [user]);
  VerifyAccount();
  async function VerifyAccount() {
    if (user?.email_verification_token) {
      try {
        let newData;
        newData = await verifyMe({
          variables: {
            token: user?.email_verification_token,
          },
        });
      } catch (e) {
        console.log(e);
      } finally {
      }
    }
  }

  return (
    <Style>
      <div className="Box">
        <img src={check} />
        <p>Your email address has been verified.</p>
        <span onClick={() => navigate("/home")}>Go to Dashboard {">"}</span>
      </div>
    </Style>
  );
};

export default EmailVerify;
