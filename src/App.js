import GlobalStyle from "./GlobalStyle";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login, Signup } from "./pages";
import Dashboard from "./pages/dashboard/Dashboard";
import { AppContext } from "./context";
import { useState, useEffect } from "react";
import { CurrentUser } from "./graphql/queries";
import ProtectedRoutes from "./ProtectedRoutes";
import EmailVerify from "./pages/emailVerify/EmailVerify";

function App() {
  const [user, setUser] = useState("");

  //Invoking the current user query to get user data
  const getCurrentUser = CurrentUser();
  const currentUserData = getCurrentUser?.getMe;

  useEffect(() => {
    if (currentUserData) {
      setUser(currentUserData);
    }
  }, [currentUserData]);

  return (
    <AppContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/email/verify/:token"
            element={
              <ProtectedRoutes>
                <EmailVerify />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
