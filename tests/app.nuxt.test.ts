import { describe, it, expect } from 'vitest';

describe('my test', () => {
    it('works', () => {
        expect(useAppConfig()).toMatchInlineSnapshot(5);
    });
});