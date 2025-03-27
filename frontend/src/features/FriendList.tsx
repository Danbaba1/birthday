import { Friend } from "../types/Friends";

interface Props {
  friends: Friend[];
  onRemove: (id: string) => void;
  onSelect: (friend: Friend) => void;
}

const FriendList = ({ friends, onRemove, onSelect }: Props) => (
  <ul>
    {friends.map((friend) => (
      <li key={friend.id} className="py-2 border-b flex justify-between">
        <span onClick={() => onSelect(friend)}>
          {friend.name} (@{friend.username})
        </span>
        <button
          className="bg-gray-500 text-white px-3 py-1 rounded"
          onClick={() => onRemove(friend.id)}
        >
          Remove
        </button>
      </li>
    ))}
  </ul>
);

export default FriendList;
