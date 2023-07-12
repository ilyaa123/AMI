export type UserType = Partial<{
    name: string,
    image: {
        color?: string
    }
}> | null