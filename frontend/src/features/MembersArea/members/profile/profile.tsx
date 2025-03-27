import { useFriends } from "../../../../hooks/useFriends";
import FriendList from "../../../../features/FriendList";
import FriendRequests from "../../../../features/FriendRequests";
import "./profile.css";

const UserProfile = () => {
  const {
    friendRequests,
    friends,
    selectedFriend,
    setSelectedFriend,
    handleSendRequest,
    handleAcceptRequest,
    handleRejectRequest,
    handleRemoveFriend,
  } = useFriends();

  return (
    <div className="profile-container p-4">
      <h2 className="text-xl font-bold">Friend Requests</h2>
      <FriendRequests
        requests={friendRequests}
        onAccept={handleAcceptRequest}
        onReject={handleRejectRequest}
      />

      <h2 className="text-xl font-bold mt-4">Connected Friends</h2>
      <FriendList
        friends={friends}
        onRemove={handleRemoveFriend}
        onSelect={setSelectedFriend}
      />

      {selectedFriend && (
        <div className="mt-4 p-4 border rounded">
          <img
            src="https://via.placeholder.com/120"
            alt="User Profile"
            className="profile-img"
          />
          <h2 className="text-lg font-bold">{selectedFriend.name}</h2>
          <p>Username: {selectedFriend.username}</p>
          <p>Email: {selectedFriend.email || "N/A"}</p>
          <p>Date of Birth: {selectedFriend.dob || "N/A"}</p>
          <p>Location: {selectedFriend.location || "N/A"}</p>
          <p>Hobbies: {selectedFriend.hobbies || "N/A"}</p>
          <button
            className="mt-2 bg-red-500 text-white px-4 py-2"
            onClick={() => setSelectedFriend(null)}
          >
            Close
          </button>
        </div>
      )}

      <div className="mt-4">
        <h2 className="text-xl font-bold">Send Friend Request</h2>
        <button
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={() => handleSendRequest("friend_id_here")}
        >
          Send Request
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
