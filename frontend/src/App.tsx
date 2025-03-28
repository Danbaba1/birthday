import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Members from "./features/MembersArea/members/index";
import Explore from "./features/MembersArea/members/explore/index";
import Sidebar from "./features/MembersArea/sidebar/index";
import Profile from "./features/MembersArea/members/profile/profile";
import RegisterForm from "./features/Register/components/RegisterForm";
import LoginForm from "./features/Login/LoginForm";
import Search from "./features/MembersArea/members/search";
import "./app.css";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="large-screens">
        This app is unavailable for large screens. Please use a mobile device.
      </div>
      <div className="members-container">
        <Sidebar />
        <div className="members-wrapper">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Members />} />
              <Route path="/search" element={<Search />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
