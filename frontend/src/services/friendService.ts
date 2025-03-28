export const fetchFriendRequests = async () => {
	const response = await fetch("/api/friendRequest/send");
	return response.json();
};

export const fetchFriends = async () => {
	const response = await fetch("http://localhost:3000/api/friends");
	return response.json();
};

export const sendFriendRequest = async (friendId: string) => {
	return fetch(`http://localhost:3000/api/friendRequest/send`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ receiverId: friendId }),
	});
};

export const acceptFriendRequest = async (friendId: string) => {
	return fetch(`http://localhost:3000/api/friendRequest/accept`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ receiverId: friendId }),
	});
};

export const rejectFriendRequest = async (friendId: string) => {
	return fetch(`http://localhost:3000/api/friendRequest/reject`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ receiverId: friendId }),
	});
};

export const removeFriend = async (friendId: string) => {
	return fetch(`http://localhost:3000/api/friend/remove`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ receiverId: friendId }),
	});
};
