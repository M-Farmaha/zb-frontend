import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import { Layout } from "./Layout/Layout";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";

import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

const StartPage = lazy(() => import("./pages/StartPage/StartPage.jsx"));
const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage.jsx"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage.jsx"));

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
