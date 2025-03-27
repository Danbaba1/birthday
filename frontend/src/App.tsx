import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Members from "./features/MembersArea/members";
import Explore from "./features/MembersArea/members/explore";
import Sidebar from "./features/MembersArea/sidebar/index";
import Profile from "./features/MembersArea/members/profile/profile";
import OtherUserProfile from "./features/MembersArea/members/profile/OtherUserProfile";
import RegisterForm from "./features/Register/components/RegisterForm";
import LoginForm from "./features/Login/LoginForm";
import Search from "./features/MembersArea/members/search";
import "./app.css";

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
            <Route path="/members" element={<Members />} />
            <Route path="/" element={<RegisterForm />} />
            <Route path="/search" element={<Search />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile/:userId" element={<OtherUserProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
