
export type Tutorial = {
	id: number;
	title: string;
	content: string;
	view_count: number;
	avg_rating: number;
	duration: number;
	categorie: {
		id: number;
		name: string;
	};
	user: {
		id: number;
		username: string;
		avatar?: string;
	};
	date: string;
	created_at: string;
};

export type TutorialEdit = {
	title: string;
	content: string;
	duration: number;
	id_category: number;
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