import { create } from 'zustand';
import { User } from '../@types/user-type';
import { fetchUserData } from '../services/userService';

interface UserState {
    users: User[]; // Array of User objects
    isLoading: boolean;
    error: string | null;
    fetchUsers: () => Promise<void>;
}

const useUserStore = create<UserState>((set) => ({
    users: [], // Initialize as an empty array
    isLoading: false,
    error: null,

    fetchUsers: async () => {
        set({ isLoading: true, error: null });
        try {
            const data = await fetchUserData();
            set({
                users: data,
                isLoading: false,
            });
        } catch (error) {
            set({ error: 'Failed to fetch user data', isLoading: false });
        }
    },
}));

export default useUserStore;
