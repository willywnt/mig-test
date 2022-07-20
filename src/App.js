import { MainLayout, AuthLayout } from './layouts';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <MainLayout>
          <Dashboard />
        </MainLayout>
      } />
      <Route path="login" element={
        <AuthLayout>
          <Login />
        </AuthLayout>
      } />
    </Routes>
  );
}

export default App;
