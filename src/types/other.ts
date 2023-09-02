export type RulesFunction = (
	value: string | null | undefined
) => boolean | string;

export type RulesType = RulesFunction[];
