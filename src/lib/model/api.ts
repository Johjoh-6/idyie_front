export type Success = {
    message: string;
}

export interface Error {
    error: string;
}
export type ErrorRes  = {
    message: string;
} & Error;
