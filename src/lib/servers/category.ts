import { API_URL } from "$env/static/private";
import type { Error, Success } from "$lib/model/api";
import type { Category } from "$lib/model/categorie";


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
    const response = await fetch(API_URL + 'api/categorie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, parent }),
        credentials: 'include'
    });
    const category: Category = await response.json();
    return category;
}

const updateCategory = async (id: number, name: string, parent?: number): Promise<Category> => {
    const response = await fetch(API_URL + 'api/categorie/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, parent }),
        credentials: 'include'
    });
    const category: Category = await response.json();
    return category;
}

const deleteCategory = async (id: number): Promise<Success | Error> => {
    const response = await fetch(API_URL + 'api/categorie/' + id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    });
    const category = await response.json();
    return category;
}

export { getAllCategory, getCategory, createCategory, updateCategory, deleteCategory };