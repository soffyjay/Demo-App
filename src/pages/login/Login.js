import React, { useState, useEffect, useContext } from "react";
import { LoginStyle } from "./LoginStyle";
import { ActionButton, PasswordInput, TextInput } from "../../components";
import { Link } from "react-router-dom";
import { isValidEmail } from "../../utitlities";
import { LoginMutation } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
import { AppContext } from "../../context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const defaultErrors = {
    email: null,
    password: null,
  };

  const [errors, setErrors] = useState(defaultErrors);

  const [login] = useMutation(LoginMutation);
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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

  async function loginAccount() {
    setLoading(true);
    if (password && email) {
      try {
        let newUser;
        newUser = await login({
          variables: {
            email: email.toLowerCase(),
            password: password,
          },
        });

        setUser(newUser?.data?.login?.user);
        localStorage.setItem("token", newUser?.data?.login?.token);
        if (newUser?.data) {
          navigate("/home");
        }
      } catch (e) {
        if (e && localStorage.getItem("token")) {
          localStorage.removeItem("token");
        }
        console.log(e);
      } finally {
        // client.resetStore();
        // closeModal();
      }
    }

    setLoading(false);
  }

  useEffect(() => {
    if (errors.email == null && errors.password == null) {
      setButtonDisabled(false);
    } else setButtonDisabled(true);
  }, [email, password]);

  return (
    <LoginStyle>
      <h1>Login</h1>
      <div className="UserQuestion">
        <p>If you have no account,</p>
        <Link to="/signup">Sign up</Link>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <TextInput
          name="Email Address"
          width="656px"
          isEmail
          value={email}
          handleChange={(e) => handleEmailChange(e)}
          placeholder="Type your email address here"
          errorMessage={errors?.email}
        />
        <PasswordInput
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />

        <ActionButton
          text="Login"
          loading={loading}
          handleClick={loginAccount}
          disabled={buttonDisabled}
        />
      </form>
    </LoginStyle>
  );
};

export default Login;
