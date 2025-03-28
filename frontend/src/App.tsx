import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./features/Register/components/RegisterForm";
import LoginForm from "./features/Login/LoginForm";
import Members from "./features/MembersArea/members";
import "./app.css";

function App() {
  return (
    <Router>
      <div className="large-screens">
        This app is unavailable for large screens. Please use a mobile device.
      </div>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/*" element={<Members />} />
      </Routes>
    </Router>
  );
}

export default App;
