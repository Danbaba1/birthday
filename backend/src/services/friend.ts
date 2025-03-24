import User from "../models/user";

export const sendFriendRequest = async (senderId: any, receiverId: any) => {
  const sender = await User.findById(senderId);
  const receiver = await User.findById(receiverId);

  if (!sender || !receiver) {
    return { success: false, error: "User not found" };
  }
  if (
    receiver.friendRequests.includes(senderId) ||
    receiver.friends.includes(senderId)
  ) {
    return { success: false, error: "Friend request already sent" };
  }
  receiver.friendRequests.push(senderId);
  await receiver.save();
  return { success: true };
};

export const acceptFriendRequest = async (userId: any, friendId: any) => {
  const user = await User.findById(userId);
  const friend = await User.findById(friendId);
  if (!user || !friend) {
    return { success: false, error: "User not found" };
  }
  if (user.friends.includes(friendId)) {
    return { success: false, error: "Friend Request already accepted" };
  }
  if (!user.friendRequests.includes(friendId)) {
    return { success: false, error: "No friend request found" };
  }
  user.friends.push(friendId);
  friend.friends.push(userId);
  user.friendRequests = user.friendRequests.filter((_id)=>(_id.toString()!==friendId));
  await user.save();
  await friend.save();
  return { success: true };
};

export const rejectFriendRequest = async (userId: any, friendId: any) => {
  const user = await User.findById(userId);
  const friend = await User.findById(friendId);
  if (!user || !friend) {
    return { success: false, error: "User not found" };
  }
  if (user.friends.includes(friendId)) {
    return { success: false, error: "Friend Request already accepted" };
  }
  if (!user.friendRequests.includes(friendId)) {
    return { success: false, error: "No friend request found" };
  }
  user.friendRequests = user.friendRequests.filter((_id)=>(_id.toString()!==friendId));
  await user.save();
  return { success: true };
};

export const removeFriend = async (userId: any, friendId: any) => {
  const user = await User.findById(userId);
  const friend = await User.findById(friendId);
  if (!user || !friend) {
    return { success: false, error: "User not found" };
  }
  if (!user.friends.includes(friendId)) {
    return { success: false, error: "Friend not found" };
  }
  
  user.friends = user.friends.filter((_id)=>(_id.toString()!==friendId));
  friend.friends = friend.friends.filter((_id)=>(_id.toString()!==userId));
  await user.save();
  await friend.save();
  return { success: true };
};