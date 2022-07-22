import { MainLayout, AuthLayout } from './layouts';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NoContent from "./pages/NoContent";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="inbox" element={<NoContent pageName="Inbox" />} />
        <Route path="accounts" element={<NoContent pageName="Accounts" />} />
        <Route path="schedule" element={<NoContent pageName="Schedule" />} />
        <Route path="analytics" element={<NoContent pageName="Analytics" />} />
        <Route path="files" element={<NoContent pageName="Files" />} />
        <Route path="setting" element={<NoContent pageName="Setting" />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
