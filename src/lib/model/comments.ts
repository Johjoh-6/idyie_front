export interface Comment {
    id: number;
    content: string;
    date: string;
};

export type CommentGet = {
	tutorial: {
		id: number;
		title: string;
	};
	user: {
		id: number;
		username: string;
		avatar?: string;
	};
    res?: CommentGet[];
} & Comment;

export type CommentEdit = {
	content: string;
    id_tutorial?: number;
    parent_id?: number;
};

export type CommentResponse = {
    id_tutorial?: number;
    id_user?: number;
    user?: {
		id: number;
		username: string;
		avatar?: string;
	};
    created_at: string;
    updated_at?: string;
} & Comment;
