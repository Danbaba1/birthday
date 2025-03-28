import { create } from "zustand";
import axios from "axios";

interface User {
  _id: string,
  username: string;
  email: string;
  friends: string[];
  friendRequests: string[];
}

interface UserState {
  users: User[];
  fetchUsers: () => Promise<void>;
  searchUser: (query: string) => User | undefined;
}

export const useUserStore = create<UserState>((set, get) => ({
  users: [],
  
  fetchUsers: async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");
  
      const response = await axios.get("http://localhost:3000/api/users", {
        headers: { Authorization: token },
      });
  
      console.log("Raw API Response:", response.data);
  
      const usersWithId = response.data.map((user: User) => ({
        ...user,
        id: user._id,
      }));
  
      console.log("Mapped Users:", usersWithId);
  
      set({ users: usersWithId });
  
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },

  searchUser: (query) => {
    return get().users.find(user => 
      user.username.toLowerCase().includes(query.toLowerCase())
    );
  },
}));
