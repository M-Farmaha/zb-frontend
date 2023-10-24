import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout/Layout";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { StartPage } from "./pages/StartPage/StartPage";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { MainPage } from "./pages/MainPage/MainPage";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <StartPage />
              </PublicRoute>
            }
          />
          <Route
            path="deals"
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <AuthPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <AuthPage />
              </PublicRoute>
            }
          />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
