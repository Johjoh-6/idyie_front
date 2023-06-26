import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const jwt = event.cookies.get('authToken');
	const decript = jwt && parseJwt(jwt);
	event.locals.user = decript;
	if (event.locals.user) {
		event.locals.user.accessToken = jwt || '';
	}
	const response = await resolve(event);
	return response;
};

function parseJwt(token: string) {
	const base64Url = token.split('.')[1];
	const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	const jsonPayload = decodeURIComponent(
	  atob(base64)
		.split('')
		.map(function (c) {
		  return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		})
		.join('')
	);
  
	return JSON.parse(jsonPayload);
  }
  