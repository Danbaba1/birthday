import { Friend } from "../types/Friends";

interface Props {
  requests: Friend[];
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
}

const FriendRequests = ({ requests, onAccept, onReject }: Props) => (
  <ul>
    {requests.map((friend) => (
      <li key={friend.id} className="py-2 border-b flex justify-between">
        <span>
          {friend.name} (@{friend.username})
        </span>
        <div>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
            onClick={() => onAccept(friend.id)}
          >
            Accept
          </button>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => onReject(friend.id)}
          >
            Reject
          </button>
        </div>
      </li>
    ))}
  </ul>
);

export default FriendRequests;
