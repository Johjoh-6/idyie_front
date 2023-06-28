import { writable } from "svelte/store";

export const visitedTuto = writable<number[]>([]);