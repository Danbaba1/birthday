import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Friend } from "../../../../types/Friends";
import "./profile.css";

const OtherUserProfile = () => {
  const { userId } = useParams();
  const [userProfile, setUserProfile] = useState<Friend | null>(null);

  useEffect(() => {
    if (userId) {
      fetch(`/api/users/${userId}`)
        .then((res) => res.json())
        .then((data) => setUserProfile(data))
        .catch((error) => console.error("Error fetching user profile:", error));
    }
  }, [userId]);

  if (!userProfile) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile-container p-4">
      <img
        src={userProfile.profilePic || "https://via.placeholder.com/120"}
        alt="User Profile"
        className="profile-img"
      />
      <h2 className="text-lg font-bold">{userProfile.name}</h2>
      <p>Username: {userProfile.username}</p>
      <p>Email: {userProfile.email || "N/A"}</p>
      <p>Date of Birth: {userProfile.dob || "N/A"}</p>
      <p>Location: {userProfile.location || "N/A"}</p>
      <p>Hobbies: {userProfile.hobbies || "N/A"}</p>
    </div>
  );
};

export default OtherUserProfile;
