import { page } from "$app/stores";
import { API_URL } from "$env/static/private";
import type { Error, Success } from "$lib/model/api";
import type { Category } from "$lib/model/categorie";
import { get } from "svelte/store";


const getAllCategory = async (): Promise<Category[]> => {
    const response = await fetch(API_URL + 'api/categorie' ,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const category: Category[] = await response.json();
    return category;
}

const getCategory = async (id: number): Promise<Category> => {
    const response = await fetch(API_URL + 'api/categorie/' + id,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const category = await response.json();
    return category[0];
}

const createCategory = async (name: string, parent?: number): Promise<Category> => {
    const token = get(page).data.user.accessToken;
    const response = await fetch(API_URL + 'api/categorie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ name, parent }),
        credentials: 'include'
    });
    const category: Category = await response.json();
    return category;
}

const updateCategory = async (id: number, name: string, parent?: number): Promise<Category> => {
    const token = get(page).data.user.accessToken;
    const response = await fetch(API_URL + 'api/categorie/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ name, parent }),
        credentials: 'include'
    });
    const category: Category = await response.json();
    return category;
}

const deleteCategory = async (id: number): Promise<Success | Error> => {
    const token = get(page).data.user.accessToken;
    const response = await fetch(API_URL + 'api/categorie/' + id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` },
        credentials: 'include'
    });
    if(response.status === 204) {
        return { message: 'Comment deleted' };
    }
    const category = await response.json();
    return category;
}

export { getAllCategory, getCategory, createCategory, updateCategory, deleteCategory };