import React, { useState, useContext } from "react";
import { AppContext } from "../../context";
import { ActionButton, PasswordInput, TextInput } from "../../components";
import { Link } from "react-router-dom";
import { SignupContainer } from "./SignupStyle";
import { isValidEmail } from "../../utitlities";
import { CreateAccountMutation } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
import { useApolloClient } from "@apollo/client";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFIrstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const defaultErrors = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [errors, setErrors] = useState(defaultErrors);

  const [signUp] = useMutation(CreateAccountMutation);

  const { user, setUser } = useContext(AppContext);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Wrong email format!",
      }));
    } else {
      setErrors(defaultErrors);
    }
    setEmail(event.target.value);
  };

  async function createAccount() {
    setLoading(true);
    if (firstName && lastName && password && email && passwordValid) {
      try {
        let newUser;
        newUser = await signUp({
          variables: {
            first_name: firstName.toLowerCase(),
            last_name: lastName.toLowerCase(),
            email: email.toLowerCase(),
            password: password,
          },
        });

        setUser(newUser?.data?.signup?.user);
        localStorage.setItem("token", newUser?.data?.signup?.token);
        navigate("/");
      } catch (e) {
        console.log(e);
      } finally {
        // client.resetStore();
        // closeModal();
        navigate("/home");
      }
    }

    setLoading(false);
  }

  return (
    <SignupContainer>
      <h1>Create an Account</h1>
      <div className="UserQuestion">
        <p>Already have an account? </p>
        <Link to="/">Login</Link>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="NameContainer">
          <TextInput
            name="First name"
            width="320px"
            placeholder="Type here"
            value={firstName}
            handleChange={(e) => setFIrstName(e.target.value)}
          />
          <TextInput
            name="Last name"
            width="320px"
            placeholder="Type here"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <TextInput
          name="Email Address"
          width="656px"
          handleChange={(e) => handleEmailChange(e)}
          isEmail
          placeholder="Type your email address here"
          errorMessage={errors?.email}
          value={email}
        />
        <PasswordInput
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          setPasswordValid={setPasswordValid}
        />
        <ActionButton
          text="Sign up"
          loading={loading}
          handleClick={createAccount}
        />
      </form>
    </SignupContainer>
  );
};

export default Signup;
