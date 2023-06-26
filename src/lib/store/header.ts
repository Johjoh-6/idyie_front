import { writable } from "svelte/store";

export const header = writable({
    user: false,
    categories: false
});

export const closeHeader = () => {
    header.set({
        user: false,
        categories: false
    });
}