import { page } from "$app/stores";
import { API_URL } from "$env/static/private";
import type { Error, Success } from "$lib/model/api";
import type { CommentEdit, CommentGet, CommentResponse } from "$lib/model/comments";
import { get } from "svelte/store";


const getAllComments = async (): Promise<CommentGet[]> => {
    const response = await fetch(API_URL + 'api/comment',{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    });
    const comments = await response.json();
    return comments;
};

const getComment = async (id: number): Promise<CommentGet> => {
    const response = await fetch(API_URL + 'api/comment/' + id,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    });
    const comment = await response.json();
    return comment;
}

const getCommentsByTutorial = async (id: number): Promise<CommentGet[]> => {
    const response = await fetch(API_URL + 'api/comment/tutorial/' + id,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const comments = await response.json();
    return comments;
}

const createComment = async (commentCreate: CommentEdit): Promise<CommentResponse | Error> => {
    const token = get(page).data.user.accessToken;
    const response = await fetch(API_URL + 'api/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
        body: JSON.stringify(commentCreate),
        credentials: 'include',
    });
    const comment = await response.json();
    return comment;
}

const updateComment = async (id: number, commentUpdate: CommentEdit): Promise<CommentResponse  | Error> => {
    const token = get(page).data.user.accessToken;
    const response = await fetch(API_URL + 'api/comment/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` },
        body: JSON.stringify(commentUpdate),
        credentials: 'include'
    });
    const comment = await response.json();
    return comment;
}

const deleteComment = async (id: number): Promise<Success | Error> => {
    const token = get(page).data.user.accessToken;
    const response = await fetch(API_URL + 'api/comment/' + id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`},
        credentials: 'include'
    });
    const comment = await response.json();
    return comment;
}
    
export { getAllComments, getComment, getCommentsByTutorial, createComment, updateComment, deleteComment };