import User from "../models/user";

class FriendService {
	async findAllFriends(id: string) {
		return await User.findById(id)
			.populate("friends", "-password")
			.select("friend -_id");
	}
}

export default new FriendService();
