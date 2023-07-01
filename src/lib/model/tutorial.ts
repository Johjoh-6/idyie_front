
export type Tutorial = {
	id: number;
	title: string;
	content: string;
	view_count: number;
	comment_count?: number;
	avg_rating: number;
	durate: number;
	categorie: {
		id: number;
		name: string;
	};
	user: {
		id: number;
		username: string;
		avatar?: string;
	};
	created_at: string;
	draft?: boolean;
};

export type TutorialEdit = {
	title: string;
	content: string;
	durate: number;
	id_category: number;
	draft?: boolean;
};



export type TutorialResponse = {
    id: number;
    title: string;
    content: string;
    id_category: number;
    durate: number;
    date: string;
    view_count: number;
    avg_rating: number;
    created_at: string;
    updated_at?: string;
};