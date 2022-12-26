import React, { useState, useEffect } from "react";
import { VerifyStyle } from "./VerifyStyle";
import { useMutation } from "@apollo/client";
import { ResendVerificationMutation } from "../../graphql/mutations";

const Verify = () => {
  const [resendVerification] = useMutation(ResendVerificationMutation);

  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  async function resendVerifyUser() {
    try {
      let newData;
      newData = await resendVerification();
      if (newData) {
        setMessage(newData?.data?.resendVerificationEmail?.message);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2500);
      }
    } catch (e) {
      console.log(e);
    } finally {
    }
  }

  return (
    <VerifyStyle>
      <p>
        You have not verified your email address. Click{" "}
        <a onClick={resendVerifyUser}>here</a> to resend verification link.
      </p>
      {/*basic alert to let user know email is verified*/}
      {success && window.alert(message)}
    </VerifyStyle>
  );
};

export default Verify;
