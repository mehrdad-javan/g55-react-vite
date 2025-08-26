import React from "react";
import {
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import InvitationApp from "./InvitationApp";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="users" element={<ManageUsers />} />
        <Route path="settings" element={<Settings />} />
        <Route path="invitations" element={<InvitationApp />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>

      <div className="btn-group">
        <button className="btn btn-outline-danger" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <button className="btn btn-outline-success" onClick={() => navigate(1)}>
          Go Forward
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/about")}
        >
          Go to About Us
        </button>
        <button
          className="btn btn-primary"
          onClick={() =>
            navigate("/dashboard", { state: { userId: 100, role: "USER" } })
          }
        >
          User Dashboard
        </button>
        <button
          className="btn btn-primary"
          onClick={() =>
            navigate("/dashboard", { state: { userId: 200, role: "ADMIN" } })
          }
        >
          Admin Dashboard
        </button>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="container">
      <h1>About Page</h1>
      <p>Welcome to the about page!</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Page</h1>
      <p>Welcome to the contact page!</p>
    </div>
  );
};

const NotFound = () => {
  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
    </div>
  );
};

const Dashboard = () => {
  const location = useLocation();
  console.log("STATE:", location.state);
  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <div className="row flex-grow-1">
        {/* Sidebar */}
        <div className="bg-light col-md-3 col-lg-2 px-0">
          <div className="bg-light p-3 h-100">
            <div className="nav flex-column">
              <a
                href="/dashboard"
                className="btn btn-outline-secondary w-100 mb-2"
              >
                Dashboard Home
              </a>
              <NavLink
                to="/dashboard/users"
                className="btn btn-outline-success w-100 mb-2"
              >
                Manage Users
              </NavLink>
              <NavLink
                to="/dashboard/invitations"
                className="btn btn-outline-success w-100 mb-2"
              >
                Invitations
              </NavLink>
              {location.state && location.state.role === 'ADMIN' && (
                <NavLink
                  to="/dashboard/settings"
                  className="btn btn-outline-success w-100 mb-2"
                >
                  Settings
                </NavLink>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="col-md-9 col-lg-10 px-md-4 h-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const ManageUsers = () => <h2>Manage Users Page</h2>;

const Settings = () => <h2>Settings Page</h2>;

export default AppRouters;
