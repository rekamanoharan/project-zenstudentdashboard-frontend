import { BrowserRouter, Routes, Route } from "react-router-dom";
import Provider from "./AuthContext";
import Class from "./Class";

import MainLayout from "./Layout";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Register";
import "./styles.css";
import TaskList from "./Tasks";
import Dashboard from "./Dashboard";
import Interview from "./Interview";
import Application from "./Applications";
import Webcode from "./Webcode";
import Certificate from "./Certificate";

export default function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Class />
                </MainLayout>
              </ProtectedRoute>
            }
            path="/"
          />
          <Route
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              </ProtectedRoute>
            }
            path="/dashboard"
          />
          <Route
            element={
              <ProtectedRoute>
                <MainLayout>
                  <TaskList />
                </MainLayout>
              </ProtectedRoute>
            }
            path="/tasks"
          />
          <Route
            element={
              <MainLayout>
                <Interview Tasks />
              </MainLayout>
            }
            path="/interview"
          />
          <Route
            element={
              <MainLayout>
                <Application />
              </MainLayout>
            }
            path="/applications"
          />
          <Route
            element={
              <MainLayout>
                <Webcode />
              </MainLayout>
            }
            path="/webcode"
          />
          <Route
            element={
              <MainLayout>
                <Certificate />
              </MainLayout>
            }
            path="/certificate"
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
