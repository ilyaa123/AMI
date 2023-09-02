/* eslint no-useless-return: 0 */

import useAuth from '~/composables/useAuth';

export default defineNuxtRouteMiddleware((to, from) => {
	const auth = useAuth();

	if (auth.user.value) {
		if (to.fullPath === '/' || to.fullPath.includes('app')) return;

		if (from.fullPath === '/registration-by-name') return navigateTo('/');
	} else if (to.fullPath === '/' || to.fullPath.includes('app')) {
		return navigateTo('/registration-by-name');
	}

	return;
});
