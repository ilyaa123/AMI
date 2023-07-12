import { describe, it, expect } from 'vitest';

describe('app test', () => {
    it('works', () => {
        expect(useAppConfig()).toMatchInlineSnapshot('{}')
    })
})