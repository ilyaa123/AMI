import { describe, it, expect } from 'vitest';

describe('app test', () => {
    it('works', async () => {
        expect(useAppConfig()).toMatchInlineSnapshot('{}')
    })
})