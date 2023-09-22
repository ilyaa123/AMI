import path from 'path';

import { defineVitestConfig } from 'nuxt-vitest/config';

export default defineVitestConfig({
	root: path.resolve(__dirname),
	test: {
		environment: 'happy-dom'
	}
});
