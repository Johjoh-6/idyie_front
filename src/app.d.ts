// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: import('$lib/model/user').UserToken | undefined; 
			tutorials: import('$lib/model/tutorial').Tutorial[] | undefined;
			categories: import('$lib/model/categorie').Category[] | undefined;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
