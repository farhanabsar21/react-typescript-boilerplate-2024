import { User } from "../@types/user-type";

export const fetchUserData = async (): Promise<User[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Replace with your API endpoint
    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }
    return response.json(); // Assuming API returns an array of User objects
};
