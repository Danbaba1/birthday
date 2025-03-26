import { useEffect, useState } from "react";
import { Friend } from "../../../../types/Friends";
import "./profile.css";

const UserProfile = () => {
  const [friendRequests, setFriendRequests] = useState<Friend[]>([]);
  const [friends, setFriends] = useState<Friend[]>([]);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  useEffect(() => {
    try {
      fetch("/api/friendRequest/send")
        .then((res) => res.json())
        .then((data) => setFriendRequests(data))
        .catch((error) => console.error("Error fetching friend requests:", error));
  
      fetch("/api/friends")
        .then((res) => res.json())
        .then((data) => setFriends(data))
        .catch((error) => console.error("Error fetching friends:", error));
    } catch (error) {
      console.error("Fetch is undefined:", error);
    }
  }, []);
  

  const handleAcceptRequest = async (friendId: string) => {
    try {
      const response = await fetch(`/api/friendRequest/accept/${friendId}`, {
        method: "POST",
      });

      if (response.ok) {
        const acceptedFriend = friendRequests.find((f) => f.id === friendId);
        if (acceptedFriend) {
          setFriends((prevFriends) => [...prevFriends, acceptedFriend]);
          setFriendRequests((prevRequests) =>
            prevRequests.filter((f) => f.id !== friendId)
          );
        }
      } else {
        console.error("Failed to accept friend request");
      }
    } catch (error) {
      console.error("Error accepting friend request:", error);
    }
  };

  return (
    <div className="profile-container p-4">
      <h2 className="text-xl font-bold">Friend Requests</h2>
      <ul>
        {friendRequests.map((friend) => (
          <li key={friend.id} className="py-2 border-b flex justify-between items-center">
            <span>
              {friend.name} (@{friend.username})
            </span>
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded"
              onClick={() => handleAcceptRequest(friend.id)}
            >
              Follow
            </button>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mt-4">Connected Friends</h2>
      <ul>
        {friends.map((friend) => (
          <li
            key={friend.id}
            className="py-2 border-b cursor-pointer"
            onClick={() => setSelectedFriend(friend)}
          >
            {friend.name} (@{friend.username})
          </li>
        ))}
      </ul>

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
    </div>
  );
};

export default UserProfile;
