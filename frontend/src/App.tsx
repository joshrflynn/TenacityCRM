import "./App.css";
import ClientDetails from "./components/client/ClientDetails";
import CreateClient from "./components/client/CreateClient";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardRedirect from "./components/home/DashboardRedirect";
import Home from "./components/home/Home";
import NotFound from "./components/notFound/NotFound";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DashboardRedirect>
            <Home />
          </DashboardRedirect>
        }
      />
      <Route
        path="signin"
        element={
          <DashboardRedirect>
            <SignIn />
          </DashboardRedirect>
        }
      />
      <Route
        path="signup"
        element={
          <DashboardRedirect>
            <SignUp />
          </DashboardRedirect>
        }
      />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="client">
        <Route path=":id" element={<ClientDetails />} />
        <Route path="create" element={<CreateClient />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
