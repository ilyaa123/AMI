import { describe, it, expect } from 'vitest';

describe('test app', () => {
	it('it works', () => {
		expect(useAppConfig()).toMatchInlineSnapshot('{}');
	});
});
