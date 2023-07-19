import { API_URL } from "$env/static/private";
import type { Error, Success } from "$lib/model/api";
import type { User } from "$lib/model/user";
import { userToken } from "$lib/store/userToken";
import { get } from "svelte/store";


const login = async (email: string, password: string): Promise<Response> => {
    const response = await fetch(API_URL + 'api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
        return response;
}

const logout = async (): Promise<Response> => {
    const res = await fetch( API_URL +'api/logout', {
        method: 'POST',
        headers: {
            'control-allows-origin': '*',
        },
        credentials: 'include'
    });
    return res;
}

const register = async (email: string, password: string): Promise<Response> => {
    const response = await fetch(API_URL + 'api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        });
        return response;
}

const getUserById = async (): Promise<User> => {
    const token = get(userToken);
    const response = await fetch(API_URL + 'api/users/me', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` },
        credentials: 'include'
    });
    return response.json();
}

const updateUser = async (user: User, admin = false): Promise<User> => {
    const token = get(userToken);
    const url = admin ? API_URL + 'api/users/' + user.id : API_URL + 'api/users/me';
    const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` },
        body: JSON.stringify(user),
        credentials: 'include'
    });
    return response.json();
}
const getAllUsers = async (): Promise<User[]> => {
    const token = get(userToken);
    const response = await fetch(API_URL + 'api/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` },
        credentials: 'include'
    });
    return response.json();
}

const getUser = async (id: number): Promise<User> => {
    const token = get(userToken);
    const response = await fetch(API_URL + 'api/users/' + id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` },
        credentials: 'include'
    });
    return response.json();
}

const deleteUser = async (id: number): Promise<Error | Success> => {
    const token = get(userToken);
    const response = await fetch(API_URL + 'api/users/' + id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` },
        credentials: 'include'
    });
    if(response.status === 204) {
        return { message: 'Comment deleted' };
    }
    return response.json();
}

export { login, logout, register, getUserById, updateUser, getAllUsers, deleteUser, getUser };