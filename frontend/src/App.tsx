import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Members from "./features/MembersArea/members";
// import Search from "./components/members/search";
import Explore from "./features/MembersArea/members/explore";
import Sidebar from "./features/MembersArea/sidebar/index";
import Profile from "./features/MembersArea/members/profile/profile";
import RegisterForm from "./features/Register/components/RegisterForm";
import "./app.css";
import LoginForm from "./features/Login/LoginForm";

function App() {
  return (
    <Router>
      <h3 className="large-screens">
        This app is unavailable for large screens. Please use a mobile device.
      </h3>
      <div className="members-container">
        <Sidebar />
        <div className="members-wrapper">
          <Routes>
            <Route path="/" element={<Members />} />
            <Route path="/register" element={<RegisterForm />} />
            {/* <Route path="/user-search" element={<Search />} /> */}
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
