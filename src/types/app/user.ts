export type UserType = Partial<{
	name: string;
	connId?: string;
	image: {
		color?: string;
	};
}> | null;
