export type Category = {
	id: number;
    name: string;
    created_at: string;
	updated_at: string;
};

export type CategoryCreate = {
	name: string;
    parent?: number;
};

export type CategoryUpdate = {
    name: string;
    parent?: number;
};

export type CategoryResponse = {
    id: number;
    name: string;
    id_category_parent: number;
};