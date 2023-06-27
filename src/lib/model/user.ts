export type UserToken = {
	role: string;
	username: string;
	id: string;
	accessToken: string;
};

export type User = {
	id?: number;
	username: string;
	f_name: string;
	l_name: string;
	email: string;
	password?: string;
	avatar?: string;
    role?: string;
    created_at?: string;
    updated_at?: string;
    ban?: boolean;
};

export type UserEdit = {
    username?: string;
    f_name?: string;
    l_name?: string;
    email?: string;
    password?: string;
    avatar?: string;
    role?: string;
    ban?: boolean;
};

